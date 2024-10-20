import Link from 'next/link';
import React from 'react';
import { FaGithub, FaLinkedin, FaDiscord, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <ul className="footer-list">
          <li>
            <Link href="/" className="footer-link">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="footer-link">
              About
            </Link>
          </li>
          <li>
            <Link href="/projects" className="footer-link">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/skills" className="footer-link">
              Skills
            </Link>
          </li>
          <li>
            <Link href="/contact" className="footer-link">
              Contact
            </Link>
          </li>
        </ul>

        <div className="footer-icons">
          <Link href="https://github.com/WaniaAzamm" target="_blank">
            <FaGithub className="footer-icon" />
          </Link>
          <Link href="https://linkedin.com/in/waniaa-azam" target="_blank">
            <FaLinkedin className="footer-icon" />
          </Link>
          <Link href="https://discordapp.com/users/waniaazam_70450" target="_blank">
            <FaDiscord className="footer-icon" />
          </Link>
        </div>

        <div className="footer-contact">
          <FaEnvelope className="footer-email-icon" />
          <Link href="mailto:waniazam6052@gmail.com" className="footer-email-link">
            waniazam605@gmail.com
          </Link>
        </div>
      </div>
    </footer>
  );
}
