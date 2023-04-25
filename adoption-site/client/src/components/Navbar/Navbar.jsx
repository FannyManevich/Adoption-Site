import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  return (
    <div className="bg-img">
      <img
        class="logo"
        alt="logo"
        src="https://images.ctfassets.net/lraovp89rm10/m1v6QgUsLBYSn9Jhi7Jtz/c840c633799a39add65a68fdd57cbefb/2021_GRO_Dept-Logos-Pets.png"
      ></img>
      <div class="container">
        <div id="navbar" className="topnav">
          <Link to="/">Home</Link>
          <Link to="/Doggies">Show me some doggies</Link>
          <Link to="/Kitties">I prefer kitties</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
