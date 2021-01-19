import React from "react";
import "../assets/css/Faq.css";
import Graph from "../assets/img/Graph.svg";
import Tri from "../assets/img/Triangle.svg";
import Flag from "../assets/img/Saly-15.svg";

const Faq = () => {
  return (
    <>
      <section className="faq-section">
        <img src={Graph} alt="" className="graph" />
        <img src={Tri} alt="" className="tri" />
        <img src={Flag} alt="" className="flag" />
        <div className="container">
          <div className="row">
            <div className="col-md-12 offset-md-12">
              <div className="faq-title text-center pb-3">
                <h2>Frequently Asked Questions</h2>
              </div>
            </div>
            <div className="col-md-12 offset-md-12">
              <div className="faq" id="accordion">
                <div className="card">
                  <div className="card-header" id="faqHeading-1">
                    <div className="mb-0">
                      <h5
                        className="faq-title"
                        data-toggle="collapse"
                        data-target="#faqCollapse-1"
                        data-aria-expanded="true"
                        data-aria-controls="faqCollapse-1"
                      >
                        <span className="badge">1</span>What is Lorem Ipsum?
                      </h5>
                    </div>
                  </div>
                  <div
                    id="faqCollapse-1"
                    className="collapse"
                    aria-labelledby="faqHeading-1"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="faqHeading-2">
                    <div className="mb-0">
                      <h5
                        className="faq-title"
                        data-toggle="collapse"
                        data-target="#faqCollapse-2"
                        data-aria-expanded="false"
                        data-aria-controls="faqCollapse-2"
                      >
                        <span className="badge">2</span> Where does it come
                        from?
                      </h5>
                    </div>
                  </div>
                  <div
                    id="faqCollapse-2"
                    className="collapse"
                    aria-labelledby="faqHeading-2"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <p>
                        Contrary to popular belief, Lorem Ipsum is not simply
                        random text. It has roots in a piece of classical Latin
                        literature from 45 BC, making it over 2000 years old.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="faqHeading-3">
                    <div className="mb-0">
                      <h5
                        className="faq-title"
                        data-toggle="collapse"
                        data-target="#faqCollapse-3"
                        data-aria-expanded="false"
                        data-aria-controls="faqCollapse-3"
                      >
                        <span className="badge">3</span>Why do we use it?
                      </h5>
                    </div>
                  </div>
                  <div
                    id="faqCollapse-3"
                    className="collapse"
                    aria-labelledby="faqHeading-3"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
                        letters, as opposed to using 'Content here, content
                        here.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
