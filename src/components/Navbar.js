import React from "react";
import { RiCoinsFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <Link to="/">
      <div className="navbar">
        <RiCoinsFill className="icon" />
        <h1>
          Coin <span className="purple">Search</span>{" "}
        </h1>
      </div>
    </Link>
  );
};

export default Navbar;
