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
    <div className="navbar">
      <h1 className="navbar-brand">Portfolio.</h1>
      <div className="navbar-menu">
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link href={"/"}>
              <span className="navbar-link active">Home</span>
            </Link>
          </li>
          <li className="navbar-item">
            <Link href={"/about"}>
              <span className="navbar-link">About</span>
            </Link>
          </li>
          <li className="navbar-item">
            <Link href={"/projects"}>
              <span className="navbar-link">Projects</span>
            </Link>
          </li>
         
          <li className="navbar-item">
            <Link href={"/skills"}>
              <span className="navbar-link">Skills</span>
            </Link>
          </li>
          <li className="navbar-item">
            <Link href={"/contact"}>
              <span className="navbar-link">Contact</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
        {isOpen ? <FiX /> : <FiAlignJustify />}
      </div>

      {isOpen && (
        <div className="mobile-menu">
          <div className="mobile-close" onClick={toggleMenu}>
            <FiX />
          </div>
          <ul className="mobile-list">
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
              <Link href={"/contact"} onClick={toggleMenu}> Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
