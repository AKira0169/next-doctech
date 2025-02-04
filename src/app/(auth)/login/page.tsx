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
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type='email' placeholder='Email' {...register('email', { required: 'Email is required' })} />
      {errors.email && <span>{errors.email.message}</span>}
      <input type='password' placeholder='Password' {...register('password', { required: 'Password is required' })} />
      {errors.password && <span>{errors.password.message}</span>}
      <button type='submit'>Login</button>
    </form>
  );
}
