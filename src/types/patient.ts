// types/patient.ts
export interface Patient {
  _id: string;
  name: string;
  age: number;
  phoneNumber: string;
  serial: string;
}

export interface ApiResponse<T> {
  data: T;
  message?: string;
  status?: number;
}
