import Link from "next/link";
import FeaturedCategory from "./FeaturedCategory";

const Navbar = () => {
  return (
    <div>
      <h1>Navbar</h1>
      <Link href="/featuredProduct">Featured Product</Link>
      <Link href="/featuredCategory">Featured Category</Link>
    </div>
    // <nav className="flex items-center justify-between bg-gray-800 p-4">
    //   {/* Logo or Brand */}
    //   <div className="text-white text-xl font-semibold">My PC Store</div>
    //   {/* Categories Dropdown */}
    //   <div className="relative">
    //     <button className="text-white font-semibold hover:text-gray-300 focus:outline-none">
    //       Categories
    //     </button>
    //     <ul className="absolute top-10 right-0 bg-gray-800 p-2 rounded shadow-lg hidden">
    //       <li>
    //         <Link href="/cpu">
    //           <a className="block px-4 py-2 text-white hover:bg-gray-700">
    //             CPU / Processor
    //           </a>
    //         </Link>
    //       </li>
    //       <li>
    //         <Link href="/motherboard">
    //           <a className="block px-4 py-2 text-white hover:bg-gray-700">
    //             Motherboard
    //           </a>
    //         </Link>
    //       </li>
    //       <li>
    //         <Link href="/ram">
    //           <a className="block px-4 py-2 text-white hover:bg-gray-700">
    //             RAM
    //           </a>
    //         </Link>
    //       </li>
    //       <li>
    //         <Link href="/psu">
    //           <a className="block px-4 py-2 text-white hover:bg-gray-700">
    //             Power Supply Unit
    //           </a>
    //         </Link>
    //       </li>
    //       <li>
    //         <Link href="/storage">
    //           <a className="block px-4 py-2 text-white hover:bg-gray-700">
    //             Storage Device
    //           </a>
    //         </Link>
    //       </li>
    //       <li>
    //         <Link href="/monitor">
    //           <a className="block px-4 py-2 text-white hover:bg-gray-700">
    //             Monitor
    //           </a>
    //         </Link>
    //       </li>
    //     </ul>
    //   </div>
    //   {/* login, logout and register pc builder button with conditional rendering */}
    //   <div className="relative">
    //     <button className="text-white font-semibold hover:text-gray-300 focus:outline-none">
    //       PC Builder
    //     </button>
    //     <ul className="absolute top-10 right-0 bg-gray-800 p-2 rounded shadow-lg hidden">
    //       <li>
    //         <Link href="/login">
    //           <a className="block px-4 py-2 text-white hover:bg-gray-700">
    //             Login
    //           </a>
    //         </Link>
    //       </li>
    //       <li>
    //         <Link href="/register">
    //           <a className="block px-4 py-2 text-white hover:bg-gray-700">
    //             Register
    //           </a>
    //         </Link>
    //       </li>
    //       <li>
    //         <Link href="/logout">
    //           <a className="block px-4 py-2 text-white hover:bg-gray-700">
    //             Logout
    //           </a>
    //         </Link>
    //       </li>
    //     </ul>
    //   </div>
    //   {/* Cart */}
    //   <div className="relative">
    //     <button className="text-white font-semibold hover:text-gray-300 focus:outline-none">
    //       Cart
    //     </button>
    //     <ul className="absolute top-10 right-0 bg-gray-800 p-2 rounded shadow-lg hidden">
    //       <li>
    //         <Link href="/cart">
    //           <a className="block px-4 py-2 text-white hover:bg-gray-700">
    //             View Cart
    //           </a>
    //         </Link>
    //       </li>
    //       <li>
    //         <Link href="/checkout">
    //           <a className="block px-4 py-2 text-white hover:bg-gray-700">
    //             Checkout
    //           </a>
    //         </Link>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>
  );
};

export default Navbar;
