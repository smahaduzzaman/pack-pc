import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

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
        <div className="flex items-center justify-end mx-52 lg:flex-1">
          <label
            className="block text-sm font-medium text-gray-400"
            for="categories"
          ></label>
          <select
            className="block w-full px-3 py-2 mt-1 text-gray-700 bg-gray-400 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-violet-400 focus:border-violet-400 sm:text-sm"
            name="categories"
            id="categories"
          >
            <option
              selected
              value="cpu"
              className="block px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-violet-400 focus:border-violet-400 sm:text-sm"
            >
              CPU / Processor
            </option>
            <option
              className="block px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-violet-400 focus:border-violet-400 sm:text-sm"
              value="monitor"
            >
              Monitor
            </option>
            <option
              className="block px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-violet-400 focus:border-violet-400 sm:text-sm"
              value="motherboard"
            >
              Motherboard
            </option>
            <option
              className="block px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-violet-400 focus:border-violet-400 sm:text-sm"
              value="powerSupply"
            >
              Power Supply Unit
            </option>
          </select>
        </div>

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
