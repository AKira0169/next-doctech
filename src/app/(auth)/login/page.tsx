'use client';
import { login } from '@/api/login.api';
import { Credentials } from '@/types/credentials';
import { useRouter } from 'next/navigation'; // Updated import
import { useForm } from 'react-hook-form';

export default function Login() {
  const router = useRouter(); // Now using correct router from App Router
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Credentials>();

  const onSubmit = async (data: Credentials) => {
    console.log('Form data:', data);
    try {
      await login(data);
      router.push('/'); // This should now work correctly
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className='container flex h-screen flex-col items-center justify-center'>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center justify-center gap-5'>
        <input className='border' type='email' placeholder='Email' {...register('email', { required: 'Email is required' })} />
        {errors.email && <span>{errors.email.message}</span>}
        <input className='border' type='password' placeholder='Password' {...register('password', { required: 'Password is required' })} />
        {errors.password && <span>{errors.password.message}</span>}
        <button className='w-[100px] border bg-slate-200 hover:bg-gray-700' type='submit'>
          Login
        </button>
      </form>
    </div>
  );
}
