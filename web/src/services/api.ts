import axios from 'axios';

const baseURL = process.env.NODE_ENV === 'production' ? process.env.API_BASE_URL : "http://localhost:3333/";

const api = axios.create({
  baseURL,
});

export default api;
