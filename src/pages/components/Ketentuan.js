import React from "react";
import "../assets/css/Ketentuan.css";
import Button from "../assets/img/Button.svg";
import CirclePack from "../assets/img/Circle Pack.svg";
import Phone from "../assets/img/Saly-12.svg";

const Ketentuan = () => {
  return (
    <>
      <section className="container">
        <div className="row justify-content-center">
          <div className="content col-12 col-md-12 col-lg-12">
            <h1>Ketentuan Peserta</h1>
            <div className="point">
              <div className="point-content">
                <div className="rectangle-odd">
                  {" "}
                  <p className="number">1</p>
                </div>
                <h2 className="text-odd">
                  Mahasiswa dan atau professional yang sedang menjalankan
                  perkuliahan dan atau telah lulus perkuliahan
                </h2>
              </div>
              <div className="point-content">
                <div className="rectangle-even">
                  {" "}
                  <p className="number">2</p>
                </div>
                <h2 className="text-even">
                  Individu dan atau tim yang ingin mengembangkan project
                  berbasis teknologi dan digital pada bidang multifinance
                </h2>
              </div>
              <div className="point-content">
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
            <div className="point-content">
              <div className="rectangle-even">
                {" "}
                <p className="number">4</p>
              </div>
              <h2 className="text-even">
                Tidak sedang bekerja dalam satu ikatan perusahaan, atau tidak
                punya hubungan internal dengan karyawan Mandiri Tunas Finance
              </h2>
            </div>
            <div className="keterangan">
              <div className="rectangle-keterangan">
                <p>
                  Kami mengajak kamu untuk bergabung dan mengikuti IT Business
                  Case Competition 2021
                </p>
              </div>
            </div>
          </div>
        </div>
        <img src={Phone} alt="" className="phone" />
        <img src={Button} alt="" className="button" />
        <img src={CirclePack} alt="" className="circle" />
      </section>
    </>
  );
};

export default Ketentuan;
