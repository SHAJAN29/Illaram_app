"use client";

import { useEffect, useState } from "react";
import { Card, CardBody } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { Pencil, Trash2 } from "lucide-react";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { log } from "console";
import Link from "next/link";
interface User {
  _id?: string;
  username: string;
  email: string;
  role?: string;
  PhysicalAssessment?: {
    height: string;
    weight: string;
    bmi: string;
    notes: string;
  };
  mentalAssesment?: {
    height?: string;
    weight?: string;
    bmi?: string;
    notes?: string;
    state?: string;
    psychological?: string;
  };
}

// const illaramUserData: User[] = [
//   {
//     username: "moses_shajan",
//     email: "m.j.sandy2916@gmail.com",
//     PhysicalAssessment: {
//       height: "175cm",
//       weight: "70kg",
//       bmi: "22.9",
//       notes: "Healthy body metrics",
//     },
//     mentalAssesment: {
//       state: "a hypothetical or simulated assessment scenario",
//       psychological: "perfectly normal",
//     },
//   },
//   {
//     username: "moses_priya",
//     email: "mjpriya43@gmail.com",
//     PhysicalAssessment: {
//       height: "154cm",
//       weight: "55kg",
//       bmi: "22.9",
//       notes: "Healthy body metrics",
//     },
//     mentalAssesment: {
//       state: "a hypothetical or simulated assessment scenario",
//       psychological: "perfectly normal",
//     },
//   },
// ];

export default function ManageUsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [assessmentData, setAssessmentData] = useState<User | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("/api/admin/users");
        const data = await res.json();
        console.log(assessmentData);
        // const data = illaramUserData;
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleCheckStatus = async (user: User) => {
    try {
      const userData = users.find((u) => u.username === user.username);

      if (userData) {
        setAssessmentData(userData);
        setSelectedUser(user);
        setIsDialogOpen(true);
      } else {
        console.warn("No assessment data found for user:", user.username);
      }
    } catch (error) {
      console.error("Error fetching assessment:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Manage Users</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {users.map((user: User) => (
          <Card
            key={user._id}
            className="rounded-xl border border-gray-200 bg-white shadow-sm"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <CardBody
              className="p-5"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              <h2 className="text-xl font-semibold text-gray-800">
                {user.username}
              </h2>
              <p className="text-sm text-gray-600">{user.email}</p>
              <p className="text-sm text-gray-600 mt-1">Role: {user.role}</p>

              <div className="flex flex-wrap justify-end mt-4 gap-2">
                <Button
                  variant="outlined"
                  size="sm"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  <Pencil className="w-4 h-4 mr-1" /> Edit
                </Button>
                <Button
                  variant="outlined"
                  size="sm"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  <Trash2 className="w-4 h-4 mr-1" /> Delete
                </Button>
                <Button
                  size="sm"
                  className="btn btn-blue"
                  onClick={() => handleCheckStatus(user)}
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  Check Physical Status
                </Button>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>

      <Dialog
        open={isDialogOpen}
        handler={() => setIsDialogOpen(false)}
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <DialogHeader
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Physical Assessment - {selectedUser?.username}
        </DialogHeader>
        <DialogBody
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          {assessmentData ? (
            <div className="space-y-2 text-sm text-gray-700">
              <p>
                <strong>Height:</strong>{" "}
                {assessmentData?.PhysicalAssessment?.height}
              </p>
              <p>
                <strong>Weight:</strong>{" "}
                {assessmentData?.PhysicalAssessment?.weight}
              </p>
              <p>
                <strong>BMI:</strong> {assessmentData?.PhysicalAssessment?.bmi}
              </p>
              <p>
                <strong>Notes:</strong>{" "}
                {assessmentData?.PhysicalAssessment?.notes}
              </p>
              <Link
                className="font-extrabold illaramAccent"
                href={`/admin/dashboard/EditPhysicalAssesment/${selectedUser?.username}`}
              >
                EDIT
              </Link>

              <DialogHeader
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                Mental Assessment - {selectedUser?.username}
              </DialogHeader>

              <p>
                <strong>State:</strong> {assessmentData?.mentalAssesment?.state}
              </p>
              <p>
                <strong>Psychological:</strong>{" "}
                {assessmentData?.mentalAssesment?.psychological}
              </p>
              <Link
                className="font-extrabold illaramAccent"
                href={"/admin/dashboard/EditPhysicalAssesment"}
              >
                EDIT
              </Link>
            </div>
          ) : (
            <p className="text-sm text-gray-500">Loading data...</p>
          )}
        </DialogBody>
        <DialogFooter
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <Button
            color="red"
            className="btn btn-blue"
            onClick={() => setIsDialogOpen(false)}
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Close
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
}
