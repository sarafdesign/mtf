import React, { useState } from "react";
import "../assets/css/navbar.css";
import Logo from "../assets/img/Logo.png";

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light container">
        {/* <a href="navbar-brand">Logo</a> */}
        <img className="navbar-brand" src={Logo} alt="" />
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={toggleNavbar}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`${collapsed ? "collapse" : ""} navbar-collapse`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Beranda
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Tentang
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Peserta
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Hadiah
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Kategori
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Timeline
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Kriteria
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                FAQ
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <b>Masuk</b>
              </a>
            </li>
            <li className="nav-item">
              <button className="nav-link" href="#">
                Daftar
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
