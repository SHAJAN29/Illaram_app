"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [adminName, setAdminName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ adminName, password, role: "admin" }),
    });

    const data = await res.json();

    if (!res.ok) return setError(data.message);
    localStorage.setItem("token", data.token);
    router.push("/admin/dashboard");
  };

  return (
    <div className="min-h-screen font-[poppins] flex justify-center items-center bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow w-80">
        <h2 className="text-xl font-bold mb-4 text-center">Admin Login</h2>
        {error && <p className="text-red-500 mb-2">{error}</p>}
        <input
          type="text"
          placeholder="User Name"
          className="w-full  mb-3 p-2 border"
          value={adminName}
          onChange={(e) => setAdminName(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-3 p-2 border"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full btn btn-blue p-2 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
}
