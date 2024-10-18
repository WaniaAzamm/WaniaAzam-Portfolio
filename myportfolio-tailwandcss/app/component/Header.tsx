"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FiAlignJustify, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-between mt-8 items-center sm:px-20 px-9 py-3/2 w-full text-white absolute">
      <h1 className="text-xl ml-0 font-bold text-cyan-200 sm:text-3xl">Portfolio.</h1>
      <div>
        <ul className="hidden md:flex space-x-12 text-xl font-semibold font-sans">
          <li className="text-cyan-200">
            <Link href={"/"}>
              <span className="font-bold text-cyan-200">Home</span>
            </Link>
          </li>
          <li className="hover:text-cyan-200 duration-300">
            <Link href={"/about"}>About</Link>
          </li>
          <li className="hover:text-cyan-200 duration-300">
            <Link href={"/projects"}>Projects</Link>
          </li>
       
          <li className="hover:text-cyan-200 duration-300">
            <Link href={"/skills"}>Skills</Link>
          </li>
          <li className="hover:text-cyan-200 duration-300">
            <Link href={"/contact"}>Contact</Link>
          </li>
        </ul>
      </div>
      <div className="text-cyan-200 md:hidden text-4xl cursor-pointer" onClick={toggleMenu}>
        {isOpen ? <FiX /> : <FiAlignJustify />}
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col justify-center items-center text-cyan-200 z-50">
          <div className="absolute top-6 right-8 text-4xl cursor-pointer" onClick={toggleMenu}>
            <FiX />
          </div>
          <ul className="space-y-8 text-2xl font-semibold mt-20">
            <li>
              <Link href={"/"} onClick={toggleMenu}>Home</Link>
            </li>
            <li>
              <Link href={"/about"} onClick={toggleMenu}>About</Link>
            </li>
            <li>
              <Link href={"/projects"} onClick={toggleMenu}>Projects</Link>
            </li>
            <li>
              <Link href={"/skills"} onClick={toggleMenu}>Skills</Link>
            </li>
            <li>
              <Link href={"/contact"} onClick={toggleMenu}>Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
