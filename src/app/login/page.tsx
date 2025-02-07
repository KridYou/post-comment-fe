"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try{
    const response = await fetch("http://localhost:3002/auth/login", { // Adjust API URL
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.accessToken);
        router.push('/');
      } else {
        const data = await response.json();
        setError(data.message);
      }
    } catch (error) {
        console.log('error', error)
      setError('An error occurred during login.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
}
