import React, { useState } from "react";
import "../assets/css/navbar.css";
import { Button } from "reactstrap";
import Logo from "../assets/img/Logo.png";
import { useHistory } from "react-router-dom";
import { ModalReg } from "../components/ModalReg";
import { ModalLog } from "../components/ModalLog";

const Navbar = () => {
  // const [collapsed, setCollapsed] = useState(true);
  // const toggleNavbar = () => setCollapsed(!collapsed);
  const [isOpen, setIsOpen] = useState(false);
  const [showModalLog, setShowModalLog] = useState(false);
  const openModalLog = () => {
    setShowModalLog((prev) => !prev);
  };
  const [showModalReg, setShowModalReg] = useState(false);
  const openModalReg = () => {
    setShowModalReg((prev) => !prev);
  };
  let history = useHistory();

  return (
    <>
      {/* {console.log(showModalReg)} */}
      <div>
        <ModalReg
          showModalReg={showModalReg}
          setShowModalReg={setShowModalReg}
        />
        <ModalLog
          showModalLog={showModalLog}
          setShowModalLog={setShowModalLog}
        />
      </div>
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
          // onClick={toggleNavbar}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* <div
          className={`${collapsed ? "collapse" : ""} navbar-collapse`}
          id="navbarSupportedContent"
        > */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#beranda">
                Beranda
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#tentang">
                Tentang
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#ketentuan">
                Peserta
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#hadiah">
                Hadiah
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#kategori">
                Kategori
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#timeline">
                Timeline
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#kriteria">
                Kriteria
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#faq">
                FAQ
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={openModalLog}>
                <b>Masuk</b>
              </a>
            </li>
            <li className="nav-item">
              <Button className="nav-link" onClick={openModalReg}>
                Daftar
              </Button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
