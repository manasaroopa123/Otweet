import React from "react";
import "./Navbar.css";

const Navbar = () => (
  <nav className="navbar-x">
    <div className="navbar-x-center">Home</div>
    <div className="navbar-x-search-container">
      <input
        className="navbar-x-search"
        type="text"
        placeholder="Search Otweet"
      />
    </div>
    <div className="navbar-x-user">
      <span className="navbar-x-avatar">O</span>
      {/* TODO: Add user dropdown */}
    </div>
  </nav>
);

export default Navbar;
