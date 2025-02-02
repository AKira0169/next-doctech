import { getPatients } from '@/api';
import { Patient } from '@/types';
import PatientCard from './components/PatientCard';

const PatientsComponent = async () => {
  const patients = (await getPatients()) as Patient[];
  return (
    <>
      <h1 className='text-center text-2xl'>Patients</h1>
      <PatientCard patients={patients} />
    </>
  );
};

export default PatientsComponent;
