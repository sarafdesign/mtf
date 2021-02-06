import React, { useState, useRef } from "react";
import axios from "axios";
import { useSpring, animated } from "react-spring";
import { MdClose } from "react-icons/md";
import { useHistory } from "react-router-dom";

export const ModalReg = ({ showModalReg, setShowModalReg }) => {
  let history = useHistory();
  const modalRef = useRef();
  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModalReg ? 1 : 0,
    transform: showModalReg ? `translateY(0%)` : `translateY(-100%)`,
  });
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange1 = (e) => setFirstName(e.target.value);
  const handleChange2 = (e) => setLastName(e.target.value);
  const handleChange3 = (e) => setEmail(e.target.value);
  const handleChange4 = (e) => setPassword(e.target.value);
  const handleChange5 = (e) => setPassword2(e.target.value);

  const handleRegis = (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const user = {
      firstname: firstName,
      lastname: lastName,
      email: email,
      password: password,
      password2: password2,
    };
    if (password.length == 8) {
      if (password === password2) {
        axios
          .post(`http://mtf-backend.herokuapp.com/api/register`, user)
          .then((res) => {
            console.log("Ini Hasil:");
            console.log(res);
            console.log("Berhasil Register");
          })
          .catch((error) => {
            setLoading(false);
            console.log("salah");
            console.log(error);
          });
      } else {
        setTimeout(() => {
          setLoading(false);
        }, 2000);
        alert("Password Tidak Sama");
      }
    } else {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
      alert("Password Tidak Boleh Kurang Dari 8 Digit");
    }
  };
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModalReg(false);
    }
  };
  return (
    <>
      {console.log("nama-pertama:" + firstName)}
      {console.log("nama-kedua:" + lastName)}
      {console.log("email:" + email)}
      {console.log("Pass:" + password)}
      {console.log("Pass2:" + password2)}
      {showModalReg ? (
        <div className="backgroundModal" ref={modalRef} onClick={closeModal}>
          <animated.div style={animation}>
            <div className="ModalWrapper">
              <div className="ModalContent">
                <h4>
                  Sign Up For New <br /> Account
                </h4>
                <form onSubmit={handleRegis}>
                  <div className="form-group">
                    <label>First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      placeholder="Enter First Name"
                      onChange={handleChange1}
                    />
                  </div>
                  <div className="form-group">
                    <label>Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="fullName"
                      placeholder="Enter Last Name"
                      onChange={handleChange2}
                    />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter Email"
                      onChange={handleChange3}
                    />
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Enter Password"
                      onChange={handleChange4}
                    />
                  </div>
                  <div className="form-group">
                    <label>Confirm Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="confirmPassword"
                      placeholder="Enter Password Again"
                      onChange={handleChange5}
                    />
                  </div>
                  <button className="btn-block mt-5" type="submit">
                    {loading ? "Loading..." : "SIGN UP"}
                  </button>
                </form>
              </div>
              <MdClose
                className="CloseModalButton"
                aria-label="Close Modal"
                onClick={() => setShowModalReg((prev) => !prev)}
              />
            </div>
          </animated.div>
        </div>
      ) : null}
    </>
  );
};
