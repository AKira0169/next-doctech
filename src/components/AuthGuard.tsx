// src/components/AuthGuard.tsx
'use client'; // Mark as a Client Component
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface AuthGuardProps {
  token?: string;
  children: React.ReactNode;
}

const AuthGuard = ({ token, children }: AuthGuardProps) => {
  const router = useRouter();

  useEffect(() => {
    if (!token) {
      router.push('/login'); // Redirect to login if no token
    }
  }, [token, router]);

  return <>{children}</>;
};

export default AuthGuard;
