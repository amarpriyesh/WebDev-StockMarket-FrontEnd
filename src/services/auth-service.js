import axios from "axios";

const USERS_URL = "http://localhost:4000/api/auth";

const api = axios.create({
                             withCredentials: true,
                         });



export const login = async ({ email, password }) => {
    const response = await api.post(`${USERS_URL}/login`, {
        "email":email,
        "password": password
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