// utils/apiClient.ts
import axios from 'axios';

console.log('API Base URL:', process.env.NEXT_PUBLIC_API_BASE_URL);
const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    withCredentials: true,
  },
});

export default apiClient;
