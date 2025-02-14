"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      const response = await fetch("http://localhost:3000/auth/login", {
        // Adjust API URL
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.accessToken);
        router.push("/");
      } else {
        const data = await response.json();
        setError(data.message);
      }
    } catch (error) {
      console.log("error", error);
      setError("An error occurred during login.");
    }
  };

  return (
    <html>
      <body>
        <div className="flex flex-col sm:flex-row text-white min-h-screen min-w-screen bg-Green-500">
          <div className="min-h-screen flex flex-1 justify-center min-w-screen items-center">
            <div>
              <h2 className="text-xl font-bold mb-4">Sign in</h2>
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
                <button
                  type="submit"
                  className="w-full bg-Green-Success text-white p-2 rounded"
                >
                  Sign in
                </button>
              </form>
            </div>
          </div>
          <div className="bg-Green-300 min-h-screen rounded-l-3xl flex justify-center items-center sm:ml-auto">
            <div className="flex flex-col items-center">
              <div
                className="relative"
                style={{ width: "299.61px", height: "230px" }}
              >
                <Image
                  src="/images/white-board.png"
                  alt="Description of image"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="font-castoro">
                <p className="italic text-[28px]">a Board</p>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
