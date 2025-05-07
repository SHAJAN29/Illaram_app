"use client";
import React, { useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const JobsPage = () => {
  const router = useRouter();
  
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
    resume: Yup.mixed().required("Resume is required"),
  });

  const handleSubmit = async (values: any, { setSubmitting }: any) => {
    const formData = {
      name: values.name,
      email: values.email,
      phone: values.phone,
      message: values.message,
    };

    try {
      const res = await fetch("/api/employers/jobs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success("Application submitted successfully!");
        setSubmitting(false);
        setTimeout(() => {
          router.push("/home");
        }, 3000); // Delay for 3 seconds before redirecting
      } else {
        toast.error("Submission failed.");
      }
    } catch (error) {
      alert("Error submitting form.");
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 mt-20">
      <ToastContainer />
      <h1 className="text-2xl font-semibold mb-6 text-center">Join Our Team</h1>

      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
          message: "",
          resume: null,
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

            <div>
              <label className="block mb-2 text-sm font-medium">Upload Resume (PDF/DOC)</label>
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={(e) => setFieldValue("resume", e.currentTarget.files?.[0])}
                className="w-full text-green-600"
              />
              <ErrorMessage
                name="resume"
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
