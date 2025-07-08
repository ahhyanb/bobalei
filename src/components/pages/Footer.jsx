import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="backdrop-blur-md bg-white/80 border-t border-gray-200/50 pt-40 pb-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col space-y-10">
        {/* Top Row: Nav (Left) and Socials (Right) */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full">
          {/* Nav Links Left */}
          <nav className="flex flex-col text-sm font-medium text-[#7eb5a3] space-y-2">
            <Link to="/" className="hover:text-[#F28B8B] transition">
              Home
            </Link>
            <Link to="/menu" className="hover:text-[#F28B8B] transition">
              Menu
            </Link>
            <Link to="/location" className="hover:text-[#F28B8B] transition">
              Location
            </Link>
            <Link to="/support" className="hover:text-[#F28B8B] transition">
              Support
            </Link>
          </nav>

          {/* Contact Info + Socials Right */}
          <div className="flex flex-col items-start sm:items-end text-[#7eb5a3] text-sm space-y-4 mt-8 sm:mt-0">
            <div className="flex items-center gap-2">
              <FaEnvelope />
              <a
                href="mailto:hello@bobalei.com"
                className="hover:text-[#F28B8B] transition"
              >
                hello@bobalei.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <FaPhoneAlt />
              <span>(808) 123-4567</span>
            </div>
            <div className="flex gap-4 mt-2">
              <a
                href="https://facebook.com/bobalei.maui"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#F28B8B] transition transform hover:scale-110"
              >
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/bobalei.maui"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#F28B8B] transition transform hover:scale-110"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Center Logo */}
        <div className="flex justify-center">
          <Link to="/">
            <img src="/logo.png" alt="Bobalei logo" className="h-14" />
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Bobalei. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
