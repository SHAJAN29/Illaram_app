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
    website: Yup.string()
        .url("Invalid URL"),
  audience: Yup.string().required("Tell us about your audience"),
  category: Yup.string().required("Please select a category"),
});

const categories = [
  "Influencer",
  "Photographer",
  "Wedding Event Organizer",
  "Fitness Trainer",
  "Nutritionist",
  "Content Creator",
  "Other",
];

export default function AffiliateSignup() {

    const router = useRouter(); // Initialize the router for navigation
    const [loading, setLoading] = useState(false); // Loading state
    const [errors, setErrors] = useState(''); // State to hold any error messages
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      website: "",
      audience: "",
      category: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
        setLoading(true); // Set loading to true when the form is being submitted
      try {
        const response =  await axios.post("/api/Affiliates/affiliates-register", values);
        toast.success(response.data.message); // Success toast
        resetForm(); // Reset form on successful submission
        setLoading(false);
        setTimeout(() => { router.push("/"); }, 2000); // Replace "/desired-path" with the actual path you want to navigate to
    } catch (error) {
        toast.error("Something went wrong. Please try again.");
        console.error(error);
        setErrors(error instanceof Error ? error.message : "An unknown error occurred"); // Safely set error message
        {errors && resetForm();}
        setLoading(false); // Reset loading state on error
      }
    },
  });

  return (
    <main className="min-h-screen font-[poppins] bg-gray-50 flex items-center justify-center px-6 py-20">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-xl">
        <h1 className="text-3xl font-bold text-center text-[#0F766E] mb-6">
          Affiliate Signup
        </h1>
        <form onSubmit={formik.handleSubmit} className="space-y-6">
  {(["name", "email", "website", "audience"] as const).map((field) => (
    <div key={field}>
      <label htmlFor={field} className="block text-sm font-medium text-gray-700 capitalize">
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
          className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-[#0F766E] focus:border-[#0F766E]"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values[field]}
        />
      ) : (
        <textarea
          id="audience"
          name="audience"
          rows={4}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-[#0F766E] focus:border-[#0F766E]"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.audience}
          placeholder="Describe your audience. For example, 'I run a bridal YouTube channel with 20k subscribers who are interested in wedding preparation."
          style={{ fontSize: '13px',color:"GrayText" }} // Setting the font size for the placeholder
        />
      )}
      {formik.touched[field] && formik.errors[field] && (
        <p className="text-red-600 text-sm mt-1">{formik.errors[field]}</p>
      )}
    </div>
  ))}

  {/* Category Select */}
  <div className="mb-8">
    <label htmlFor="category" className="block text-sm font-medium text-gray-700">
      Affiliate Category
    </label>
    <select
      id="category"
      name="category"
      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-[#0F766E] focus:border-[#0F766E]"
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
{errors && (
  <p className="text-red-600 text-sm mt-1">{errors}</p>)} 
    
    {/* Submit Button */}
  <button
            type="submit"
            className={`w-full bg-[#FF5F37] text-white py-3 px-4 rounded-md hover:bg-[#e94d28] transition font-semibold ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading} // Disable button while loading
          >
      {loading ? "Submitting..." : "Submit Application"} {/* Change text while loading */}
  </button>
</form>

      </div>
        {/* Toast Container for notifications */}
        <ToastContainer position="top-right" autoClose={5000}/>
    </main>
  );
}
