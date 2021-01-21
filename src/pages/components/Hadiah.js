import React from "react";
import "../assets/css/Hadiah.css";
import Trophy from "../assets/img/trophy.svg";
import Hand from "../assets/img/Saly-24.svg";
import Bulet from "../assets/img/Side elements2.svg";

const Hadiah = () => {
  return (
    <>
      <div className="background" id="hadiah">
        <img src={Trophy} alt="" className="trophy" data-aos="fade-down" />
        <img src={Bulet} alt="" className="bulet" data-aos="zoom-in" />
        <section className="container hadiah">
          <div className="top" data-aos="fade-down">
            <h1>Hadiah Peserta</h1>
            <br />
            <h3>
              Selain mendapatkan pengalaman yang berharga dan mengembangkan
              kompetensi kamu, kamu juga berkesempatan memenangkan hadiah
            </h3>
          </div>
        </section>
        <div className="container-fluid">
          <img src={Hand} alt="" className="hand" data-aos="fade-up" />
          <div className="row justify-content-center square" data-aos="flip-right" >
            <div className="kotak col-md-4 col-lg-4 col-sm-8">
              <h2>
                Juara 1 <br />
                <br />
                <p>Rp. 50.000.000</p>{" "}
                <p className="teksduit">(Lima Puluh Juta Rupiah)</p>
              </h2>
            </div>
            <div className="kotak col-md-4 col-lg-4 col-sm-8">
              <h2>
                Juara 2 <br />
                <br />
                <p>Rp. 20.000.000</p>{" "}
                <p className="teksduit">(Dua Puluh Juta Rupiah)</p>
              </h2>
            </div>
            <div className="kotak col-md-4 col-lg-4 col-sm-8">
              <h2>
                Juara 3 <br />
                <br />
                <p>Rp. 10.000.000</p>{" "}
                <p className="teksduit">(Sepuluh Juta Rupiah)</p>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hadiah;
