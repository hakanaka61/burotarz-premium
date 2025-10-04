import axios from 'axios';

const api = axios.create({
  baseURL: "https://burotarz-premium.onrender.com", // Backend Web Service URL
  headers: {
    'Content-Type': 'application/json'
  }
});

export default api;
