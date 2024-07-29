import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-[#122620] p-4 flex justify-between items-center shadow-shd">
      <a href="#" className="text-white font-bold text-6xl pl-3 font-Roca">Exhale.</a>

      <div className="flex items-center space-x-4">
        <a href="#" className="text-white text-2xl hover:underline p-4">About us</a>
        <a href="#" className="text-white text-2xl hover:underline p-4">Find support</a>
        <a href="#" className="text-white text-2xl hover:underline p-4">Blogs & Stories</a>
        <div className="relative group">
          <button className="flex items-center text-white hover:underline p-4 text-2xl">
            More
            <svg className="ml-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
          </button>
          <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-[#F5D9D6] font-medium">Dream Analyzer</a>
            <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-[#F5D9D6] font-medium">Digital Detox</a>
            <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-[#F5D9D6] font-medium">Audio/Video Therapy</a>
            <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-[#F5D9D6] font-medium">Heal with a Dost</a>
            <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-[#F5D9D6] font-medium">About Mental Health</a>
          </div>
        </div>
        <a href="#" className="text-white text-2xl hover:underline p-4">Login</a>
      </div>
    </nav>
  );
};

export default Navbar;
