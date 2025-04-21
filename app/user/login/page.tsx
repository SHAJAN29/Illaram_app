"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [showCreateBtn, setShowCreateBtn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password); // Should not be empty
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password, role: "user" }),
    });

    const data = await res.json();
    console.log(data);

    if (!res.ok) {
      console.log("❌ Login failed", data.message);
      setShowCreateBtn(true);
      return setError(data.message);
    } else {
      localStorage.setItem("token", data.token);
      router.push(`/user/dashboard/${username}`);
      console.log("✅ Login successful", data.token);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-teal-50 font-[Poppins]">
      <div className=" w-full h-full p-8 items-center flex flex-col justify-center ">
        <h1 className="illaramPrimary text-center font-bold max-sm:text-3xl text-5xl capitalize">
          {" "}
          welcome to <br />{" "}
          <span className="illaramAccent">illaram healthcare.</span>
        </h1>
        <p className="illaramText text-[14px] capitalize">
          The place where transformation happen
        </p>
      </div>

      <div>
        <form
          onSubmit={handleLogin}
          className="bg-teal-50 p-6 rounded shadow w-80"
        >
          <h2 className="text-xl font-bold mb-4 text-center">User Login</h2>
          {error && <p className="text-red-500 mb-2">{error}</p>}
          <label className="block font-medium">Username</label>
          <input
            type="name"
            placeholder="Enter your username"
            className="w-full mb-3 p-2 border"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <div>
            <label className="block font-medium">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border  border-gray-500 rounded pr-10"
                placeholder="********"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-2 top-2 text-gray-600"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full btn btn btn-blue mt-4 p-2 rounded"
          >
            Login
          </button>

          {showCreateBtn ? (
            <button
              onClick={() => router.push("/user/create-account")}
              className="text-sm w-full text-green-600 hover:underline cursor-pointer mt-2"
            >
              Create account
            </button>
          ) : (
            <button
              onClick={() => router.push("/forgot-password")}
              className="text-sm w-full text-blue-600 hover:underline cursor-pointer mt-2"
            >
              Forgot password?
            </button>
          )}
        </form>
      </div>
    </div>
  );
}
