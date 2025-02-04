'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Dashboard', path: '/Dashboard' },
  { label: 'Booking', path: '/Booking' },
  { label: 'AddPatient', path: '/AddPatient' },
  { label: 'Usage', path: '/Usage' },
  { label: 'Invoices', path: '/Invoices' },
  { label: 'Contacts', path: '/Contacts' },
  { label: 'Presets', path: '/Presets' },
];

const linkStyle = 'cursor-pointer text-gray-700 hover:text-blue-600 transition-all';
const activeStyle = 'font-bold text-blue-600 underline underline-offset-4';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); // Get the current route

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='h-[60px]'>
      <nav className='fixed left-0 top-0 z-50 h-[60px] w-full bg-gray-50 shadow-md'>
        <div className='mx-auto flex h-full max-w-screen-xl items-center justify-between px-4'>
          {/* Logo */}
          <motion.img initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }} className='h-14 w-auto' src='./doctech.png' alt='Logo' />
          {/* Desktop Menu */}
          <ul className='hidden space-x-8 md:flex'>
            {navLinks.map(({ label, path }, index) => (
              <motion.li
                key={label}
                initial={{ opacity: 0, y: -10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: index * 0.1, duration: 0.4 },
                }}
                whileHover={{ scale: 1.1 }}>
                <Link href={path} className={`${linkStyle} ${pathname === path ? activeStyle : ''}`} prefetch={false}>
                  {label}
                </Link>
              </motion.li>
            ))}
          </ul>

          {/* Mobile Hamburger Menu */}
          <button onClick={toggleMenu} className='block rounded p-2 focus:outline-none md:hidden'>
            <span className='sr-only'>Toggle Menu</span>
            <svg className='h-6 w-6 text-gray-700' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
              <motion.path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                initial={false}
                animate={{
                  d: isMenuOpen
                    ? 'M6 6L18 18M6 18L18 6' // "X" shape
                    : 'M4 6h16M4 12h16M4 18h16', // Hamburger shape
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: 1,
              height: 'auto',
              transition: { duration: 0.5 },
            }}
            exit={{ opacity: 0, height: 0 }}
            className='bg-gray-50 shadow-lg md:hidden'>
            <ul className='flex h-[100vh] flex-col items-center space-y-4 py-4'>
              {navLinks.map(({ label, path }, index) => (
                <motion.li
                  key={label}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: index * 0.1, duration: 0.4 },
                  }}
                  whileHover={{ scale: 1.1 }}>
                  <Link
                    href={path}
                    className={`${linkStyle} ${pathname === path ? activeStyle : ''}`}
                    onClick={() => setIsMenuOpen(false)} // Close menu when a link is clicked
                    prefetch={false}>
                    {label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </nav>
    </div>
  );
}
