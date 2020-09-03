import axios from 'axios';

const query = 'JavaScript';

const api = axios.create({
  baseURL: `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=35`,
});

export default api;
