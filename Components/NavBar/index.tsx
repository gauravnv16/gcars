"use client";
import Link from "next/link";
import "./css/styles.css";

function HandleSearch(e: any) {
  const search = document.getElementById("search-cars") as HTMLInputElement;
  const searchIcon = document.getElementById("search-icon") as HTMLInputElement;
  const menu = document.getElementById("menu") as HTMLInputElement;
  if (searchIcon.style.display === "none") {
    searchIcon.style.display = "block";
    search.style.display = "none";
    menu.style.display = "block";
  } else {
    searchIcon.style.display = "none";
    search.style.display = "block";
    menu.style.display = "none";
  }
}

function showMenu() {
  const navLinks2 = document.getElementById("nav-links2") as HTMLInputElement;
  navLinks2.classList.toggle("hidden");
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
    <nav className="nav py-3 px-20 flex justify-between items-center bg-white relative">
      <button className="menu" id="menu" onClick={showMenu}>
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
          className="search focus:outline-none text-sm w-40"
        />
        <i className="fas fa-xmark text-xl" onClick={HandleSearch}></i>
      </section>
      <button className="menu" id="search-icon" onClick={HandleSearch}>
        <i className="fas fa-search text-xl"></i>
      </button>
      <ul className="text-sm hidden" id="nav-links2">
        {Pages.map((page, index) => (
          <li className="m-4 p-2" key={index}>
            <Link href={page.link}>{page.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
