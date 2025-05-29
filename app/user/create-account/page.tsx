"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

// Validation Schema
const schema = yup.object().shape({
  username: yup.string().required("Full name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export default function UserRegisterPage() {
  const router = useRouter();
  const [serverError, setServerError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: any) => {
    setLoading(true);
    setServerError("");
    setSuccess("");

    try {
      const res = await fetch("/api/auth/create-account", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, role: "user" }),
      });

      const responseData = await res.json();

      if (!res.ok) {
        throw new Error(responseData.message || "Something went wrong");
      }

      setSuccess("✅ Registered successfully! Redirecting...");
      reset();
      setTimeout(() => router.push("/user/login"), 1500);
    } catch (err: any) {
      setServerError(err.message || "Registration failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f4f7f0] px-4 font-[Poppins]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white rounded-xl p-6 shadow-md w-full max-w-md space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-[#94c159]">
          Create Account
        </h2>

        {serverError && (
          <p className="text-red-500 text-center font-semibold">{serverError}</p>
        )}
        {success && (
          <p className="text-green-600 text-center font-semibold">{success}</p>
        )}

        {/* Full Name */}
        <div>
          <label className="block font-medium text-[#a9aba6]">Full Name</label>
          <input
            type="text"
            placeholder="Full Name"
            {...register("username")}
            className="w-full border border-gray-300 px-3 py-2 rounded text-gray-800"
            disabled={loading}
          />
          {errors.username && (
            <p className="text-sm text-red-500">{errors.username.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block font-medium text-[#a9aba6]">Email</label>
          <input
            type="email"
            placeholder="Email Address"
            {...register("email")}
            className="w-full border border-gray-300 px-3 py-2 rounded text-gray-800"
            disabled={loading}
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <label className="block font-medium text-[#a9aba6]">Password</label>
          <div className="relative">
            <input
              {...register("password")}
              type={showPassword ? "text" : "password"}
              className="w-full p-2 border border-gray-300 rounded pr-10 text-gray-800"
              placeholder="********"
              disabled={loading}
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-2 top-2 text-gray-600"
              disabled={loading}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          <p className="text-red-600 text-sm">{errors.password?.message}</p>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full font-semibold py-2 rounded transition ${
            loading
              ? "bg-[#cde4ab] text-white cursor-not-allowed"
              : "bg-[#94c159] hover:bg-[#7ca84c] text-white"
          }`}
        >
          {loading ? (
            <div className="flex justify-center items-center gap-2">
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8z"
                ></path>
              </svg>
              Registering...
            </div>
          ) : (
            "Register"
          )}
        </button>
      </form>
    </div>
  );
}
