"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const RegisterForm: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  useEffect(() => {
    console.log("email", email, "password", password);
  }, [email, password]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("http://localhost:3000/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    console.log("response", response);

    if (response.ok) {
      console.log("it ok");
      router.push("/login");
    } else {
      console.error("Registration failed");
    }
  };

  return <div>register form</div>;
};

export default RegisterForm;
