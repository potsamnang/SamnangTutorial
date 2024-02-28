import React from "react";
import { Outlet } from "react-router-dom";
import CardHome from "../Components/PageHome/CardHome";

const Home = () => {
  return (
    <div>
      <CardHome />
      <Outlet />
    </div>
  );
};

export default Home;
