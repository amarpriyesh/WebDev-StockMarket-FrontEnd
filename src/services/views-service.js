import axios from "axios";
const BASE_URL = "http://localhost:4000/api";
const NEWS_URL = `${BASE_URL}/views`;
console.log("NEWS_URL", NEWS_URL);

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
        .put(`${NEWS_URL}`, view);
    return response.data;
}

export const deleteView = async (viewId) => {
    const response = await axios
        .delete(`${NEWS_URL}/${viewId}`);
    return response.data;
}

