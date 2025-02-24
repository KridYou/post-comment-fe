"use client";
import Navbar from "@/components/Navbar";
import "./globals.css";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Leftsidebar from "@/components/Leftsidebar";
import Rightsidebar from "@/components/Rightsidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [selectedPost, setSelectedPost] = useState<string | null>(null);
  const pathname = usePathname();

  const noLayoutRoutes = ["/login"];
  const shouldDisplayLayout = !noLayoutRoutes.includes(pathname);
  return (
    <html lang="en">
      <body className="h-screen flex flex-col w-screen">
        {shouldDisplayLayout && (
          <div className="fixed w-screen bg-Green-500 800 text-white p-4 h-[72px] sm:h-[60px] ">
            <Navbar />
          </div>
        )}
        <div className="fixed pt-[72px] sm:pt-[60px] w-screen flex-1 flex grid grid-cols-1 sm:grid-cols-5 h-screen transition-all duration-300">
          {shouldDisplayLayout && (
            <div className="w-64 bg-gray-800 text-white h-full sm:col-span-1 bg-gray-200 p-4 hidden sm:block w-full">
              <Leftsidebar />
            </div>
          )}
          <main className="overflow-y-auto flex flex-col w-full sm:col-span-3 h-screen ">
            {children}
          </main>
          {shouldDisplayLayout && !selectedPost && (
            <div className="sm:col-span-1 bg-gray-200 p-4 w-full transition-all duration-300 hidden sm:block">
              <Rightsidebar />
            </div>
          )}
        </div>
      </body>
    </html>
  );
};

export default Layout;
