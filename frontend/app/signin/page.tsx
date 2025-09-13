"use client";

import React, { useState } from "react";
import Link from "next/link";
import axiosInstance from "@/utlis/axiosInstance";
import axios from "axios";
import { useRouter } from "next/navigation"

const Signup = () => {
  const router = useRouter()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSignup = async () => {
    
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const res = await axios.post(
        "http://localhost:8000/api/v1/doctor/doctor-login",
        { email, password },
        { withCredentials: true }
      );
      console.log(res)
      setSuccess("Signup successful.");
      router.push(`/dashboard/${res.data.userWithTokens._id}`)

    } catch (err: any) {
      setError(err.response?.data?.message || "Signup failed ❌");
    } finally {
      setLoading(false);
      setEmail('')
      setPassword('')
    }
  };

  return (
    <div className="h-full mt-24 w-full flex items-center justify-center">
      <div className="flex flex-col justify-center items-center bg-transparent">
        <div className="flex flex-row-reverse items-center justify-around md:w-72 w-60">
          <img src="robot.png" className="h-20" alt="error" />
          <h1 className="text-white font-medium">SIGN-IN</h1>
        </div>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="md:w-72 w-60 text-orange-300 placeholder:text-white text-center border-white border p-1.5 rounded-xl hover:border-primary-500 hover:border-2 m-4"
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="md:w-72 w-60 text-orange-300 placeholder:text-white text-center border-white border p-1.5 rounded-xl hover:border-primary-500 hover:border-2 m-4"
          placeholder="Password"
        />

        <button
          onClick={handleSignup}
          disabled={loading}
          className="border-2 border-primary-500 py-1 m-4 px-3 rounded-2xl bg-primary-500 hover:bg-primary-600 transition disabled:opacity-50"
        >
          {loading ? "Signing IN..." : "SIGN-IN"}
        </button>

        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-400">{success}</p>}

        <p className="text-amber-50 mt-2">
          Not Have Account Yet?{" "}
          <Link href="/signup">
            <span className="hover:underline hover:text-primary-500">
              SIGN-UP
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
