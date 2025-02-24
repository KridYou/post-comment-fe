import Link from "next/link";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";

const Navbar = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
      <nav className="flex justify-between item-center">
        <div className="text-lg font-semibold">a board</div>
        <div className="space-x-4 flex items-center justify-center">
          {isLogin ? (
            <div className="flex justify-center items-center">
              <p>Krid Suwannawat</p>
              <RxAvatar className="text-3xl" />
            </div>
          ) : (
            <Link href="/login">Sign in</Link>
          )}
        </div>
      </nav>
  );
};

export default Navbar;
