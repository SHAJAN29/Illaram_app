"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function DoctorLogin() {
  const [doctorName, setDoctorName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/Doctors/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId: doctorName, password }), // changed to userId
    });

    const data = await res.json();
console.log(data);
    if (!res.ok) return setError(data.message);
    localStorage.setItem("token", data.token);
    router.push(`/Doctor/Dashboard/${data.user._id}`);
  };

  return (
    <div className="min-h-screen font-[poppins] flex justify-center items-center bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow w-80">
        <h2 className="text-xl font-bold mb-4 text-center">Doctor Login</h2>
        {error && <p className="text-red-500 mb-2">{error}</p>}
        <input
          type="text"
          placeholder="Name"
          className="w-full mb-3 p-2 border"
          value={doctorName}
          onChange={(e) => setDoctorName(e.target.value)}
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


