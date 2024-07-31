import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
// import { useState } from 'react';
const Navbar = () => {
  // const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className=" top-0 z-20 bg-[#122620] p-4 flex justify-between items-center shadow-shd">
      <a href="#" className="text-white font-bold text-6xl pl-3 font-Roca">Exhale.</a>

      <div className="flex items-center space-x-4">
        <a href="#" className="text-white text-2xl hover:underline p-4">About us</a>
        <a href="#" className="text-white text-2xl hover:underline p-4">Find support</a>
        <a href="#" className="text-white text-2xl hover:underline p-4">Blogs & Stories</a>

        <div className="dropdown dropdown-hover">
          <div tabIndex={0} role="button" className=" text-white  text-2xl hover:underline m-1">More</div>
          <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box w-44 shadow">
          <li className='-ml-3'><Link smooth to={"#Dream"}>Dream Analyzer</Link></li>
          <li className='-ml-3'><Link smooth to={"#Detox"}>Digital Detox</Link></li>
          <li className='-ml-3'><Link smooth to={"#Therapy"}>Audio/Video Therapy</Link></li>
          <li className='-ml-3'><Link smooth to={"#Dost"}>Heal with a Dost</Link></li>
          <li className='-ml-3'><Link smooth to={"#mental-health"}>About Mental Health</Link></li>
         
          </ul>
        </div>

        <a href="#" className="text-white text-2xl hover:underline p-4">Login</a>
      </div>
    </nav>
  );
};

export default Navbar;


  {/* <div 
      className="relative group"
      onMouseEnter={() => setDropdownOpen(true)}
      onMouseLeave={() => setDropdownOpen(false)}
    >
      <button
        className="flex items-center text-white hover:underline p-4 text-2xl"
      >
        More
        <svg
          className="ml-1 w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      {dropdownOpen && (
        <div
          className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md transition-opacity duration-300"
        >
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-[#F5D9D6] font-medium"
          >
            Dream Analyzer
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-[#F5D9D6] font-medium"
          >
            Digital Detox
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-[#F5D9D6] font-medium"
          >
            Audio/Video Therapy
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-[#F5D9D6] font-medium"
          >
            Heal with a Dost
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-[#F5D9D6] font-medium"
          >
            About Mental Health
          </a>
        </div>
      )}
    </div> */}