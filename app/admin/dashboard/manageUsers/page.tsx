'use client';

import { useEffect, useState } from 'react';
import {
  Card,
  CardBody,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from '@material-tailwind/react';
import { Pencil, Trash2 } from 'lucide-react';
import Link from 'next/link';

interface User {
  _id?: string;
  username: string;
  email: string;
  role?: string;
  subscriptionInfo?: {
    amount?: number;
    status?: string;
    createdAt?: string;
    orderId?: string;
    paymentId?: string;
    programName?: string;
    duration?: string;
    startDate?: string;
    endDate?: string;
  };
  PhysicalAssessment?: {
    height: string;
    weight: string;
    bmi: string;
    notes: string;
  };
  mentalAssesment?: {
    state?: string;
    psychological?: string;
  };
}

export default function ManageUsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch('/api/admin/users');
        const data = await res.json();
        const mergedData = data.map((user: any) => ({
          ...user,
          subscriptionInfo: {
            ...user.payment,
            ...user.subscription,
          },
        }));
        setUsers(mergedData);
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleCheckStatus = (user: User) => {
    setSelectedUser(null); // force reset
  setTimeout(() => {
    setSelectedUser(user);
    setIsDialogOpen(true);
  }, 0); // delay to ensure re-render
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };



  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4 sm:p-8 font-[Poppins] bg-gray-50">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800 text-center sm:text-left">
        Manage Users
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <Card key={user._id} className="rounded-xl border border-gray-200 bg-white shadow-sm" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <CardBody className="p-4 space-y-2" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              <h2 className="text-lg font-semibold text-gray-800">{user.username}</h2>
              <p className="text-sm text-gray-600">{user.email}</p>
              <p className="text-sm text-gray-600">Role: {user.role ?? 'N/A'}</p>
              <p
                className={`px-2 py-1 rounded-full text-xs font-semibold ${
                  user.subscriptionInfo?.status === 'success'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                }`}
              >
                Payment: ₹{user.subscriptionInfo?.amount ?? '0'} - {user.subscriptionInfo?.status ?? 'N/A'}
              </p>
              <p className="text-sm text-gray-500">
                Date:{' '}
                {user.subscriptionInfo?.createdAt
                  ? new Date(user.subscriptionInfo.createdAt).toLocaleDateString('en-IN', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })
                  : 'N/A'}
              </p>
              <p className="text-sm text-gray-500">Program: {user.subscriptionInfo?.programName ?? 'N/A'}</p>
              <p className="text-sm text-gray-500">Duration: {user.subscriptionInfo?.duration ?? 'N/A'}</p>

              <div className="flex flex-wrap justify-end mt-4 gap-2">
                <Button variant="outlined" size="sm"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                  <Pencil className="w-4 h-4 mr-1" /> Edit
                </Button>
                <Button variant="outlined" size="sm"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                  <Trash2 className="w-4 h-4 mr-1" /> Delete
                </Button>
                <Button size="sm" className="btn btn-blue" onClick={() => handleCheckStatus(user)} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                  Check Status
                </Button>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>

      {/* Dialog */}
      {/* Popup Dialog */}
      {isDialogOpen && (
        <div className="fixed inset-0 flex items-center justify-center  bg-white/30 backdrop-blur-sm z-50">
          <div
            className={`bg-white p-6 rounded-lg w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 max-h-[90vh] overflow-y-auto font-[Poppins]`}
          >
            <DialogHeader  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              {`Assessment - ${selectedUser?.username ?? 'N/A'}`}
            </DialogHeader>
            <DialogBody className="text-sm space-y-4" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              <h3 className="font-semibold text-gray-800">Physical Assessment</h3>
              <p>
                <strong>Height:</strong> {selectedUser?.PhysicalAssessment?.height ?? 'N/A'}
              </p>
              <p>
                <strong>Weight:</strong> {selectedUser?.PhysicalAssessment?.weight ?? 'N/A'}
              </p>
              <p>
                <strong>BMI:</strong> {selectedUser?.PhysicalAssessment?.bmi ?? 'N/A'}
              </p>
              <p>
                <strong>Notes:</strong> {selectedUser?.PhysicalAssessment?.notes ?? 'N/A'}
              </p>
              <Link
                href={`/admin/dashboard/UserData/EditPhysicalAssesment/${selectedUser?.username}`}
                className="block text-blue-600 font-semibold"
              >
                Edit Physical Assessment
              </Link>

              <hr className="my-3" />

              <h3 className="font-semibold text-gray-800">Mental Assessment</h3>
              <p>
                <strong>State:</strong> {selectedUser?.mentalAssesment?.state ?? 'N/A'}
              </p>
              <p>
                <strong>Psychological:</strong> {selectedUser?.mentalAssesment?.psychological ?? 'N/A'}
              </p>
              <Link
                href="/admin/dashboard/UserData/EditMentalAssesment"
                className="block text-blue-600 font-semibold"
              >
                Edit Mental Assessment
              </Link>
            </DialogBody>
            <DialogFooter  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              <Button className="btn btn-blue" onClick={handleCloseDialog} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                Close
              </Button>
            </DialogFooter>
            </div>
        </div>
      )}
    </div>
  );
}

 
 {/* {user.plan && (
  <>
    <p className="text-sm text-gray-700 font-medium">
      Program: {user.plan.programName}
    </p>
    <p className="text-sm text-gray-600">
      Duration: {user.plan.duration}
    </p>
    <p className="text-sm text-gray-600">
      Payment: ₹{user.plan.amount ?? '0'} - {user.plan.status ?? 'N/A'}
    </p>
    <p className="text-sm text-gray-500">
      Date: {user.plan.createdAt ? new Date(user.plan.createdAt).toLocaleDateString() : 'N/A'}
    </p>
    {user.plan.startDate && (
      <p className="text-sm text-gray-500">
        Start: {new Date(user.plan.startDate).toLocaleDateString()}
      </p>
    )}
    {user.plan.endDate && (
      <p className="text-sm text-gray-500">
        End: {new Date(user.plan.endDate).toLocaleDateString()}
      </p>
    )}
)}
)} */}