'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const navItems = [
  { name: 'Dashboard', href: '/admin/dashboard' },
  { name: 'Manage Users', href: '/admin/dashboard/manageUsers '},
  {name:"Job Applications", href:"/admin/dashboard/JobApplications"},
  { name: 'Settings', href: '/admin/settings' },
  { name: 'Logout', href: '/logout' },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 text-white bg-gray-800 rounded"
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-screen w-64 bg-gray-800 text-white shadow-lg z-40 transform transition-transform duration-300
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0 md:static md:block
        `}
      >
        <div className="p-6 text-2xl font-bold ml-9 border-b border-gray-700">
          Admin Panel
        </div>
        <nav className="flex-1 p-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`block px-4 py-2 rounded hover:bg-gray-700 ${
                pathname === item.href ? 'bg-gray-700' : ''
              }`}
              onClick={() => setIsOpen(false)} // Close on mobile nav click
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}
