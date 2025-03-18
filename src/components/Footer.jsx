import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-5 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* 1️⃣ About Section */}
          <div>
            <img className="w-20" src={logo} alt="" />
            <h3 className="text-2xl font-bold text-[#4A00F5]">
              Suvin Editography
            </h3>
            <p className="mt-3 text-gray-400">
              Your ultimate destination for AI-powered video & audio editing
              tools. Create stunning videos effortlessly!
            </p>
          </div>

          {/* 2️⃣ Quick Links */}
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <Link to="/" className="mt-2 text-gray-400 hover:text-white">
              Home
            </Link>
            <Link to="/tools" className="mt-2 text-gray-400 hover:text-white">
              Tools
            </Link>
            <Link to="/about" className="mt-2 text-gray-400 hover:text-white">
              About
            </Link>
            <Link to="/contact" className="mt-2 text-gray-400 hover:text-white">
              Contact
            </Link>
          </div>

          {/* 3️⃣ Social Media Section */}
          <div>
            <h3 className="text-xl font-semibold">Follow Us</h3>
            <div className="flex gap-5 mt-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 text-2xl"
              >
                <FaFacebook />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500 text-2xl"
              >
                <FaInstagram />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 text-2xl"
              >
                <FaTwitter />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500 text-2xl"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-10 pt-5 text-center">
          <p className="text-gray-400">
            © 2025 Suvin Editography. All Rights Reserved.
          </p>
          <p className="text-gray-500 mt-2">
            Made with ❤️ by Suvin Editography
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
