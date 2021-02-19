import React from "react";
import "../assets/css/Footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-cta pt-5 pb-5">
            <div className="row">
              <div className="col-xl-4 col-md-4 mb-30">
                <div className="single-cta">
                  <div className="cta-text-about">
                    <h4>About us</h4>
                    <span>
                      IT Business Case Competition 2021 adalah ajang kompetisi
                      yang ditujukan untuk mahasiswa dan profesional untuk
                      menyelesaikan permasalahan dalam bidang multifinance
                      dengan menggunakan perkembangan teknologi dan inovasi
                      digital.
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-4 mb-30">
                <div className="single-cta">
                  <div className="cta-text-contact">
                    <h4>Contact us</h4>
                    <a href="https://line.me/ti/p/@karirmtf" target="_blank"><i class="fab fa-line line-bg"></i>{" "}</a>
                    <a href="https://www.instagram.com/karirmtf/" target="_blank"><i class="fab fa-instagram instagram-bg"></i>{" "}</a>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-4 mb-30">
                <div className="single-cta">
                  <i className="far fa-envelope-open"></i>
                  <div className="cta-text">
                    <h4>Mail us</h4>
                    <span>talent@mtf.co.id</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 col-lg-12 text-center text-lg-left">
                <div className="copyright-text">
                  <p>
                    Copyright &copy; 2021 Mandiri Tunas Finance. All Right
                    Reserved. Made with <i class="fa fa-heart pulse"></i> by{" "}
                    <a href="https://www.instagram.com/sarafdesign.id/">
                      {" "}
                      Saraf Design
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right"></div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
