import axios from 'axios';

export const axiosClient = axios.create({
  baseURL: 'https://api.thecatapi.com/v1',
  headers: {
    'Content-Type': 'application/json',
    'X-API-KEY': process.env.GATSBY_THE_CAT_API_KEY,
  },
});
