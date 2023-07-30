import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession;
  return (
    <header className="p-4 bg-gray-800 text-gray-100">
      <div className="container flex justify-between h-16 mx-auto">
        <Link
          href="/"
          className="flex items-center p-2 text-2xl font-bold tracking-widest text-white uppercase rounded-lg lg:p-0 hover:text-violet-400 focus:text-violet-400 focus:outline-none"
        >
          Pack PC
        </Link>
        <button
          id="dropdownInformationButton"
          data-dropdown-toggle="dropdownInformation"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
        >
          Dropdown header{" "}
          <svg
            id="dropdownInformationButtonIcon"
            class="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>
        <div
          id="dropdownInformation"
          class="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
        >
          <div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
            <div>Bonnie Green</div>
            <div class="font-medium truncate">name@flowbite.com</div>
          </div>
          <ul
            class="py-1 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownInformationButton"
          >
            <li>
              <a
                href="#"
                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Settings
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Earnings
              </a>
            </li>
          </ul>
          <div class="py-1">
            <a
              href="#"
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Sign out
            </a>
          </div>
        </div>
        {/* <ul className="items-stretch hidden space-x-3 lg:flex">
          <li className="flex">
            <Link
              href="/"
              className="flex items-center px-4 -mb-1 border-b-2 border-transparent active:text-violet-400 border-violet-400"
            >
              Home
            </Link>
          </li>
          <li className="flex">
            <Link
              href="/products"
              className="flex items-center px-4 -mb-1 border-b-2 border-transparent active:text-violet-400 border-violet-400"
            >
              Products
            </Link>
          </li>
          <li className="flex">
            <Link
              href="/about"
              className="flex items-center px-4 -mb-1 border-b-2 border-transparent active:text-violet-400 border-violet-400"
            >
              About
            </Link>
          </li>
          <li className="flex">
            <Link
              href="/contact"
              className="flex items-center px-4 -mb-1 border-b-2 border-transparent active:text-violet-400 border-violet-400"
            >
              Contact
            </Link>
          </li>
        </ul> */}
        <div className="items-center flex-shrink-0 lg:flex">
          {!session?.user ? (
            <>
              <Link
                onClick={() =>
                  signOut({ callbackUrl: "http://localhost:3000/login" })
                }
                href="/logout"
                className="self-center px-8 py-3 rounded"
              >
                Logout
              </Link>

              <button className="flex items-center self-center lg:flex ml-3">
                <Link
                  href="/pc-builder"
                  className="self-center px-8 py-3 font-semibold rounded bg-violet-400 text-gray-900"
                >
                  PC Builder
                </Link>
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="self-center px-8 py-3 rounded">
                Login
              </Link>

              <Link
                href="/register"
                className="self-center px-8 py-3 font-semibold rounded bg-violet-400 text-gray-900"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
