import React from "react";
import Ketentuan from "./components/Ketentuan"
import Hadiah from "./components/Hadiah"
import "./assets/css/Landing.css"
import "@fontsource/rubik"

const LandingPage = () => {
  return (
    <>
      <Ketentuan />
      <Hadiah />
    </>
  );
};

export default LandingPage;
