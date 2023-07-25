import logo01 from "../assets/logo01.jpg";
import { Link } from "react-router-dom";
import { BsFillCartPlusFill } from "react-icons/bs";
import { useState } from "react";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="h-max w-full   fixed z-50">
      <nav class="bg-white border-gray-200  py-2  dark:bg-gray-900">
        <div class="container flex flex-wrap items-center justify-between mx-auto">
          <a href="https://flowbite.com/" class="flex items-center">
            <span class="h-max ml-4 w-max bg-white self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Lotus Fashion
            </span>
          </a>
          <button
            onClick={() => setToggle((prevCheck) => !prevCheck)}
            data-collapse-toggle="navbar-default"
            type="button"
            class="inline-flex  items-center p-2  text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          {toggle ? (
            <div class="   w-full md:block md:w-auto" id="navbar-default">
              <ul class="flex flex-col p-4 mt-4 border border-gray-100  rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <a
                    href="#"
                    class="block py-2 pl-3 pr-4 text-white  rounded  dark:text-white"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          ) : (
            <div className="flex hidden lg:inline-flex md:inline-flex w-max ">
              <a
                href="#"
                class="block mx-2 py-2 pl-3 pr-4 text-black hover:bg-black hover:text-white  rounded dark:text-white"
                aria-current="page"
              >
                Home
              </a>
              <a
                href="#"
                class="block mx-2 py-2 pl-3 pr-4 text-black hover:bg-black hover:text-white  rounded dark:text-white"
                aria-current="page"
              >
                Contato
              </a>
              <a
                href="#"
                class="block mx-2 py-2 pl-3 pr-4 text-black hover:bg-black hover:text-white  rounded dark:text-white"
                aria-current="page"
              >
                Home
              </a>
              <a
                href="#"
                class="block mx-2 py-2 pl-3 pr-4 text-black hover:bg-black hover:text-white  rounded dark:text-white"
                aria-current="page"
              >
                Home
              </a>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
