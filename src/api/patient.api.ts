// api/patientApi.ts
import { Patient } from '@/types/patient';
import apiClient from '@/utils/apiClient';
import { getCookie } from 'cookies-next';

export const getPatients = async (page: number, pageSize: number = 8): Promise<{ patients: Patient[]; totalPages: number; currentPage: number }> => {
  try {
    const token = getCookie('jwt');

    if (!token) {
      throw new Error('No authentication token found');
    }

    const response = await apiClient.get(`/patient/patients`, { params: { page, pageSize }, headers: { Authorization: `Bearer ${token}` } });
    console.log('API Response:', response.data);

    return { patients: response.data.data.data, totalPages: response.data.data.totalPages, currentPage: response.data.data.currentPage };
  } catch (error) {
    console.error('Error fetching patients:', error);
    throw new Error('Failed to fetch patients');
  }
};
