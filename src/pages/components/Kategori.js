import React from "react";
import Carousel, { slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import "../assets/css/Kategori.css";
import Lamp from "../assets/img/lightbulb 1.svg";
import Comp from "../assets/img/Saly-10.png";
import Bunder from "../assets/img/Side elements 01 2.svg";

const Kategori = () => {
  return (
    <>
      <section className="kategori" id="kategori">
        <img src={Lamp} alt="" className="lamp" data-aos="fade-down" />
        <h1 data-aos="fade-down">Kategori Lomba</h1>
        <div className="backgroundk">
          <img src={Comp} alt="" className="comp" data-aos="zoom-in" />
          <img src={Bunder} alt="" className="bunderan" data-aos="zoom-out" />
          <div className="container-fluid">
            <div className="carousel" data-aos="zoom-in">
              <Carousel
                plugins={[
                  "fastSwipe",
                  "arrows",
                  {
                    resolve: slidesToShowPlugin,
                    options: {
                      numberOfSlides: 3,
                    },
                  },
                ]}
                breakpoints={{
                  640: {
                    plugins: [
                      "fastSwipe",
                      "arrows",
                      {
                        resolve: slidesToShowPlugin,
                        options: {
                          numberOfSlides: 1,
                        },
                      },
                    ],
                  },
                  900: {
                    plugins: [
                      "fastSwipe",
                      "arrows",
                      {
                        resolve: slidesToShowPlugin,
                        options: {
                          numberOfSlides: 2,
                        },
                      },
                    ],
                  },
                  1440: {
                    plugins: [
                      "fastSwipe",
                      "arrows",
                      {
                        resolve: slidesToShowPlugin,
                        options: {
                          numberOfSlides: 2,
                        },
                      },
                    ],
                  },
                }}
              >
                <div className="card rectkategori">
                  <div className="card-body">
                    <h2 className="card-text">
                      Collection Scoring <br /> <br />{" "}
                      <small>
                        Merupakan sebuah inovasi berbasis digital dan teknologi
                        berbentuk aplikasi atau website yang dapat melakukan
                        penilaian secara otomatis terhadap profil risiko
                        customer berdasarkan data yang ada guna menentukan jenis
                        penanganan untuk penagihan kepada customer.
                      </small>
                    </h2>
                  </div>
                </div>
                <div className="card rectkategori">
                  <div className="card-body">
                    <h2 className="card-text">
                      E-Learning <br /> <br />{" "}
                      <small>
                        Merupakan sebuah inovasi berbasis digital dan teknologi
                        berbentuk aplikasi atau website yang dapat dijadikan
                        sebagai media pembelajaran secara daring yang bisa
                        diakses oleh seluruh karyawan MTF.
                      </small>
                    </h2>
                  </div>
                </div>
                <div className="card rectkategori">
                  <div className="card-body">
                    <h2 className="card-text">
                      Referral <br /> <br />{" "}
                      <small>
                        Merupakan sebuah inovasi teknologi baik berbasis
                        aplikasi ataupun website yang memungkinkan pihak
                        eksternal untuk melakukan input order referral, dan bisa
                        melakukan tracking orderan baik untuk eksternal maupun
                        internal.
                      </small>
                    </h2>
                  </div>
                </div>
                <div className="card rectkategori">
                  <div className="card-body">
                    <h2 className="card-text">
                      Payment Solution <br /> <br />{" "}
                      <small>
                        Merupakan sebuah inovasi teknologi baik berbasis
                        aplikasi ataupun website yang dapat meningkatkan
                        pengalaman konsumen dalam penggunaan aplikasi digital
                        MTF dengan fitur pembayaran (payment solution) yang
                        dapat diandalkan oleh konsumen.
                      </small>
                    </h2>
                  </div>
                </div>
                <div className="card rectkategori">
                  <div className="card-body">
                    <h2 className="card-text">
                      Media Marketing Automation <br /> <br />{" "}
                      <small>
                        Merupakan sebuah inovasi teknologi baik berbasis
                        aplikasi ataupun website yang dapat membuat dan
                        membagikan design konten promosi yang ada di
                        aplikasi/website MTF secara otomatis.
                      </small>
                    </h2>
                  </div>
                </div>
                <div className="card rectkategori">
                  <div className="card-body">
                    <h2 className="card-text">
                      New Mobile Survey <br />{" "}
                      <small className="last">
                        Merupakan sebuah inovasi teknologi baik berbasis
                        aplikasi ataupun website yang dapat meningkatkan
                        produktivitas karyawan dengan proses survey yang lebih
                        mudah yang terhubung dan terintegrasi langsung dengan
                        sistem internal perusahaan dan memiliki akses ke pihak
                        ketiga terkait seperti dukcapil, akses SLIK, Credit
                        Calculation, Web Service/aplikasi mobile lainnya (jika
                        tersedia), hingga digital signing
                      </small>
                    </h2>
                  </div>
                </div>
                <div className="card rectkategori">
                  <div className="card-body">
                    <h2 className="card-text">
                      Costumer Care
                      <br />
                      <small>
                        Merupakan sebuah inovasi teknologi baik berbasis
                        aplikasi ataupun website yang dapat menghimpun semua
                        laporan pengaduan secara otomatis dari customer melalui
                        berbagai sarana (online dan offline), sehingga seluruh
                        petugas pemberi layanan dapat memberikan informasi yang
                        tepat dan seragam dan mendukung proses pemberian
                        informasi yang lebih cepat.
                      </small>
                    </h2>
                  </div>
                </div>
                <div className="card rectkategori">
                  <div className="card-body">
                    <h2 className="card-text">
                      Sales Performance
                      <br />
                      <br />
                      <small>
                        Merupakan sebuah inovasi teknologi baik berbasis
                        aplikasi ataupun website yang memungkinkan para karyawan
                        sales dapat memantau performance dan reward secara
                        langsung sehingga karyawan dapat lebih terpacu dalam
                        meningkatkan produktivitas.
                      </small>
                    </h2>
                  </div>
                </div>
                {/* <div className="card rectkategori">
                  <div className="card-body">
                    <h2 className="card-text">
                      Online Taksasi <br /> <br />{" "}
                      <small>
                        Sebuah aplikasi untuk cek list kondisi unit di beberapa
                        titik untuk dijadikan grade unit yang mempengaruhi otr
                      </small>
                    </h2>
                  </div>
                </div>
                <div className="card rectkategori">
                  <div className="card-body">
                    <h2 className="card-text">
                      Maximize Leads Data <br /> <br />{" "}
                      <small>
                        Sebuah platform yang dapat melakukan monitoring untuk
                        leads multiguna dari all platform mtf
                      </small>
                    </h2>
                  </div>
                </div> */}
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Kategori;
