import axios from "axios";

const USERS_URL = "http://localhost:4000/api/users";

const api = axios.create({
    withCredentials: true,
});


export const findAllUsers = async () => {
    const response = await api.get(USERS_URL);
    return response.data;
};

export const deleteUser = async (userId) => {
    const response = await api.delete(`${USERS_URL}/${userId}`);
    return response.data;
};

export const updateUser = async (user) => {
    const response = await api.put(`${USERS_URL}/${user._id}`, user);
    return response.data;
};

