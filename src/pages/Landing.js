import React from "react";
import Navbar from "./layout/Navbar";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section6 from "./components/Section6";
import Section7 from "./components/Section7";
import Section8 from "./components/Section8";
import Ornament1 from "./assets/img/Ornament1.png";
import Ketentuan from "./components/Ketentuan";
import Hadiah from "./components/Hadiah";
import Kategori from "./components/Kategori";
import Faq from "./components/Faq";
import "./assets/css/Landing.css";

const LandingPage = () => {
  return (
    <>
      <div className="wrap">
        <img className="ornamentbg" src={Ornament1} alt="" />
        <Navbar />
        <Section1 />
        <Section2 />
        <Ketentuan />
        <Hadiah />
        <Kategori />
        <Section6 />
        <Section7 />
        <Section8 />
        <Faq />
      </div>
    </>
  );
};

export default LandingPage;
