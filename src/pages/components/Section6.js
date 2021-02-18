import React from "react";
import Schedule from "../assets/img/schedule1.png";
import Cloud from "../assets/img/Cloud.png";
import element from "../assets/img/element.png";
import "../assets/css/section6.css";

const Section6 = () => {
  return (
    <>
      <section className="container" id="timeline">
        <div className="konten6">
          <img
            data-aos="fade-up"
            src={Schedule}
            className="gmbrkalender"
            alt=""
          />
          <h1 data-aos="fade-up">
            <b>Timeline</b>
          </h1>
          <img data-aos="fade-right" src={Cloud} className="ornament4" alt="" />
          <img
            data-aos="fade-left"
            src={element}
            className="ornament5"
            alt=""
          />
        </div>
        <div data-aos="fade-up" className="kontainerbar">
          <ul className="progressbar">
            <li className="active">
              <b>Registration</b>
              <br />
              <p>22nd February – 22nd March 2021</p>
            </li>
            <li>
              <b>
                Idea Selection <br /> & Workshop
              </b>
              <br />
              <p>March 2021</p>
            </li>
            <li>
              <b>Application Submission</b>
              <br />
              <p>April 2021</p>
            </li>
            <li>
              <b>Final</b>
              <br />
              <p>April 2021</p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Section6;
