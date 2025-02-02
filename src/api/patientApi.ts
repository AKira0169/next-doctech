// api/patientApi.ts
import apiClient from '@/utils/apiClient';
import { Patient, ApiResponse } from '@/types';

export const getPatients = async (): Promise<Patient[]> => {
  try {
    const response = await apiClient.get<ApiResponse<Patient[]>>('/patient');
    const patients = response.data.data;
    return patients;
  } catch (error) {
    console.error('Error fetching patients:', error);
    throw error;
  }
};

export const getPatientById = async (id: string): Promise<Patient> => {
  try {
    const response = await apiClient.get<ApiResponse<Patient>>(`/patient/${id}`);
    return response.data.data; // Extract the `data` property
  } catch (error) {
    console.error('Error fetching patient by ID:', error);
    throw error;
  }
};

export const createPatient = async (patient: Omit<Patient, 'id'>): Promise<Patient> => {
  try {
    const response = await apiClient.post<ApiResponse<Patient>>('/patient', patient);
    return response.data.data; // Extract the `data` property
  } catch (error) {
    console.error('Error creating patient:', error);
    throw error;
  }
};
