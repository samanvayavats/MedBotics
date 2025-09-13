'use client'
import React, { useState } from "react";
import Link from "next/link";
import axiosInstance from "@/utlis/axiosInstance";

const Page = () => {
  const [form, setForm] = useState({
    email: "",
    username: "",
    clinicName: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    console.log(form)
    setLoading(true);
    setMessage("");

    try {
      const res = await axiosInstance.post("http://localhost:8000/api/v1/doctor/doctor-register", {
        name: form.username,
        email: form.email,
        clinicName: form.clinicName,
        password: form.password,
      });

      setMessage("✅ Registered successfully!");
      console.log("Doctor Registered:", res.data);
    } catch (error: any) {
      setMessage(error.response?.data?.message || "❌ Registration failed");
    } finally {
      setLoading(false);
      setForm({
        email: "",
        username: "",
        clinicName: "",
        password: "",
      })
    }
  };

  return (
    <div className="md:mt-10 flex items-center justify-center ">
      <div className="flex flex-col justify-center items-center bg-transparent ">
        <div className="flex items-center justify-around md:w-72 w-60">
          <img src="robot.png" className="h-20" alt="error" />
          <h1 className="text-white font-medium">SIGN-UP</h1>
        </div>

        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="md:w-72 w-60 text-orange-300 placeholder:text-white text-center border-white border p-1.5 rounded-xl hover:border-primary-500 hover:border-2 m-4"
          placeholder="Email"
        />
        <input
          type="text"
          name="username"
          value={form.username}
          onChange={handleChange}
          className="md:w-72 w-60 text-orange-300 placeholder:text-white text-center border-white border p-1.5 rounded-xl hover:border-primary-500 hover:border-2 m-4"
          placeholder="Username"
        />
        <input
          type="text"
          name="clinicName"
          value={form.clinicName}
          onChange={handleChange}
          className="md:w-72 w-60 text-orange-300 placeholder:text-white text-center border-white border p-1.5 rounded-xl hover:border-primary-500 hover:border-2 m-4"
          placeholder="Clinic Name"
        />
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          className="md:w-72 w-60 text-orange-300 placeholder:text-white text-center border-white border p-1.5 rounded-xl hover:border-primary-500 hover:border-2 m-4"
          placeholder="Password"
        />

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="border-2 border-primary-500 py-1 m-4 px-3 rounded-2xl bg-primary-500 hover:bg-primary-600 transition disabled:opacity-50"
        >
          {loading ? "Signing Up..." : "SIGN-UP"}
        </button>

        {message && <p className="text-white">{message}</p>}

        <p className="text-amber-50">
          Already <span className="text-primary-500">Sign-up ?</span>
          <Link href="/signin">
            <span className="hover:underline hover:text-primary-500">
              {" "}
              SIGN-IN
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Page;
