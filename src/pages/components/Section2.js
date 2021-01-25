import React from "react";
import "../assets/css/section2.css";
import Ornament3 from "../assets/img/Ornament3.png";

const Section2 = () => {
  return (
    <>
      <section className="container section2" id="tentang">
        <div className="row">
          <div className="tempat col-12 col-md-5 col-lg-5">
            <img
              data-aos="fade-right"
              className="ornament3"
              src={Ornament3}
              alt=""
            />
          </div>
          <div className="konten2 col-12 col-md-7 col-lg-7">
            <h1 data-aos="fade-left">
              <b>Tentang MTF IT Business Competition</b>
            </h1>
            <p data-aos="fade-left">
              <br />
              IT Business Case Competition merupakan ajang tahunan yang diadakan
              oleh PT Mandiri Tunas Finance, dimana Business Case Competition
              pertama diadakan pada tahun 2019, dilanjutkan pada tahun 2020 dan
              tahun ini kembali diadakan dengan nama IT Business Case
              Competition. Acara ini selain bertujuan untuk menyelesaikan
              permasalahan di bidang multifinance melalui teknologi digital,
              juga bertujuan untuk mendorong para inovator di Indonesia untuk
              bersama – sama memajukan kemajuan industry multifinance dan
              tentunya untuk mengembangkan kemampuan para inovator itu sendiri
              untuk menjadi lebih baik.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section2;
