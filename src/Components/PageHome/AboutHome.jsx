import React from "react";
import { Outlet } from "react-router-dom";
import "./abouthome.css";
const AboutHome = ({ img, name, detail, children }) => {
  return (
    <div className="card">
      <div className="list-card">
        <img src={img} alt="pix" />
        <div className="text">
          {children}
          <p>{detail}</p>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default AboutHome;
