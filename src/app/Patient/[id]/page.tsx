export default async function PatientPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <div>
      <h1 className='text-center text-2xl'>Patient {id}</h1>
    </div>
  );
}
