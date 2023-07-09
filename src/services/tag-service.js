

import axios from "axios";
const BASE_URL = process.env.REACT_APP_ENVIRONMENT==="TEST"? process.env.REACT_APP_BASE_URL_TEST: process.env.REACT_APP_BASE_URL_PRODUCTION
const API_URL = process.env.REACT_APP_API_URL
const TOKEN = process.env.REACT_APP_API_TOKEN


export const findTagByNewsID = async (id1) => {

console.log("base url",BASE_URL)
    const response = await axios.get(`${BASE_URL}/tags/news/${id1}`);
    const news = response.data;
    console.log(news)
    return news;
};

export const findByUserID = async (id1) => {


    const response = await axios.get(`${BASE_URL}/tags/users/${id1}`);
    const news = response.data;
    return news.entities;
};

export const createTag = async (payload) => {


    const response = await axios.post(`${BASE_URL}/tags`,payload);
    const news = response.data;
    return news.entities;
};