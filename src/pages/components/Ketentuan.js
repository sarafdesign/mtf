import React from "react";
import "../assets/css/Ketentuan.css";
import Button from "../assets/img/Button.svg";
import CirclePack from "../assets/img/Circle Pack.svg";
import Phone from "../assets/img/Saly-12.svg";

const Ketentuan = () => {
  return (
    <>
      <section className="container" id="ketentuan">
        <div className="row justify-content-center">
          <div className="content col-12 col-md-12 col-lg-12">
            <h1 data-aos="fade-up">Ketentuan Peserta</h1>
            <div className="point">
              <div className="point-content" data-aos="fade-right">
                <div className="rectangle-odd">
                  {" "}
                  <p className="number">1</p>
                </div>
                <h2 className="text-odd">
                  Kompetisi ini merupakan kompetisi berkelompok yang terdiri
                  dari minimal 2 orang dan maksimal 3 orang
                </h2>
              </div>
              <div className="point-content" data-aos="fade-left">
                <div className="rectangle-even">
                  {" "}
                  <p className="number">2</p>
                </div>
                <h2 className="text-even">
                  Peserta dapat berprofesi sebagai mahasiswa maupun profesional
                  yang tertarik dengan pengembangan teknologi dan menyelesaikan
                  permasalahan yang terkait multifinance
                </h2>
              </div>
              <div className="point-content" data-aos="fade-right">
                <div className="rectangle-odd">
                  {" "}
                  <p className="number">3</p>
                </div>
                <h2 className="text-odd">
                  Salah satu anggota tim harus menguasai programming,software
                  development, data analyst, dan sejenisnya.
                </h2>
              </div>
            </div>
            <div className="point-content" data-aos="fade-left">
              <div className="rectangle-even">
                {" "}
                <p className="number">4</p>
              </div>
              <h2 className="text-even">
                Peserta yang berprofesi diluar mahasiswa, tidak diperkenankan
                untuk terikat dalam suatu ikatan kerja pada sebuah badan hukum
              </h2>
            </div>
            <div className="card keterangan" data-aos="flip-up">
              <div className="card-body">
                <p className="card-text">
                  Kami mengajak kamu untuk bergabung <br />
                  dan mengikuti <br /> IT Business Case Competition 2021
                </p>
              </div>
            </div>
          </div>
        </div>
        <img src={Phone} alt="" className="phone" data-aos="fade-left" />
        <img src={Button} alt="" className="button" data-aos="zoom-in" />
        <img src={CirclePack} alt="" className="circle" data-aos="fade-right" />
      </section>
    </>
  );
};

export default Ketentuan;
