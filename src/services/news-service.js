import axios from "axios";
const BASE_URL = "http://localhost:4000/api";
const NEWS_URL = `${BASE_URL}/news`;
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
