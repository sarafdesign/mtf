import React, { useState, useEffect } from "react";
import LandingPage from "./pages/Landing";
import "./App.css";
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <LandingPage />
    </>
  );
};

export default App;
