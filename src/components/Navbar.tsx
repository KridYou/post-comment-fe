import Link from "next/link";

const Navbar = () => (
  <header className="bg-green-500 800 text-white p-4">
    <nav className="flex justify-between">
      <div className="text-lg font-semibold">a board</div>
      <div className="space-x-4">
        <Link href="/login">Sign in</Link>
      </div>
    </nav>
  </header>
);

export default Navbar;
