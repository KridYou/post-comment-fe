import SessionProviderWrapper from "@/components/SessionProviderWrapper";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import Link from "next/link";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <SessionProviderWrapper>
      <html lang="en">
        <body className="min-h-screen flex flex-col">
          {/* Navbar */}
          <AppBar position="static">
            <Toolbar className="flex justify-between">
              <Typography variant="h6">
                <Link href="/">My App</Link>
              </Typography>
              <Button color="inherit">
                <Link href="/login">Login</Link>
              </Button>
            </Toolbar>
          </AppBar>

          {/* Page Content */}
          <main className="flex-1 p-4">{children}</main>

          {/* Footer */}
          <footer className="text-center p-4 bg-gray-100">
            <Typography variant="body2">© 2025 My App. All rights reserved.</Typography>
          </footer>
        </body>
      </html>
    </SessionProviderWrapper>
  );
}
