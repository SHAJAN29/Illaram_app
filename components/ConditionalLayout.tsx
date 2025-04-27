'use client';

import { usePathname } from 'next/navigation';
import {Navbar} from '../components/nav';

export default function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() || '';
  const hideNavbar = pathname.startsWith('/dashboard');

  return (
    <>
      {!hideNavbar && <Navbar />}
      {children}
    </>
  );
}
