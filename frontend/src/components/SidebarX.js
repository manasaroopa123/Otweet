import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./SidebarX.css";

const navItems = [
  { name: "Home", path: "/home", icon: "🏠" },
  { name: "Explore", path: "/explore", icon: "#" },
  { name: "Notifications", path: "/notifications", icon: "🔔" },
  { name: "Profile", path: "/profile", icon: "👤" },
];

const SidebarX = () => {
  const location = useLocation();
  return (
    <nav className="sidebar-x">
      <div className="sidebar-x-logo">Otweet</div>
      <ul className="sidebar-x-list">
        {navItems.map((item) => (
          <li
            key={item.name}
            className={location.pathname === item.path ? "active" : ""}
          >
            <Link to={item.path}>
              <span className="sidebar-x-icon">{item.icon}</span>
              <span className="sidebar-x-label">{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
      <button className="sidebar-x-post">Post</button>
    </nav>
  );
};

export default SidebarX;
