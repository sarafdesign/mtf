import React from "react";
import "../assets/css/section1.css";
import Ornament2 from "../assets/img/Ornament2.png";

const Section1 = () => {
  return (
    <>
      <section className="container">
        <div className="row">
          <div className="konten col-12 col-md-6 col-lg-6">
            <h1>
              <b>MTF IT Business Case Competition</b>
            </h1>
            <p>
              IT Business Case Competition 2020 adalah ajang kompetisi yang
              ditujukan untuk mahasiswa dan professional untuk menyelesaikan
              permasalahan dalam bidang multifinance dengan menggunakan
              perkembangan teknologi dan inovasi digital.
            </p>
            <button>Info Selengkapnya</button>
          </div>
          <div className="col-12 col-md-6 col-lg-6">
            <img className="ornament2" src={Ornament2} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Section1;
