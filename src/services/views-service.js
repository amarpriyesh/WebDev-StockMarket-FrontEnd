import axios from "axios";

const BASE_URL = process.env.REACT_APP_ENVIRONMENT==="TEST"? process.env.REACT_APP_BASE_URL_TEST: process.env.REACT_APP_BASE_URL_PRODUCTION
const NEWS_URL = `${BASE_URL}/views`;

// console.log("NEWS_URL", NEWS_URL);

export const findAllViews = async () => {
    const response = await axios.get(NEWS_URL);
    const views = response.data;
    return views;
};


export const updateView = async (view) => {
    const response = await axios
        .put(`${NEWS_URL}/${view._id}`, view);
    return view;
}

export const createView = async (view) => {
    const response = await axios
        .post(`${NEWS_URL}`, view);
    return response.data;
}

export const createViewComment = async (view) => {
    const response = await axios
        .put(`${NEWS_URL}/${view._id}`, view);
    return response.data;
}

export const addViewComment = async (viewId, comment) => {
    const response = await axios
        .put(`${NEWS_URL}/comment/${viewId}`, comment);
    return response.data;
}

export const findAllViewComments = async (viewId) => {
    const response = await axios
        .get(`${NEWS_URL}/comment/${viewId}`);
    return response.data;
}

export const deleteViewComment = async (viewId, commentId) => {
    const response = await axios
        .put(`${NEWS_URL}/comment/${viewId}/${commentId}`);
    return response.data;
}

export const updateViewCommentCount = async (viewId, count) => {
    const response = await axios
        .put(`${NEWS_URL}/comment/count/${viewId}/${count}`);
    return response.data;
}

export const updateViewLikeCount = async (viewId, count) => {
    const response = await axios
        .put(`${NEWS_URL}/like/count/${viewId}/${count}`);
    return response.data;
}

export const increaseViewLikeCount = async (viewId) => {
    const response = await axios
        .put(`${NEWS_URL}/like/increase/${viewId}`);
    return response.data;
}

export const decreaseViewLikeCount = async (viewId) => {
    const response = await axios
        .put(`${NEWS_URL}/like/decrease/${viewId}`);
    return response.data;
}

export const deleteView = async (viewId) => {
    const response = await axios
        .delete(`${NEWS_URL}/${viewId}`);
    return response.data;
}

export const getViewLikeCount = async (viewId) => {
    const response = await axios.get(`${NEWS_URL}/like/${viewId}`);
    return response.data;
};



