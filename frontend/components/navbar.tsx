'use client'
import React, { useState } from "react";
import Link from "next/link";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="flex justify-between items-center py-5 px-6 relative">
        {/* Logo */}
        <div className="text-white font-bold text-lg">MedBotics</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex text-white space-x-8 items-center">
          <Link href='/'>
          <li className="cursor-pointer hover:text-primary-400">Home</li>
          </Link>
          <li className="cursor-pointer hover:text-primary-400">About</li>
          <li>
            <button className="border-2 border-primary-500 py-1 px-3 rounded-2xl bg-primary-500 hover:bg-primary-600 transition">
              ClickMe
            </button>
          </li>
        </ul>

        {/* Hamburger Button */}
        <button
          className="md:hidden flex flex-col space-y-1.5 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`h-0.5 w-6 bg-primary-500 rounded transition-transform duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-primary-500 rounded transition-opacity duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-primary-500 rounded transition-transform duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Dropdown in flow (pushes content down) */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <ul className="text-white flex flex-col space-y-3 py-5 items-center mx-3 rounded-2xl shadow-lg">
          <Link href='/'>
          <li className="cursor-pointer hover:text-primary-400">Home</li>
          </Link>
          <li className="cursor-pointer hover:text-primary-400">About</li>
          <li>
            <button className="border-2 border-primary-500 py-1 px-3 rounded-2xl bg-primary-500 hover:bg-primary-600 transition">
              ClickMe
            </button>
          </li>
        </ul>
      </div>

      
    </>
  );
};

export default Navbar;
