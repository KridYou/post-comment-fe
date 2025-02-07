"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true)
  const router = useRouter();
  console.log('isAuthenticated', isAuthenticated)
  
  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log('token', token)
    
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }

    setLoading(false);
  }, []);

  useEffect(() => {
    if(!loading && !isAuthenticated){
    router.push("/login");
    } 
  },[isAuthenticated, loading, router])

  if (!isAuthenticated) {
    return <p>You are not authenticated. Redirecting...</p>;
  } 
  if (loading) {
    return <p>Loading...</p>;
  }

  return <h1 className="text-2xl font-bold">Welcome to the Post & Comment App</h1>;
}
