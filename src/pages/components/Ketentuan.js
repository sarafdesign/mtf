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
                  Mahasiswa dan atau professional yang sedang menjalankan
                  perkuliahan dan atau telah lulus perkuliahan
                </h2>
              </div>
              <div className="point-content" data-aos="fade-left">
                <div className="rectangle-even">
                  {" "}
                  <p className="number">2</p>
                </div>
                <h2 className="text-even">
                  Individu dan atau tim yang ingin mengembangkan project
                  berbasis teknologi dan digital pada bidang multifinance
                </h2>
              </div>
              <div className="point-content" data-aos="fade-right">
                <div className="rectangle-odd">
                  {" "}
                  <p className="number">3</p>
                </div>
                <h2 className="text-odd">
                  Mahasiswa dan atau professional yang sedang menjalankan
                  perkuliahan dan atau telah lulus perkuliahan
                </h2>
              </div>
            </div>
            <div className="point-content" data-aos="fade-left">
              <div className="rectangle-even">
                {" "}
                <p className="number">4</p>
              </div>
              <h2 className="text-even">
                Tidak sedang bekerja dalam satu ikatan perusahaan, atau tidak
                punya hubungan internal dengan karyawan Mandiri Tunas Finance
              </h2>
            </div>
            <div className="card keterangan" data-aos="flip-up">
              <div className="card-body">
                <p className="card-text">
                  Kami mengajak kamu untuk bergabung dan mengikuti IT Business
                  Case Competition 2021
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
