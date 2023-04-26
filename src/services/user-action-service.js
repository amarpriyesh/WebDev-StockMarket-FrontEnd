import axios from "axios";

const BASE_URL = process.env.REACT_APP_ENVIRONMENT==="TEST"? process.env.REACT_APP_BASE_URL_TEST: process.env.REACT_APP_BASE_URL_PRODUCTION
const NEWS_URL = `${BASE_URL}/userAction`;

// console.log("NEWS_URL", NEWS_URL);

export const findAllLikedNewsByUser = async (userId) => {
    const response = await axios.get(`${NEWS_URL}/likedNews/${userId}`);
    return response.data;
};

export const findAllLikedViewsByUser = async (userId) => {
    const response = await axios.get(`${NEWS_URL}/likedViews/${userId}`);
    return response.data;
};

export const addViewLikeByUser = async (userId, newViewLiked) => {
    const response = await axios.put(`${NEWS_URL}/likedViews/add/${userId}`, newViewLiked);
    return response.data;
};

export const createNewUserAction = async (userAction) => {
    const response = await axios.post(`${NEWS_URL}` , userAction);
    return response.data;
};

export const hasUserLikedView = async (userId, viewId) => {
    const response = await axios.get(`${NEWS_URL}/likedViews/${userId}/${viewId}`);
    return response.data;
};

export const removeLikeViewFromUser = async (userId, viewId) => {
    const response = await axios.put(`${NEWS_URL}/likedViews/remove/${userId}/${viewId}`);
    return response.data;
};



