import axios from "axios";

const BASE_URL = process.env.REACT_APP_ENVIRONMENT==="TEST"? process.env.REACT_APP_BASE_URL_TEST: process.env.REACT_APP_BASE_URL_PRODUCTION

const api = axios.create({
    withCredentials: true,
});


export const findAllUsers = async () => {
    const response = await api.get(`${BASE_URL}/users`);
    return response.data;
};

export const deleteUser = async (userId) => {
    const response = await api.delete(`${BASE_URL}/users/${userId}`);
    return response.data;
};

export const updateUser = async (user) => {
    const response = await api.put(`${BASE_URL}/users/${user._id}`, user);
    return response.data;
};

export const findUserById = async (userId) => {
    const response = await api.get(`${BASE_URL}/users/${userId}`);
    return response.data;
}

