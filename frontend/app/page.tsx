"use client"

import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter();
  return (
     <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-6 text-black">Welcome to Task Manager</h1>
      <p className="mb-6 text-lg text-black">Manage your tasks efficiently with AI-powered categorization.</p>
      <button
        className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600"
        onClick={() => router.push("/login")}
      >
        Login
      </button>
    </div>
  );
}
