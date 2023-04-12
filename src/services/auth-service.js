import axios from "axios";

const USERS_URL = process.env.ENVIRONMENT==="TEST"? `${process.env.BASE_URL_TEST}/api/auth` : `${process.env.BASE_URL_PRODUCTION}/api/auth`

const api = axios.create({
                             withCredentials: true,
                         });



export const login = async ({ email, password }) => {
    console.log(USERS_URL)
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