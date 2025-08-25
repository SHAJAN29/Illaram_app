"use client";
import React, { useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Montserrat } from "next/font/google";



const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-montserrat",
});
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
   <div className={`max-w-3xl mx-auto font-[poppins] px-6 mt-24 ${montserrat.variable} font-[family-name:var(--font-montserrat)]`}>
  <ToastContainer />

  {/* Page Heading */}
  <h1 className="text-4xl font-semibold mb-4 text-center text-black">
    Join Our Team
  </h1>
  <p className="text-lg text-gray-600 text-center mb-12 max-w-xl mx-auto">
    We’re building systems for the future of wellness. If you’re ambitious,
    committed, and want to shape health at scale—apply below.
  </p>

  <Formik
    initialValues={{
      name: "",
      email: "",
      phone: "",
      message: "",
      resume: null,
      jobRole: "",
    }}
    validationSchema={validationSchema}
    onSubmit={handleSubmit}
  >
    {({ setFieldValue, isSubmitting }) => (
      <Form className="space-y-6 bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
        {/* Full Name */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Full Name
          </label>
          <Field
            type="text"
            name="name"
            placeholder="John Doe"
            className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
          />
          <ErrorMessage
            name="name"
            component="div"
            className="text-red-500 text-xs mt-1"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Email
          </label>
          <Field
            type="email"
            name="email"
            placeholder="john@company.com"
            className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
          />
          <ErrorMessage
            name="email"
            component="div"
            className="text-red-500 text-xs mt-1"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Phone
          </label>
          <Field
            type="tel"
            name="phone"
            placeholder="+91 98765 43210"
            className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
          />
          <ErrorMessage
            name="phone"
            component="div"
            className="text-red-500 text-xs mt-1"
          />
        </div>

        {/* Job Role */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Job Role
          </label>
          <Field
            as="select"
            name="jobRole"
            className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
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

        {/* Message / Cover Letter */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Message / Cover Letter
          </label>
          <Field
            as="textarea"
            name="message"
            rows={4}
            placeholder="Tell us why you’d be a great fit..."
            className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
          />
          <ErrorMessage
            name="message"
            component="div"
            className="text-red-500 text-xs mt-1"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 rounded-xl font-semibold text-white 
                     bg-black cursor-pointer
                     shadow-md hover:bg-gray-900 transition"
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


