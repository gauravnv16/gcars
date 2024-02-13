import { Header } from "@/Components/Header";
import { NavBar } from "@/Components/NavBar";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <NavBar />
      <Header />
      <aside
        className="fixed right-1 bottom-5"
        style={{
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        }}
      >
        <section className="flex justify-center items-center bg-blue-500 w-fit p-4 rounded-full my-2 ">
          <i className="fa-solid fa-envelope text-white text-2xl" />
        </section>
        <section className="flex justify-center items-center bg-green-500 w-fit p-4 rounded-full ">
          <i className="fa-solid fa-phone-alt text-white text-2xl" />
        </section>
      </aside>
    </>
  );
}
