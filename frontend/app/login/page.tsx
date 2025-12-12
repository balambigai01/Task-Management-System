"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const API_URL = "https://taskmanagement-seven-alpha.vercel.app/tasks";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleLogin = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await axios.post(`${API_URL}/login`, { email });
    localStorage.setItem("email", email);
    router.push("/dashboard");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleLogin} className="border p-6 rounded shadow w-96 space-y-4">
        <h2 className="text-xl font-bold text-black">Login</h2>
        <input
          type="email"
          placeholder="Email"
          className="border p-2 w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button className="bg-blue-500 text-white px-3 py-2 rounded w-full">Login</button>
      </form>
    </div>
  );
}
