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
                        Sebuah sistem untuk menentukan parameter untuk
                        menggambarkan risiko profil customer
                      </small>
                    </h2>
                  </div>
                </div>
                <div className="card rectkategori">
                  <div className="card-body">
                    <h2 className="card-text">
                      New mobile collection <br /> <br />{" "}
                      <small>
                        Tracking pembayaran customer untuk meminimalisis fraud,
                        dan SKT Online
                      </small>
                    </h2>
                  </div>
                </div>
                <div className="card rectkategori">
                  <div className="card-body">
                    <h2 className="card-text">
                      E-Payment <br /> <br />{" "}
                      <small>
                        The new way of payment yang terintegrasi dalam mobile
                        MTF Go
                      </small>
                    </h2>
                  </div>
                </div>
                <div className="card rectkategori">
                  <div className="card-body">
                    <h2 className="card-text">
                      Pameran Mobil Online <br /> <br />{" "}
                      <small>
                        Sebuah platform yang dapat diutilize sebagai partnership
                        dengan dealer, bank mandiri maupun bsm
                      </small>
                    </h2>
                  </div>
                </div>
                <div className="card rectkategori">
                  <div className="card-body">
                    <h2 className="card-text">
                      Loyalty Program <br /> <br />{" "}
                      <small>
                        Sebuah enhancement MTF Go untuk customer existing MTF
                      </small>
                    </h2>
                  </div>
                </div>
                <div className="card rectkategori">
                  <div className="card-body">
                    <h2 className="card-text">
                      Dashboard SLA <br /> <br />{" "}
                      <small>
                        Dashboard yang bisa memantau SLA pencairan multiguna
                      </small>
                    </h2>
                  </div>
                </div>
                <div className="card rectkategori">
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
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Kategori;
