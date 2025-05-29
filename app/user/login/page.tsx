"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [paymentpop, setPaymentpop] = useState(false);
  const [showCreateBtn, setShowCreateBtn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setPaymentpop(false);
    setIsLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password, role: "user" }),
      });

      const data = await res.json();

      if (!res.ok) {
        setShowCreateBtn(true);
        throw new Error(data.message || "Login failed");
      }

      localStorage.setItem("token", data.token);

      const checkRes = await fetch(`/api/user/dashboard/payment-status?username=${data.username}`);
      const checkData = await checkRes.json();

      if (checkData.hasPaid) {
        router.push(`/user/dashboard/${data.username}`);
      } else {
        setPaymentpop(true);
        setTimeout(() => {
          router.push(`/packageTest/${data.username}`);
        }, 2000);
      }
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#f4f7f0] font-[Poppins]">
      <div className="w-full h-full p-8 flex flex-col justify-center items-center">
        <h1 className="text-[#94c159] text-center font-bold max-sm:text-3xl text-5xl capitalize">
          Welcome to <br />
          <span className="text-[#a9aba6]">Illaram Healthcare</span>
        </h1>
        <p className="text-[#a9aba6] text-[14px] capitalize">
          The place where transformation happens
        </p>
      </div>

      <div>
        <form onSubmit={handleLogin} className="bg-white p-6 rounded-lg shadow w-80">
          <h2 className="text-xl font-bold mb-4 text-center text-[#94c159]">User Login</h2>

          {error && <p className="text-red-500 mb-3 text-center">{error}</p>}
          {paymentpop && (
            <p className="text-yellow-600 mb-3 text-sm text-center">
              🛑 Please complete your payment to access the dashboard.
            </p>
          )}

          <label className="block font-medium text-[#a9aba6]">Username</label>
          <input
            type="text"
            placeholder="Enter your username"
            className="w-full mb-3 p-2 border border-gray-300 rounded text-[#333]"
            value={username}
            onChange={(e) => setUsername(e.target.value.trim())}
            required
            disabled={isLoading}
          />

          <label className="block font-medium text-[#a9aba6]">Password</label>
          <div className="relative mb-4">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value.trim())}
              className="w-full p-2 border border-gray-300 rounded pr-10 text-[#333]"
              placeholder="********"
              required
              disabled={isLoading}
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-2 top-2 text-gray-500"
              disabled={isLoading}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full font-semibold py-2 rounded transition ${
              isLoading
                ? "bg-[#b9d69e] cursor-not-allowed text-white"
                : "bg-[#94c159] hover:bg-[#7ca84c] text-white"
            }`}
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>

          {showCreateBtn ? (
            <button
              type="button"
              onClick={() => router.push("/user/create-account")}
              className="text-sm cursor-pointer w-full text-[#94c159] hover:underline mt-2"
              disabled={isLoading}
            >
              Create account
            </button>
          ) : (
            <button
              type="button"
              onClick={() => router.push("/forgot-password")}
              className="text-sm w-full text-blue-600 hover:underline mt-2"
              disabled={isLoading}
            >
              Forgot password?
            </button>
          )}
        </form>
      </div>
    </div>
  );
}
