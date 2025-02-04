// api/patientApi.ts
import { ApiResponse, Patient } from '@/types/patient';
import apiClient from '@/utils/apiClient';
import { getCookie } from 'cookies-next';

export const getPatients = async (): Promise<Patient[]> => {
  try {
    const token = getCookie('jwt');
    console.log('Token:', token);
    const response = await apiClient.get<ApiResponse<Patient[]>>('/patient/patients', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const patients = response.data.data;
    return patients;
  } catch (error) {
    console.error('Error fetching patients:', error);
    throw error;
  }
};
