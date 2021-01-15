import React from "react";
import "../assets/css/section1.css";
import Ornament2 from "../assets/img/Ornament2.png";
import ButtonDown from "../assets/img/down.png";
import Circle1 from "../assets/img/Circle1.png";
import Circle2 from "../assets/img/Circle2.png";

const Section1 = () => {
  return (
    <>
      <section className="container">
        <div className="row">
          <div className="konten col-12 col-md-6 col-lg-6">
            <h1 data-aos="fade-right">
              <b>MTF IT Business Case Competition</b>
            </h1>
            <p data-aos="fade-right">
              IT Business Case Competition 2020 adalah ajang kompetisi yang
              ditujukan untuk mahasiswa dan professional untuk menyelesaikan
              permasalahan dalam bidang multifinance dengan menggunakan
              perkembangan teknologi dan inovasi digital.
            </p>
            <button data-aos="fade-down">Info Selengkapnya</button>
          </div>
          <div className="col-12 col-md-6 col-lg-6">
            <img
              data-aos="fade-left"
              className="ornament2"
              src={Ornament2}
              alt=""
            />
          </div>
        </div>

        <img data-aos="fade-up" className="circle1" src={Circle1} alt="" />
        <img data-aos="fade-up" className="circle2" src={Circle2} alt="" />

        <div className="down">
          <img data-aos="fade-down" className="buttonDown" src={ButtonDown} />
        </div>
      </section>
    </>
  );
};

export default Section1;
