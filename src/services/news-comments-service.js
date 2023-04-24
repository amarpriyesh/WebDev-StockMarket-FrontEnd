import axios from "axios";
const BASE_URL = process.env.REACT_APP_ENVIRONMENT==="TEST"? process.env.REACT_APP_BASE_URL_TEST: process.env.REACT_APP_BASE_URL_PRODUCTION
const API_URL = process.env.REACT_APP_API_URL
const TOKEN = process.env.REACT_APP_API_TOKEN


export const findAllComments = async (newsID) => {
    const response = await axios.get(`${BASE_URL}/news/comments/`+newsID);
    const news = response.data;
    return news;
};

export const deleteComment = async (commentID) => {
    const response = await axios.delete(`${BASE_URL}/news/comments/`+commentID);
    const news = response.data;
    return news;
};

export const updateComment = async (commentID,comment) => {
    const response = await axios.put(`${BASE_URL}/news/comments/`+commentID,comment);
    const news = response.data;
    return news;
};

export const createComment = async(payload) => {
    const response = await axios.post(`${BASE_URL}/news/comments/`,payload);
    return response.data
}

export const findNewsByID = async (id1) => {

    const req = API_URL+id1+"?api_token="+TOKEN
    //const req = BASE_URL+"/news/"+id1
    console.log("ID in service",req)
    const response = await axios.get(`${req}`);
    const news = response.data;
    return news.entities;
};

export const findNewsByUserID = async (id) => {
    const response = await axios.get(`${BASE_URL}/news/comments/user/${id}`);
    const news = response.data;
    return news;

};