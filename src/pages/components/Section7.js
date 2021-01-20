import React from "react";
import kriteria1 from "../assets/img/kriteria1.png";
import kriteria2 from "../assets/img/kriteria2.png";
import kriteria3 from "../assets/img/kriteria3.png";
import kriteria4 from "../assets/img/kriteria4.png";
import ornament6 from "../assets/img/ornament6.png";
import ornament7 from "../assets/img/ornament7.png";
import ornament8 from "../assets/img/ornament8.png";

import "../assets/css/section7.css";

const Section7 = () => {
  return (
    <>
      <section className="konten7">
        <div className="container">
          <h1 data-aos="fade-down">
            <b>Kriteria Penilaian</b>
          </h1>
          <div className="row">
            <div data-aos="flip-right" className="col-12 col-md-6 col-lg-6">
              <img src={kriteria1} className="gambarkriteria" />
              <h3>
                <b>Originalitas</b>
              </h3>
              <h5>Aplikasi merupakan sesuatu yang baru</h5>
            </div>
            <div data-aos="flip-left" className="col-12 col-md-6 col-lg-6">
              <img src={kriteria2} className="gambarkriteria" />

              <h3>
                <b>Tepat Guna</b>
              </h3>
              <h5>
                Kesiapan aplikasi/solusi yang <br /> ditawarkan sesuai dengan
                brief yang <br /> telah diberikan
              </h5>
            </div>
            <div data-aos="flip-right" className="col-12 col-md-6 col-lg-6">
              <img src={kriteria3} className="gambarkriteria" />
              <h3>
                <b>UI & UX</b>
              </h3>
              <h5>
                Desain antarmuka dan kemudahan dalam <br /> menggunakan
                aplikasi/solusi yang <br /> ditawarkan
              </h5>
            </div>
            <div data-aos="flip-left" className="col-12 col-md-6 col-lg-6">
              <img src={kriteria4} className="gambarkriteria" />
              <h3>
                <b>Dampak Aplikasi</b>
              </h3>
              <h5>
                Kebermanfaatan aplikasi pada proses bisnis <br />
                perusahaan dan seberapa jauh aplikasi tersebut
                <br /> menyelesaikan permasalahan yang ada
              </h5>
            </div>
          </div>
        </div>
        <div className="ornamentkonten7">
          <img data-aos="fade-down" src={ornament6} className="ornament6" />
          <img data-aos="fade-right" src={ornament7} className="ornament7" />
          <img src={ornament8} className="ornament8" />
        </div>
      </section>
    </>
  );
};

export default Section7;
