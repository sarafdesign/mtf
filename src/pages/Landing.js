import React from "react";
import Ketentuan from "./components/Ketentuan"
import Hadiah from "./components/Hadiah"
import "./assets/css/Landing.css"
import "@fontsource/rubik"
import Kategori from "./components/Kategori";

const LandingPage = () => {
  return (
    <>
      <Ketentuan />
      <Hadiah />
      <Kategori />
    </>
  );
};

export default LandingPage;
