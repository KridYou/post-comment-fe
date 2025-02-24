import Link from "next/link";
import { RiHome6Fill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";

const Leftsidebar = () => {
  const menuItems = [
    { href: "/", title: "Home", icon: <RiHome6Fill /> },
    { href: "/about", title: "Our Blog", icon: <FaEdit /> },
  ];

  return (
    <nav className="min-h-screen">
      <ul>
        {menuItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`block p-4 flex items-center space-x-4`}
            >
              <div>{item.icon}</div>
              <div>{item.title}</div>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Leftsidebar;
