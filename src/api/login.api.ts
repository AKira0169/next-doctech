// src/api/login.api.ts

import { Credentials } from '@/types/credentials';
import apiClient from '@/utils/apiClient';
import { setCookie } from 'cookies-next';

export const login = async (credentials: Credentials): Promise<void> => {
  try {
    const response = await apiClient({
      method: 'POST',
      url: '/user/login', // Replace with your login API endpoint
      data: credentials,
    });
    setCookie('jwt', response.data.token, { path: '/', maxAge: 15 * 60 });
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
};
