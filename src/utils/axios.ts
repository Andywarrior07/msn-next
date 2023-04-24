import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

export const axiosInstance = (token: string) =>
  axios.create({
    baseURL: API_URL,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

// Ver como utilizar singleton
