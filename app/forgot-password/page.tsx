"use client";

import { useState } from "react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/auth/forgot-password", {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();
    setStatus(data.message);
  };

  return (
    <div className="h-screen flex justify-center items-center p-5 bg-teal-50 font-[Poppins]">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4">
        <h2 className="text-xl font-semibold mb-4">
          Forgot <span className="illaramPrimary">Password</span>{" "}
        </h2>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full border rounded p-2 mb-4"
        />
        <button className="w-full btn btn-blue rounded p-2">
          Send Reset Link
        </button>
        <p className="mt-2 text-center text-sm text-green-600">{status}</p>
      </form>
    </div>
  );
}
