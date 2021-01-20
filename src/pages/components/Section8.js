import React from "react";
import "../assets/css/section8.css";
import "@brainhubeu/react-carousel/lib/style.css";
import gambar1 from "../assets/img/gallery/1.jpeg";
import gambar2 from "../assets/img/gallery/2.jpeg";
import gambar3 from "../assets/img/gallery/3.jpeg";
import gambar4 from "../assets/img/gallery/4.jpeg";
import gambar5 from "../assets/img/gallery/5.jpeg";
import gambar6 from "../assets/img/gallery/6.jpeg";
import gambar7 from "../assets/img/gallery/7.jpeg";
import gambar8 from "../assets/img/gallery/8.jpeg";
import gambar9 from "../assets/img/gallery/9.jpeg";
import gambar10 from "../assets/img/gallery/10.jpeg";
import gambar11 from "../assets/img/gallery/11.jpeg";
import gambar12 from "../assets/img/gallery/12.jpeg";
import gambar13 from "../assets/img/gallery/13.jpeg";
import gambar14 from "../assets/img/gallery/14.jpeg";
import gambar15 from "../assets/img/gallery/15.jpeg";
import gambar16 from "../assets/img/gallery/16.jpeg";
import ornament9 from "../assets/img/ornament9.png";
import cloud2 from "../assets/img/Cloud2.png";

import Carousel from "@brainhubeu/react-carousel";

const Section8 = () => {
  return (
    <>
      <section className="konten8">
        <div className="container">
          <h1 data-aos="fade-down">
            <b>Gallery</b>
          </h1>
          <div data-aos="fade-up">
            <Carousel className="gallery" arrows infinite>
              <img className="gbrgallery" src={gambar1} />
              <img className="gbrgallery" src={gambar2} />
              <img className="gbrgallery" src={gambar3} />
              <img className="gbrgallery" src={gambar4} />
              <img className="gbrgallery" src={gambar5} />
              <img className="gbrgallery" src={gambar6} />
              <img className="gbrgallery" src={gambar7} />
              <img className="gbrgallery" src={gambar8} />
              <img className="gbrgallery" src={gambar9} />
              <img className="gbrgallery" src={gambar10} />
              <img className="gbrgallery" src={gambar11} />
              <img className="gbrgallery" src={gambar12} />
              <img className="gbrgallery" src={gambar13} />
              <img className="gbrgallery" src={gambar14} />
              <img className="gbrgallery" src={gambar15} />
              <img className="gbrgallery" src={gambar16} />
            </Carousel>
          </div>
        </div>
        <img data-aos="fade-down" className="ornament9" src={ornament9} />
        <img data-aos="fade-left" className="cloud2" src={cloud2} />
      </section>
    </>
  );
};

export default Section8;