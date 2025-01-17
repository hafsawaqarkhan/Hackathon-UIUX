"use client"
import Link from "next/link";
import { useState } from "react";
import { MdAccountCircle } from "react-icons/md";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white">

      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center py-4">
        <div className="text-2xl font-bold text-[#FF9D0F]">
          Foodtruck
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-orange">
            Home
          </a>
          <a href="/Menu" className="hover:text-orange">
            Menu
          </a>
          <a href="/Blog" className="hover:text-orange">
            Blog
          </a>
          <a href="/About" className="hover:text-orange">
            About
          </a>
          <a href="/Shop" className="hover:text-orange">
            Shop
          </a>
          <a href="/Contact" className="hover:text-orange">
            Contact
          </a>
          <a href="/FAQs" className="hover:text-orange">
            FAQs
          </a>
        </div>
        <div className="flex items-center space-x-4">
       
          <div className="hidden md:block">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 rounded-lg text-black"
            />
          </div>
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          > <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button> <div className="flex justify-center space-x-6 sm:hidden md:block lg:block">
          <Link  href="/Signin"><MdAccountCircle className="hover:cursor-pointer" /></Link> </div>
        </div>
        </div>
  
    
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black">
          <div className="flex flex-col items-center space-y-4 py-4">
            <a href="#" className="hover:text-orange-500">
              Home
            </a>
            <a href="/Menu" className="hover:text-orange">
              Menu
            </a>
            <a href="/Blog" className="hover:text-orange">
              Blog
            </a>
            <a href="/About" className="hover:text-orange">
              About
            </a>
            <a href="/Shop" className="hover:text-orange">
              Shop
            </a>
            <a href="/Contact" className="hover:text-orange">
              Contact
            </a>
            <a href="/FAQs" className="hover:text-orange">
            FAQs
          </a>
          </div>
          <div className="flex justify-center space-x-6 sm:block md:hidden lg:hidden">
          <Link  href="/Signin"><MdAccountCircle className="hover:cursor-pointer" /></Link>
            </div>
        </div>
      )}
    </nav>
  );
}
