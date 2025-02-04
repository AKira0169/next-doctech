// src/components/ProtectedLayout.tsx

'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getCookie } from 'cookies-next/client';
import Layout from '@/components/Layout/Layout';

export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    function checkAuthentication() {
      const token = getCookie('jwt');
      if (!token) {
        router.replace('/login'); // Redirect immediately if no token
      } else {
        setIsAuthenticated(true); // Allow rendering if authenticated
      }
    }

    checkAuthentication();
  }, [router]);

  if (isAuthenticated === null) {
    return null; // You can return a loading spinner or nothing until check completes
  }

  return (
    <>
      {' '}
      <Layout> {children}</Layout>
    </>
  );
}
