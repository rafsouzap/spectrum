import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const baseURL = process.env.API_BASE_URL;

const api = axios.create({
  baseURL,
});

export default api;
