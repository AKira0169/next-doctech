'use client';
import { getPatients } from '@/api/patient.api';
import Loading from '@/app/loading';
import PatientCard from '@/components/PatientCard';
import Pagination from '@/components/Pagination';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

const PatientsComponent = () => {
  const [page, setPage] = useState(1);
  const pageSize = 8;

  // Fetch data using Tanstack Query
  const { data, isLoading, isError } = useQuery({
    queryKey: ['patients', page],
    queryFn: () => getPatients(page, pageSize),
  });

  if (isLoading) return <Loading />;
  if (isError) return <p className='text-center text-red-500'>Error fetching patients</p>;

  const patients = data?.patients ?? [];
  const currentPage = data?.currentPage ?? 1;
  const totalPages = data?.totalPages ?? 1;

  return (
    <div className='flex h-full w-full flex-col items-center justify-between'>
      {/* Static Title - Won't Re-render */}
      <div className='z-10 bg-white p-4'>
        <h1 className='text-center text-2xl font-bold text-gray-800'>Patients</h1>
      </div>

      {/* Patient List */}
      <div className='container grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {patients.length > 0 ? patients.map((patient) => <PatientCard patient={patient} key={patient._id} />) : <p className='col-span-full text-center'>No patients found.</p>}
      </div>

      {/* Pagination Component */}
      <div className='bg-white p-4'>
        <Pagination currentPage={currentPage} totalPages={totalPages} setPage={setPage} />
      </div>
    </div>
  );
};

export default PatientsComponent;
