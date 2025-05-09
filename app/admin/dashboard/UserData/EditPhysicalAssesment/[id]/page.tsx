"use client";

import React from "react";
import AdminPhysicalAssessmentForm from "../../../component/PhysicalAssessmentForm";
import { useParams } from "next/navigation";

const EditPhysicalAssesment = () => {
  const params = useParams(); // Grabs route param
  const id = params?.id;

  // Check if id is undefined or null
  return (
    <div className="mt-10 font-[Poppins]">
      <h1 className="text-4xl text-center">Edit User <span className="illaramAccent">{id}</span> </h1>
      <AdminPhysicalAssessmentForm userName={typeof id === "string" ? id : ""} />;
    </div>
  );
};

export default EditPhysicalAssesment;
