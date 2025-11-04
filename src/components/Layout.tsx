import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Spinner from './Spinner';

const Layout = () => {
  useEffect(() => {
    // Initialize WOW.js for animations
    if (typeof window !== 'undefined' && (window as any).WOW) {
      new (window as any).WOW().init();
    }
  }, []);

  return (
    <>
      <Spinner />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
