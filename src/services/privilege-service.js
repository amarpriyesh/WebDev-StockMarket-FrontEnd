import axios from "axios";
const BASE_URL = process.env.REACT_APP_ENVIRONMENT==="TEST"? process.env.REACT_APP_BASE_URL_TEST: process.env.REACT_APP_BASE_URL_PRODUCTION
const API_URL = process.env.REACT_APP_API_URL
const TOKEN = process.env.REACT_APP_API_TOKEN


export const updatePrivilege = async (userID,payload) => {
    const response = await axios.put(`${BASE_URL}/privileges/${userID}`,payload);

    return response.data;
};

export const getPrivilege = async (userID) => {
    const response = await axios.get(`${BASE_URL}/privileges/${userID}`);

    return response.data;
};