"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";

// export default function ResetPasswordPage() {
//   const [password, setPassword] = useState("");
//   const [confirm, setConfirm] = useState("");
//   const [status, setStatus] = useState("");
//   const searchParams = useSearchParams();
//   const router = useRouter();
//   const token = searchParams.get("token");

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (password !== confirm) {
//       setStatus("Passwords do not match");
//       return;
//     }

//     const res = await fetch("/api/auth/reset-password", {
//       method: "POST",
//       body: JSON.stringify({ password, token }),
//       headers: { "Content-Type": "application/json" },
//     });

//     const data = await res.json();
//     if (res.ok) {
//       setStatus("✅ Password reset successfully. Redirecting to login...");
//       setTimeout(() => router.push("/login"), 2000);
//     } else {
//       setStatus(data.message || "Something went wrong");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 mt-10">
//       <h2 className="text-xl font-semibold mb-4">Reset Your Password</h2>
//       <input
//         type="password"
//         placeholder="New password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         required
//         className="w-full border rounded p-2 mb-2"
//       />
//       <input
//         type="password"
//         placeholder="Confirm password"
//         value={confirm}
//         onChange={(e) => setConfirm(e.target.value)}
//         required
//         className="w-full border rounded p-2 mb-4"
//       />
//       <button className="w-full bg-green-600 text-white rounded p-2">
//         Reset Password
//       </button>
//       <p className="mt-3 text-sm text-blue-600">{status}</p>
//     </form>
//   );
// }
