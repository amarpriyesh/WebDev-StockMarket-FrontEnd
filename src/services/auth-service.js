import axios from "axios";

const BASE_URL = process.env.REACT_APP_ENVIRONMENT==="TEST"? process.env.REACT_APP_BASE_URL_TEST: process.env.REACT_APP_BASE_URL_PRODUCTION

const api = axios.create({
                             withCredentials: true,
                         });



export const login = async ({ email, password }) => {
    console.log("BASE URL",BASE_URL)
    const response = await api.post(`${BASE_URL}/auth/login`, {
        "email":email,
        "password": password
    });
    return response.data;
};

export const googleLogin = async (user) => {
    console.log("BASE URL",BASE_URL)
    const response = await api.post(`${BASE_URL}/auth/google-login`, user);
    return response.data;
};


export const logout = async () => {
    const response = await api.post(`${BASE_URL}/auth/logout`);
    return response.data;
};

export const profile = async () => {
    const response = await api.post(`${BASE_URL}/auth/profile`);
    return response.data;
};

export const register = async ({username,password, firstName, lastName, age, email}) => {
    const response = await api.post(`${BASE_URL}/auth/register`,{
        username,
        password,
        firstName,
        lastName,
        age,
        email
    });
    return response.data;
};