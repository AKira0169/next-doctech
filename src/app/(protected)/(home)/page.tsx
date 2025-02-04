'use client';
import { getPatients } from '@/api/patient.api';
import Loading from '@/app/loading';
import PatientCard from '@/components/PatientCard';
import { Patient } from '@/types/patient';
import { useEffect, useState } from 'react';

const PatientsComponent = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [isLoading, setIsLoading] = useState(true); // Track loading state

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const patients = await getPatients();
        setPatients(patients);
      } catch (error) {
        console.error('Error fetching patients:', error);
      } finally {
        setIsLoading(false); // Update loading state regardless of success/error
      }
    };

    fetchPatients();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (patients.length === 0) {
    return <p className='text-center'>No patients found.</p>; // Show no data message
  }

  return (
    <>
      <h1 className='text-center text-2xl'>Patients</h1>
      <div className='grid grid-cols-4 gap-4'>
        {patients.map((patient) => (
          <PatientCard key={patient._id} patient={patient} /> // Pass single patient here
        ))}
      </div>
    </>
  );
};

export default PatientsComponent;
