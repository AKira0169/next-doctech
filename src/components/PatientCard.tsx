import { Patient } from '@/types/patient';
import Link from 'next/link';

export default function PatientCard({ patient }: { patient: Patient }) {
  return (
    <div className='flex h-full flex-col justify-between rounded-lg border border-pink-500 bg-white p-4 shadow-sm'>
      <h5 className='text-break mb-2 text-center text-2xl font-bold text-gray-900'>{patient.name}</h5>

      <div className='flex flex-col items-start justify-center gap-2'>
        <p className='truncate font-normal text-gray-900'>Age: {patient.age}</p>
        <p className='truncate font-normal text-gray-900'>Phone: {patient.phoneNumber}</p>
        <p className='truncate font-normal text-gray-900'>Serial: {patient.serial}</p>
      </div>

      {/* Button placed at the bottom */}
      <Link
        href={`/Patient/${patient._id}`}
        className='mt-4 inline-flex w-1/2 items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
        Read more ➡️
      </Link>
    </div>
  );
}
