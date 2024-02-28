import React from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../assets/logo.webp";
import "../Layout/rootlayout.css";
import RootFooter from "./RootFooter";
import "./rootfooter.css";
const RootLayout = () => {
  return (
    <div>
      <nav className="navbar">
        <img src={logo} alt="logo" />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
          <li>
            <Link to="contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
      <RootFooter />
    </div>
  );
};

export default RootLayout;
