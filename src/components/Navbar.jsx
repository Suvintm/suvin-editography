import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import { ImMenu3 } from "react-icons/im";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null); // Ref for dropdown menu
  const menuButtonRef = useRef(null); // Ref for menu button
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click is outside the dropdown and the menu button
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    // Attach event listener to document
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex m-5 border-b-2 pb-2 justify-between items-center md:mx-20 md:my-10 md:border-b-4 md:pb-10 relative">
      <div className="flex gap-2 md:gap-5 items-center">
        <img className="w-10 md:w-20" src={logo} alt="Logo" />
        <Link to="/" className="font-bold md:text-2xl">
          SUVIN <br /> editography
        </Link>
      </div>
      <div className="hidden md:flex gap-20 font-medium text-[20px] bg-gray-300 p-8 rounded-4xl px-20 ">
        <Link to="/">Home</Link>
        <Link to="/tools">Tools</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="flex items-center relative">
        <button
          onClick={() => navigate("/login")} // Navigate to /login on click
          className="bg-[#4A00F5] text-[10px] p-2 text-white font-medium md:p-4 rounded-3xl md:text-2xl"
        >
          SignUp
        </button>
        <ImMenu3
          ref={menuButtonRef} // Attach ref to menu button
          onClick={() => setIsOpen(!isOpen)}
          className="w-6 h-6 ml-4 cursor-pointer md:hidden"
        />
        {/* Mobile dropdown menu */}
        {isOpen && (
          <div
            ref={dropdownRef} // Attach ref to dropdown menu
            className="flex flex-col text-white font-medium items-center rounded-2xl absolute right-0 top-full mt-2 w-40 p-4 bg-[#4A00F5] z-10"
          >
            <Link to="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link to="/tools" onClick={() => setIsOpen(false)}>
              Tools
            </Link>
            <Link to="/about" onClick={() => setIsOpen(false)}>
              About
            </Link>
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
