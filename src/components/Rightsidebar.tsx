import Link from "next/link";

const Rightsidebar = () => {
  const menuItems = [
    { href: "/", title: "Home" },
    { href: "/about", title: "About" },
    { href: "/contact", title: "Contact" },
  ];

  return (
    <aside className="">
      Right Sidebar
    </aside>
  );
};

export default Rightsidebar;
