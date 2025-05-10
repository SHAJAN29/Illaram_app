"use client";
import React, { useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const JobsPage = () => {
  const router = useRouter();
  const jobRoles = [
  "Full Stack Developer",
  "Junior Full Stack Developer",
  "UI/UX Designer",
  "Marketing Executive",
  "Data Analyst",
  "Content Writer",
  "HR Manager",
  "Customer Relationship Manager"
];
  const [selectedJobRole, setSelectedJobRole] = useState("");
  // Yup Validation Schema
  const validationSchema = Yup.object({
    name: Yup.string().required("Full name is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    phone: Yup.string()
      .matches(
        /^[0-9]{10}$/,
        "Phone number must be 10 digits (e.g. 8778919303)"
      )
      .required("Phone number is required"),
    message: Yup.string().required("Please provide a message or cover letter"),
    jobRole: Yup.string().required("Please select a job role"),
   
  });

  const handleSubmit = async (values: any, { setSubmitting, resetForm }: { setSubmitting: (isSubmitting: boolean) => void; resetForm: () => void }) => {
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("email", values.email);
    formData.append("phone", values.phone);
    formData.append("message", values.message);
formData.append("jobRole", values.jobRole);
  try {
    const res = await fetch("/api/employers/jobs", {
      method: "POST",
      body: formData, // 👈 use FormData, no JSON.stringify or headers
    });

    const data = await res.json();
    console.log("Response data:", data); // Log the response data

    if (res.ok) {
      toast.success(data.message || "Application submitted successfully!");
      resetForm();
      setSubmitting(false);
      setTimeout(() => router.push("/home"), 3000);
    } else {
      toast.error(data.error || "Submission failed.");
      setSubmitting(false);
    }
  } catch (error) {
    toast.error("Error submitting form.");
    setSubmitting(false);
  }
};

  return (
    <div className="max-w-3xl mx-auto font-[poppins] p-6 mt-20">
      <ToastContainer />
      <h1 className="text-2xl font-semibold mb-6 text-center">Join Our Team</h1>

      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
          message: "",
          resume: null,
          jobRole: "", // new field
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, isSubmitting }) => (
          <Form className="space-y-6 bg-white p-6 rounded shadow">
            <div>
              <label className="block mb-2 text-sm font-medium">Full Name</label>
              <Field
                type="text"
                name="name"
                className="w-full border border-gray-300 px-4 py-2 rounded"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 text-xs mt-1"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">Email</label>
              <Field
                type="email"
                name="email"
                className="w-full border border-gray-300 px-4 py-2 rounded"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-xs mt-1"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">Phone</label>
              <Field
                type="tel"
                name="phone"
                className="w-full border border-gray-300 px-4 py-2 rounded"
              />
              <ErrorMessage
                name="phone"
                component="div"
                className="text-red-500 text-xs mt-1"
              />
            </div>


<div>
  <label className="block mb-2 text-sm font-medium">Job Role</label>
  <Field
    as="select"
    name="jobRole"
    className="w-full border border-gray-300 px-4 py-2 rounded"
  >
    <option value="">Select a job role</option>
    {jobRoles.map((role) => (
      <option key={role} value={role}>
        {role}
      </option>
    ))}
  </Field>
  <ErrorMessage
    name="jobRole"
    component="div"
    className="text-red-500 text-xs mt-1"
  />
</div>



                   <div>
              <label className="block mb-2 text-sm font-medium">Message / Cover Letter</label>
              <Field
                as="textarea"
                name="message"
                rows={4}
                className="w-full border border-gray-300 px-4 py-2 rounded"
              />
              <ErrorMessage
                name="message"
                component="div"
                className="text-red-500 text-xs mt-1"
              />
            </div>


        
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn btn-blue px-6 py-2 rounded hover:bg-opacity-90 transition"
            >
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default JobsPage;


