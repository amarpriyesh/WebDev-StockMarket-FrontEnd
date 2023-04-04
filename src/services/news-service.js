import axios from "axios";
/*import dotenv from 'dotenv'

dotenv.config()*/

const BASE_URL1 = process.env.REACT_APP_API_URL
const NEWS_URL = `${BASE_URL1}/news`;
console.log("NEWS_URL", NEWS_URL);

export const findAllNews = async () => {
    const response = await axios.get(NEWS_URL);
    const news = response.data;
    return news;
};


// export const findAllTuits = () => {
//   axios.get(TUITS_URL).then((response) => {
//     const tuits = response.data;
//     return tuits;
//   });
// };
