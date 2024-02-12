"use client";
import Link from "next/link";
import "./css/styles.css";

function HandleSearch(e: any) {
  const search = document.getElementById("search-cars") as HTMLInputElement;
  const searchIcon = document.getElementById("search-icon") as HTMLInputElement;
  const menu = document.getElementById("menu") as HTMLInputElement;
  if (search.style.display === "none") {
    search.style.display = "flex";
    searchIcon.style.display = "none";
    menu.style.display = "none";
  } else {
    search.style.display = "none";
    searchIcon.style.display = "flex";
    menu.style.display = "flex";
  }
}
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
    <nav className="nav py-3 px-20 flex justify-between items-center bg-white">
      <button className="menu" id="menu">
        <i className="fas fa-bars text-xl"></i>
      </button>
      <h2 className="text-xl">Cars</h2>
      <ul className="flex items-center text-sm nav-links">
        {Pages.map((page, index) => (
          <li className="mx-4" key={index}>
            <Link href={page.link}>{page.name}</Link>
          </li>
        ))}
        <li>
          <section className="flex items-center border border-gray-300 p-2 rounded-2xl">
            <input
              type="text"
              placeholder="Search"
              className="search focus:outline-none"
            />
            <i className="fas fa-search text-sm"></i>
          </section>
        </li>
      </ul>
      <section
        className="hidden items-center border border-gray-300 p-2 rounded-2xl"
        id="search-cars"
      >
        <input
          type="text"
          placeholder="Innova Crysta.."
          className="search focus:outline-none text-xl"
        />
        <i className="fas fa-xmark text-xl" onClick={HandleSearch}></i>
      </section>
      <button className="menu" id="search-icon" onClick={HandleSearch}>
        <i className="fas fa-search text-xl"></i>
      </button>
    </nav>
  );
};
