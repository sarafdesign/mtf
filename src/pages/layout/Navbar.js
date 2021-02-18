import React, { useState } from "react";
import "../assets/css/navbar.css";
import { Button } from "reactstrap";
import Logo from "../assets/img/Logo.png";
import { useHistory } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
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
        {/* <HashLink href="navbar-brand">Logo</HashLink> */}
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
              <HashLink className="nav-link" to="#beranda">
                Beranda
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink className="nav-link" to="#tentang">
                Tentang
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink className="nav-link" to="#ketentuan">
                Peserta
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink className="nav-link" to="#hadiah">
                Hadiah
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink className="nav-link" to="#kategori">
                Kategori
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink className="nav-link" to="#timeline">
                Timeline
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink className="nav-link" to="#kriteria">
                Kriteria
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink className="nav-link" to="#faq">
                FAQ
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink className="nav-link" onClick={openModalLog}>
                <b>Masuk</b>
              </HashLink>
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
