import Link from "next/link";
import "./css/styles.css";

export const NavBar = () => {
  const Pages: {
    link: string;
    name: string;
  }[] = [
    {
      link: "/",
      name: "Home",
    },
    {
      link: "/about",
      name: "About",
    },
    {
      link: "/services",
      name: "Services",
    },
    {
      link: "/pricing",
      name: "Pricing",
    },
    {
      link: "/cars",
      name: "Cars",
    },
    {
      link: "/contact",
      name: "Contact",
    },
  ];

  return (
    <nav className="nav py-5 px-20 flex justify-between items-center bg-white">
      <button className="menu">
        <i className="fas fa-bars text-xl"></i>
      </button>
      <h1 className="text-xl">Cars</h1>
      <ul className="flex items-center text-sm nav-links">
        {Pages.map((page, index) => (
          <li className="mx-4" key={index}>
            <Link href={page.link}>{page.name}</Link>
          </li>
        ))}
      </ul>
      <button className="menu">
        <i className="fas fa-search text-xl"></i>
      </button>
    </nav>
  );
};
