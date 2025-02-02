import { Patient } from '@/types';
import Link from 'next/link';

export default function PatientCard({ patients }: { patients: Patient[] }) {
  return (
    <div className='max-w-sm bg-white border border-pink-500 rounded-lg shadow-sm'>
      <div className='p-7'>
        <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900'>{patients[0].name}</h5>
        <div className='flex flex-col gap-2'>
          <p className='font-normal text-gray-900'>Age: {patients[0].age}</p>
          <p className='font-normal text-gray-900'>Phone: {patients[0].phoneNumber}</p>
          <p className='font-normal text-gray-900'>Serial: {patients[0].serial}</p>
        </div>
        <Link
          href={`/Patient/${patients[0].id}`} // Fixed extra space issue
          className='mt-5 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
          Read more ➡️
        </Link>
      </div>
    </div>
  );
}
