"use client";
import Navbar from "@/components/Navbar";
import Sidebar from "../components/Sidebar";
import "./globals.css";
import { usePathname } from "next/navigation";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  const noLayoutRoutes = ["/login"];
  const shouldDisplayLayout = !noLayoutRoutes.includes(pathname);
  return (
    <html>
      <body>
        {shouldDisplayLayout && <Navbar />}
        <div className="flex">
          {shouldDisplayLayout && <Sidebar />}
          <main className="flex">{children}</main>
          {shouldDisplayLayout && (
            <div className="w-64 bg-orange-200">empty space</div>
          )}
        </div>
      </body>
    </html>
  );
};

export default Layout;
