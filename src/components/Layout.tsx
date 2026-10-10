import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingWhatsApp from './FloatingWhatsApp';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);
  return null;
}

export default function Layout() {
  const { pathname } = useLocation();
  const page = pathname.split('/')[1] || 'home';
  return (
    <div className="flex min-h-screen flex-col bg-ink-950 text-silver">
      <ScrollToTop />
      <Navbar />
      <main key={pathname} data-page={page} className="page-enter flex-1">
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
