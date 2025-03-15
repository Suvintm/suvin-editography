import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import "../components/Navbar.css";

const Navbar = () => {
  return (
    <div
      id="container"
      className="bg-blue-900 shadow-2xl flex justify-between items-center rounded-[10px]"
    >
      <div className="flex items-center m-5 gap-4  rounded-2xl">
        <img className="w-20" src={logo} alt="" />
        <Link className="font-bold text-2xl text-white" to="/">
          Suvin
          <br />
          Editography
        </Link>
      </div>
      <div className="hidden md:block text-white font-medium flex items-center bg-black w-150">
        <Link to="/">Home</Link>
        <Link to="/tools">Tools</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <button className="bg-white">SignUp</button>
    </div>
  );
};

export default Navbar;
