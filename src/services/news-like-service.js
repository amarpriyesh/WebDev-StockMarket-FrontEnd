import axios from "axios";
const BASE_URL = process.env.REACT_APP_ENVIRONMENT==="TEST"? process.env.REACT_APP_BASE_URL_TEST: process.env.REACT_APP_BASE_URL_PRODUCTION
const API_URL = process.env.REACT_APP_API_URL
const TOKEN = process.env.REACT_APP_API_TOKEN


export const updateNewsLike = async (userID,newsID,like) => {
    const response = await axios.put(`${BASE_URL}/news/likes?user=${userID}&&news=${newsID}&&like=${like}`);
    const status = response.data;
    return status;
};

export const newsLikeCount = async (newsID) => {
    const response = await axios.get(`${BASE_URL}/news/likes/count/${newsID}`);
    const status = response.data;
    return status;
};

export const isNewsLiked = async (userID,newsID) => {
    const response = await axios.get(`${BASE_URL}/news/likes/user?user=${userID}&&news=${newsID}`);
    const status = response.data;
    return status;
};

export const newsLikedByUser = async (userID) => {
    const response = await axios.get(`${BASE_URL}/news/likes/user/${userID}`);
    const status = response.data;
    return status;
};


