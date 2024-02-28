import React from "react";
import AboutHome from "./AboutHome";
import html from "./html.png";
import css from "./css.png";
import react from "./react.png";
import "./cardhome.css";
import { Link, Outlet } from "react-router-dom";

const CardHome = () => {
  return (
    <div className="wrapper">
      <AboutHome img={html} detail="What is HTML ?">
        <Link to="link-html">HTML</Link>
      </AboutHome>
      <AboutHome img={css} detail="What is CSS ?">
        <Link to="link-css">CSS</Link>
      </AboutHome>
      <AboutHome img={react} detail="What is React ?">
        <Link to="link-react">ReactJS</Link>
      </AboutHome>
      <Outlet />
    </div>
  );
};

export default CardHome;
