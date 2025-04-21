"use client";

import React from "react";
import AdminPhysicalAssessmentForm from "../../component/PhysicalAssessmentForm";
import { useParams } from "next/navigation";

const EditPhysicalAssesment = () => {
  const params = useParams(); // Grabs route param
  const id = params?.id;

  return (
    <div>
      <h1>Edit user {id}</h1>
      <AdminPhysicalAssessmentForm userName={id} />;
    </div>
  );
};

export default EditPhysicalAssesment;
