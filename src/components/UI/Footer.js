import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div>
      <h1>Footer</h1>
    </div>
    // <footer>
    //   <div className="flex items-center justify-between bg-gray-800 p-4">
    //     {/* Logo or Brand */}
    //     <div className="text-white text-xl font-semibold">My PC Store</div>

    //     {/* Categories Dropdown */}
    //     <div className="relative">
    //       <button className="text-white font-semibold hover:text-gray-300 focus:outline-none">
    //         Categories
    //       </button>
    //       <ul className="absolute top-10 right-0 bg-gray-800 p-2 rounded shadow-lg hidden">
    //         <li>
    //           <Link href="/cpu">
    //             <a className="block px-4 py-2 text-white hover:bg-gray-700">
    //               CPU / Processor
    //             </a>
    //           </Link>
    //         </li>
    //         <li>
    //           <Link href="/motherboard">
    //             <a className="block px-4 py-2 text-white hover:bg-gray-700">
    //               Motherboard
    //             </a>
    //           </Link>
    //         </li>
    //         <li>
    //           <Link href="/ram">
    //             <a className="block px-4 py-2 text-white hover:bg-gray-700">
    //               RAM
    //             </a>
    //           </Link>
    //         </li>
    //         <li>
    //           <Link href="/psu">
    //             <a className="block px-4 py-2 text-white hover:bg-gray-700">
    //               Power Supply Unit
    //             </a>
    //           </Link>
    //         </li>
    //         <li>
    //           <Link href="/storage">
    //             <a className="block px-4 py-2 text-white hover:bg-gray-700">
    //               Storage Device
    //             </a>
    //           </Link>
    //         </li>
    //         <li>
    //           <Link href="/monitor">
    //             <a className="block px-4 py-2 text-white hover:bg-gray-700">
    //               Monitor
    //             </a>
    //           </Link>
    //         </li>
    //         <li>
    //           <Link href="/others">
    //             <a className="block px-4 py-2 text-white hover:bg-gray-700">
    //               Others
    //             </a>
    //           </Link>
    //         </li>
    //       </ul>
    //     </div>

    //     {/* PC Builder Button */}
    //     <Link href="/pc-builder">
    //       <a className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
    //         PC Builder
    //       </a>
    //     </Link>
    //   </div>
    // </footer>
  );
};

export default Footer;
