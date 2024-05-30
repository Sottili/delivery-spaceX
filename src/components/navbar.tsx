"use client";

// Next & React
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  // State to save if open or close navbar
  const [open, setOpen] = useState(false);

  // Function to open or close navbar
  const handleOpen = () => {
    const navbar = document.getElementById("navbar-default");
    if (open == true) {
      navbar?.classList.remove("hidden");
      setOpen(false);
    } else {
      setOpen(true);
      navbar?.classList.add("hidden");
    }
  };

  return (
    <nav className="bg-transparent">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between md:justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-white text-3xl font-semibold whitespace-nowrap">
            SpaceX
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden bg-white"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={handleOpen}
        >
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className="hidden w-full md:w-auto md:flex md:justify-between"
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            <li>
              <Link
                href="/"
                className="block text-white font-medium py-2 px-3 md:p-0"
                aria-current="page"
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                href="/address-register"
                className="block text-white font-medium py-2 px-3 md:p-0"
                aria-current="page"
              >
                Cadastrar Endereço
              </Link>
            </li>
            <li>
              <Link
                href="/my-address"
                className="block text-white py-2 px-3 md:p-0"
              >
                Meu Endereço
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
