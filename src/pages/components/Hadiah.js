import React from "react";
import "../assets/css/Hadiah.css";
import Trophy from "../assets/img/trophy.svg";
import Hand from "../assets/img/Saly-24.svg";
import Bulet from "../assets/img/Side elements2.svg"

const Hadiah = () => {
  return (
    <>
      <div className="background">
        <img src={Trophy} alt="" className="trophy" />
        <img src={Bulet} alt="" className="bulet"/>
        <section className="container hadiah">
          <div className="top">
            <h1>Hadiah Peserta</h1>
            <br />
            <h3>
              Selain mendapatkan pengalaman yang berharga dan mengembangkan
              kompetensi kamu, kamu juga berkesempatan memenangkan hadiah
            </h3>
          </div>
        </section>
        <div className="container-fluid">
          <img src={Hand} alt="" className="hand" />
          <div className="row justify-content-center">
            <div className="kotak col-4 col-md-4 col-lg-4">
              <h2>Juara 1</h2>
              <p>Rp. 50.000.000</p>
              <p className="teksduit">(Lima Puluh Juta Rupiah)</p>
            </div>
            <div className="kotak col-4 col-md-4 col-lg-4">
              <h2>Juara 2</h2>
              <p>Rp. 20.000.000</p>
              <p className="teksduit">(Dua Puluh Juta Rupiah)</p>
            </div>
            <div className="kotak col-4 col-md-4 col-lg-4">
              <h2>Juara 3</h2>
              <p>Rp. 10.000.000</p>
              <p className="teksduit">(Sepuluh Juta Rupiah)</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hadiah;
