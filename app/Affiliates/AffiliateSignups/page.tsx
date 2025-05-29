"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

const validationSchema = Yup.object({
  name: Yup.string().min(2, "Too short").required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  website: Yup.string().url("Invalid URL"),
  audience: Yup.string().required("Tell us about your audience"),
  category: Yup.string().required("Please select a category"),
  mobile: Yup.string()
    .matches(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile number")
    .required("Mobile number is required"),
});

const categories = [
  "Influencer",
  "Photographer",
  "Wedding Event Organizer",
  "Fitness Trainer",
  "Nutritionist",
  "Makeup Artist",
  "Content Creator",
  "Other",
];

export default function AffiliateSignup() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState("");

  const formik = useFormik({
    initialValues: {
      name: "",
      mobile: "",
      email: "",
      website: "",
      audience: "",
      category: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      try {
        const response = await axios.post("/api/Affiliates/affiliates-register", values);
        toast.success(response.data.message);
        resetForm();
        setLoading(false);
        setTimeout(() => {
          router.push("/");
        }, 2000);
      } catch (error) {
        toast.error("Something went wrong. Please try again.");
        console.error(error);
        setErrors(error instanceof Error ? error.message : "An unknown error occurred");
        setLoading(false);
      }
    },
  });

  return (
    <main className="min-h-screen font-[poppins] bg-[#f4f7f0] flex items-center justify-center px-6 py-20">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-xl">
        <h1 className="text-3xl font-bold text-center text-[#94c159] mb-6">
          Affiliate Signup
        </h1>

        <form onSubmit={formik.handleSubmit} className="space-y-6">
          {(["name", "mobile", "email", "website", "audience"] as const).map((field) => (
            <div key={field}>
              <label
                htmlFor={field}
                className="block text-sm font-medium text-[#a9aba6] capitalize"
              >
                {field === "audience"
                  ? "Your Audience"
                  : field === "website"
                  ? "Website (optional)"
                  : field}
              </label>
              {field !== "audience" ? (
                <input
                  type="text"
                  id={field}
                  name={field}
                  className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-[#94c159] focus:border-[#94c159]"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values[field]}
                />
              ) : (
                <textarea
                  id="audience"
                  name="audience"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-[#94c159] focus:border-[#94c159] text-sm text-gray-700"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.audience}
                  placeholder="e.g., I run a bridal YouTube channel with 20k subscribers interested in wedding preparation."
                  style={{ fontSize: "13px", color: "GrayText" }}
                />
              )}
              {formik.touched[field] && formik.errors[field] && (
                <p className="text-red-600 text-sm mt-1">{formik.errors[field]}</p>
              )}
            </div>
          ))}

          {/* Category Select */}
          <div className="mb-8">
            <label htmlFor="category" className="block text-sm font-medium text-[#a9aba6]">
              Affiliate Category
            </label>
            <select
              id="category"
              name="category"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-[#94c159] focus:border-[#94c159]"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.category}
            >
              <option value="">Select a category</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            {formik.touched.category && formik.errors.category && (
              <p className="text-red-600 text-sm mt-1">{formik.errors.category}</p>
            )}
          </div>

          {/* Error Message */}
          {errors && <p className="text-red-600 text-sm mt-1">{errors}</p>}

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full bg-[#94c159] text-white py-3 px-4 rounded-md hover:bg-[#7d9e51] transition font-semibold ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit Application"}
          </button>
        </form>
      </div>

      <ToastContainer position="top-right" autoClose={5000} />
    </main>
  );
}
