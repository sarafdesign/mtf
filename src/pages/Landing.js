import React from "react";
import Navbar from "./layout/Navbar";
import Section1 from "./components/Section1";
import Ornament1 from "./assets/img/Ornament1.png";
import "./assets/css/Landing.css";

const LandingPage = () => {
  return (
    <>
      <img className="ornamentbg" src={Ornament1} alt="" />
      <Navbar />
      <Section1 />
    </>
  );
};

export default LandingPage;
