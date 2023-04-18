import axios from "axios";
const BASE_URL = process.env.REACT_APP_ENVIRONMENT==="TEST"? process.env.REACT_APP_BASE_URL_TEST: process.env.REACT_APP_BASE_URL_PRODUCTION


export const findAllNews = async () => {
    const response = await axios.get(`${BASE_URL}/news`);
    const news = response.data;
    return news;
};


