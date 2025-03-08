import React from "react";
import logo from "../assets/logo.png";
import "../components/Navbar.css";

const Navbar = () => {
  return (
    <nav id="nav">
      <div>
        <img className="w-20 " src={logo} alt="" />
        <p>
          Suvin <br />
          Editography
        </p>
      </div>
      <ul>
        <li>Home</li>
        <li>Contact</li>
        <li>Tools</li>
        <li>About</li>
      </ul>
      <button style={{ backgroundColor: "#6a00ff" }}>Signin</button>
    </nav>
  );
};

export default Navbar;
