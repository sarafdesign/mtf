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
              <button className="nav-link">
                Beranda
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link">
                Tentang
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link">
                Peserta
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link">
                Hadiah
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link">
                Kategori
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link">
                Timeline
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link">
                Kriteria
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link">
                FAQ
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link">
                <b>Masuk</b>
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link">
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
