import axios from "axios";
const BASE_URL = process.env.REACT_APP_ENVIRONMENT==="TEST"? process.env.REACT_APP_BASE_URL_TEST: process.env.REACT_APP_BASE_URL_PRODUCTION
const API_URL = process.env.REACT_APP_API_URL
const TOKEN = process.env.REACT_APP_API_TOKEN

export const createViewComment = async(payload) => {
    const response = await axios.post(`${BASE_URL}/viewComment`, payload);
    return response.data
}

export const findAllViewCommentsByUser = async (id) => {
    const response = await axios.get(`${BASE_URL}/viewComment/user/${id}`);
    const views = response.data;
    return views;

};

export const deleteViewComment = async (commentID) => {
    const response = await axios.delete(`${BASE_URL}/news/comments/`+commentID);
    const news = response.data;
    return news;
};