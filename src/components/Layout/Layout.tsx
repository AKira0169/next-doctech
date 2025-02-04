import Footer from './Footer';
import Header from './Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='grid min-h-screen grid-rows-[auto,1fr,auto] gap-4'>
      <Header />
      <main className='flex flex-col items-center gap-56'>{children}</main>
      <Footer />
    </div>
  );
}
