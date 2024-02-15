import React, { useState } from "react";
import "./TopBar.css";
import { useNavigate } from "react-router-dom";
import logo from "../asset/logo edm.jpg"

const Topbar = () => {

  return (
    <div className="App">
      <nav className="navbar-nav">
        <img className="logo" src="https://edumatrix-education.vercel.app/static/media/logo_edm.d190f8a81fb23ea9ea9b.png" alt="" />
        <ul className="nav-links">
          <input type="checkbox" id="checkbox_toggle" />
          <label for="checkbox_toggle" className="hamburger">
            &#9776;
          </label>

          <div className="menu">
            <li>
              <a className="nav-beranda">Beranda</a>
            </li>
            <li className="services">
              <a className="nav-program" onClick={() => goToProgram()}>
                Program
              </a>

              {/* <ul className="dropdown">
                <li>
                  <a href="/">Dropdown 1 </a>
                </li>
                <li>
                  <a href="/">Dropdown 2</a>
                </li>
                <li>
                  <a href="/">Dropdown 2</a>
                </li>
                <li>
                  <a href="/">Dropdown 3</a>
                </li>
                <li>
                  <a href="/">Dropdown 4</a>
                </li>
              </ul> */}
            </li>
            <li>
              <a className="nav-kelas">
                Kelas
              </a>
            </li>
            <li className="li-btn">
              {/* <button className="btn-masuk">
                Masuk
              </button> */}
              <button className="btn-daftar">
                Daftar
              </button>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default Topbar;
