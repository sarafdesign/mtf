import React from "react";
import Schedule from "../assets/img/schedule1.png";
import "../assets/css/section6.css";

const Section6 = () => {
  return (
    <>
      <section className="container">
        <div className="konten6">
          <img src={Schedule} className="gmbrkalender" />
          <h1>
            <b>Timeline</b>
          </h1>
        </div>
        <div className="kontainerbar">
          <ul className="progressbar">
            <li className="active">
              <b>Registration</b>
              <br />
              <p>Start on 4th of January 2021</p>
            </li>
            <li>
              <b>Idea Selection & Workshop</b>
              <br />
              <p>February 2021</p>
            </li>
            <li>
              <b>Application Submission</b>
              <br />
              <p>March 2021</p>
            </li>
            <li>
              <b>Final</b>
              <br />
              <p>March 2021</p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Section6;
