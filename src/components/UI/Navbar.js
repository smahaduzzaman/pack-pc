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
        <ul className="items-stretch hidden space-x-3 lg:flex">
          <li className="flex">
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-violet-400 border-violet-400"
            >
              Link
            </a>
          </li>
          <li className="flex">
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
            >
              Link
            </a>
          </li>
          <li className="flex">
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
            >
              Link
            </a>
          </li>
          <li className="flex">
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
            >
              Link
            </a>
          </li>
        </ul>
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
