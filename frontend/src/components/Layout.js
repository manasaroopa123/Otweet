import React from "react";
import Navbar from "./Navbar";
import SidebarX from "./SidebarX";
import Rightbar from "./Rightbar";
import "./Layout.css";

const Layout = ({ children }) => (
  <div className="layout">
    <Navbar />
    <div className="layout-main">
      <SidebarX />
      <main className="layout-content">{children}</main>
      <Rightbar />
    </div>
  </div>
);

export default Layout;
