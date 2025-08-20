import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => (
  <aside className="sidebar">
    <ul>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/profile">Profile</Link>
      </li>
      <li>
        <Link to="/notifications">Notifications</Link>
      </li>
      {/* TODO: Add more navigation links */}
    </ul>
  </aside>
);

export default Sidebar;
