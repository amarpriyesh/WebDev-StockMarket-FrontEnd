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

export const login = async ({ username, password }) => {
    const response = await api.post(`${USERS_URL}/login`, {
        username,
        password,
    });
    return response.data;
};

export const logout = async () => {
    const response = await api.post(`${USERS_URL}/logout`);
    return response.data;
};

export const profile = async () => {
    const response = await api.post(`${USERS_URL}/profile`);
    return response.data;
};

export const register = async ({username,password, firstName, lastName, age, email}) => {
    const response = await api.post(`${USERS_URL}/register`,{
        username,
        password,
        firstName,
        lastName,
        age,
        email
    });
    return response.data;
};
