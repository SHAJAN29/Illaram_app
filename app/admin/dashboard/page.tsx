'use client';

import React, { useEffect, useState } from 'react';
import { Users, Settings, ClipboardList, BarChart2 } from 'lucide-react';
import { Card, CardBody, Button } from '@material-tailwind/react';
import Link from 'next/link';
import PhysicalAssessmentForm from './component/PhysicalAssessmentForm';
import Loader from '@/components/loader';
import BlueSpinLoder from '@/components/Loder/blueSpinLoder';

// Fake API simulation (replace with actual data fetching logic)
const fetchAdminInfo = () =>
  new Promise<{ name: string }>((resolve) =>
    setTimeout(() => resolve({ name: 'Admin John' }), 1500)
  );



const AdminDashboard = () => {
  const [physicalState, setPhysicalState] = useState(false);
  const [loading, setLoading] = useState(true);
  const [admin, setAdmin] = useState<{ name: string } | null>(null);

  useEffect(() => {
    fetchAdminInfo().then((data) => {
      setAdmin(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
    <BlueSpinLoder/>
    );
  }

  return (
    <section className="min-h-screen bg-gray-50 p-6 font-[Poppins]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-gray-800">
            Welcome, <span className="text-blue-600">{admin?.name}</span>
          </h1>
          <p className="text-gray-500 mt-2 text-lg">Here’s an overview of your business</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* Cards */}
          <DashboardCard
            icon={<Users className="w-10 h-10 text-blue-600" />}
            title="Manage Users"
            link="/admin/dashboard/manageUsers"
            buttonColor="blue"
          />
          <DashboardCard
            icon={<ClipboardList className="w-10 h-10 text-green-600" />}
            title="Appointments"
            link="/admin/appointments"
            buttonColor="green"
          />
          <DashboardCard
            icon={<BarChart2 className="w-10 h-10 text-yellow-500" />}
            title="Analytics"
            link="/admin/analytics"
            buttonColor="yellow"
          />
          <DashboardCard
            icon={<BarChart2 className="w-10 h-10 text-purple-500" />}
            title="Job Applications"
            link="/admin/dashboard/JobApplications"
            buttonColor="purple"
            onClick={() => setPhysicalState(!physicalState)}
          />
          <DashboardCard
            icon={<Settings className="w-10 h-10 text-red-600" />}
            title="Settings"
            link="/admin/settings"
            buttonColor="red"
          />
        </div>

        {physicalState && (
          <div className="mt-10">
            <PhysicalAssessmentForm userName={admin?.name || 'guest'} />
          </div>
        )}
      </div>
    </section>
  );
};

export default AdminDashboard;

// Reusable card component
function DashboardCard({
  icon,
  title,
  link,
  buttonColor,
  onClick,
}: {
  icon: React.ReactNode;
  title: string;
  link: string;
  buttonColor: 'blue' | 'green' | 'yellow' | 'purple' | 'red';
  onClick?: () => void;
}) {
  const colorClasses = {
    blue: 'bg-blue-600 hover:bg-blue-700',
    green: 'bg-green-600 hover:bg-green-700',
    yellow: 'bg-yellow-500 hover:bg-yellow-600',
    purple: 'bg-purple-500 hover:bg-purple-600',
    red: 'bg-red-600 hover:bg-red-700',
  };

  return (
    <Card className="rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
      <CardBody className="p-6 flex flex-col items-center text-center space-y-4"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        {icon}
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <Link href={link}>
          <Button
            onClick={onClick}
            className={`${colorClasses[buttonColor]} text-white px-4 py-2 rounded-md`} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}          >
            View
          </Button>
        </Link>
      </CardBody>
    </Card>
  );
}
