// api/patientApi.ts
import { Patient } from '@/types/patient';
import apiClient from '@/utils/apiClient';
import { getCookie } from 'cookies-next';

export const getPatients = async (page: number, pageSize: number = 8): Promise<{ patients: Patient[]; totalPages: number; currentPage: number }> => {
  try {
    const token = getCookie('jwt');
    const response = await apiClient.get(`/patient/patients?page=${page}&pageSize=${pageSize}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return {
      patients: response.data.data,
      totalPages: response.data.totalPages,
      currentPage: response.data.currentPage,
    };
  } catch (error) {
    console.error('Error fetching patients:', error);
    throw error;
  }
};
