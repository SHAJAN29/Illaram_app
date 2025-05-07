"use client";

import React from "react";
import { useState } from "react";

import { Users, Settings, ClipboardList, BarChart2 } from "lucide-react";
import { Card, CardBody } from "@material-tailwind/react"; // Adjusted the path to use absolute imports
import Link from "next/link";
import PhysicalAssessmentForm from "./component/PhysicalAssessmentForm";
import { Button } from "@material-tailwind/react";

const AdminDashboard = () => {
  const [physicalState, setPhysicalState] = useState(false);

  return (
    <section className=" mt-15 ">
      <div className="font-[poppins] lg:h-screen min-sm:h-screen flex flex-col justify-center items-center p-6 ">
        {" "}
        <div className="min-h-screen bg-white p-8">
          <h1 className="text-4xl font-bold mb-10 text-center text-gray-800">
            Admin Dashboard
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card
              className="hover:shadow-xl transition-shadow duration-300 rounded-2xl border border-gray-200"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              <CardBody
                className="p-6 flex flex-col items-center text-center"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                <Users className="w-12 h-12 text-blue-600 mb-4" />
                <h2 className="text-lg font-semibold mb-2 text-gray-700">
                  Manage Users
                </h2>
                <Link href="/admin/dashboard/manageUsers">
                  <Button
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    View
                  </Button>
                </Link>
              </CardBody>
            </Card>

            <Card
              className="hover:shadow-xl transition-shadow duration-300 rounded-2xl border border-gray-200"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              <CardBody
                className="p-6 flex flex-col items-center text-center"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                <ClipboardList className="w-12 h-12 text-green-600 mb-4" />
                <h2 className="text-lg font-semibold mb-2 text-gray-700">
                  Appointments
                </h2>
                <Link href="/admin/appointments">
                  <Button
                    className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    Manage
                  </Button>
                </Link>
              </CardBody>
            </Card>

            <Card
              className="hover:shadow-xl transition-shadow duration-300 rounded-2xl border border-gray-200"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              <CardBody
                className="p-6 flex flex-col items-center text-center"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                <BarChart2 className="w-12 h-12 text-yellow-600 mb-4" />
                <h2 className="text-lg font-semibold mb-2 text-gray-700">
                  Analytics
                </h2>
                <Link href="/admin/analytics">
                  <Button
                    className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600"
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    View
                  </Button>
                </Link>
              </CardBody>
            </Card>
            <Card
              className="hover:shadow-xl transition-shadow duration-300 rounded-2xl border border-gray-200"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              <CardBody
                className="p-6 flex flex-col items-center text-center"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                <BarChart2 className="w-12 h-12 text-yellow-600 mb-4" />
                <h2 className="text-lg font-semibold mb-2 text-gray-700">
                JobApplications
                </h2>
                <Link href={'/admin/dashboard/JobApplications'}>
                  <Button
                    className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600"
                    placeholder={undefined}
                    onClick={() => setPhysicalState(!physicalState)}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    View
                  </Button>
                  </Link>
              </CardBody>
            </Card>

            <Card
              className="hover:shadow-xl transition-shadow duration-300 rounded-2xl border border-gray-200"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              <CardBody
                className="p-6 flex flex-col items-center text-center"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                <Settings className="w-12 h-12 text-red-600 mb-4" />
                <h2 className="text-lg font-semibold mb-2 text-gray-700">
                  Settings
                </h2>
                <Link href="/admin/settings">
                  <Button
                    className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    Configure
                  </Button>
                </Link>
              </CardBody>
            </Card>
          </div>
        </div>
        {/* <div>
          <h1 className="text-5xl illaramAccent">Welcome to Admin Dashboard</h1>{" "}
          <button
            className="btn btn-blue"
            onClick={() => setPhysicalState(!physicalState)}
          >
            update physicalAssasment
          </button>
          <div className="">
            {physicalState ? <PhysicalAssessmentForm /> : ""}
          </div>
        </div> */}
      </div>
    </section>
  );
};
export default AdminDashboard;
