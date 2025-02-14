import Link from "next/link";

const Sidebar = () => {
  const menuItems = [
    { href: "/", title: "Home" },
    { href: "/about", title: "About" },
    { href: "/contact", title: "Contact" },
  ];

  return (
    <div className="w-64 bg-gray-800 text-white h-full">
      <div className="p-4 text-xl font-semibold">My Sidebar</div>
      <nav className="min-h-screen">
        <ul>
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className={`block p-4`}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
