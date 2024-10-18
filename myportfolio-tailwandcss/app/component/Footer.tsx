import Link from 'next/link'
import React from 'react'
import { FaGithub, FaLinkedin, FaDiscord, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="w-full py-6 relative bottom-0 bg-black text-white">
      <div className="container mx-auto">
        <ul className="flex flex-col sm:flex-row justify-center items-center text-white text-center space-y-4 sm:space-y-0 sm:space-x-10 mb-6">
          <li>
            <Link href="/" className="hover:text-cyan-400 transition duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-cyan-400 transition duration-300">
              About
            </Link>
          </li>
          <li>
            <Link href="/projects" className="hover:text-cyan-400 transition duration-300">
              Projects
            </Link>
          </li>
        
          <li>
            <Link href="/skills" className="hover:text-cyan-400 transition duration-300">
              Skills
            </Link>
          
          </li>
          <li>
            <Link href="/contact" className="hover:text-cyan-400 transition duration-300">
              Contact
            </Link>
          </li>
        </ul>

        <div className="flex justify-center space-x-6 mt-4 text-cyan-200">
          <Link href="https://github.com/WaniaAzamm" target="_blank">
            <FaGithub className="text-2xl hover:text-cyan-400 transition duration-300" />
          </Link>
          <Link href="https://linkedin.com/in/waniaa-azam" target="_blank">
            <FaLinkedin className="text-2xl hover:text-cyan-400 transition duration-300" />
          </Link>
          <Link href="https://discordapp.com/users/waniaazam_70450
" target="_blank">
            <FaDiscord className="text-2xl hover:text-cyan-400 transition duration-300" />
          </Link>
        </div>

        <div className="flex justify-center items-center mt-6">
          <FaEnvelope className="text-xl mr-2" />
          <Link href="mailto:waniazam6052@gmail.com" className="hover:text-cyan-400 transition duration-300">
            waniazam605@gmail.com
          </Link>
        </div>
      </div>
    </footer>
  )
}
