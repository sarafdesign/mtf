import React from "react";
import Navbar from "./layout/Navbar";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section6 from "./components/Section6";
import Section7 from "./components/Section7";
import Ornament1 from "./assets/img/Ornament1.png";
import "./assets/css/Landing.css";

const LandingPage = () => {
  return (
    <>
      <div className="wrap">
        <img className="ornamentbg" src={Ornament1} alt="" />
        <Navbar />
        <Section1 />
        <Section2 />
        <Section6 />
        <Section7 />
      </div>
    </>
  );
};

export default LandingPage;
