import React, { useState } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faClipboard,
  faPhone,
  faSchool,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Navbar = () => {
  const navigate = useNavigate();
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  const goToLogin = () => {
    navigate("/");
  };

  const goToProgram = () => {
    navigate("/dashboard/listprogram")
  };

  const goToWhatsApp = () => {
    navigate("/dashboard/listwa")
  }

  const goToLayanan = () => {
    navigate("/dashboard/listlayanan")
  }

  const goToKelas = () => {
    navigate("/dashboard/listkelas")
  }

  const goToMapel = () => {
    navigate("/dashboard/listmapel")
  }

  const goToKantor = () => {
    navigate("/dashboard/listoffice")
  }

  const goToReservasi = () => {
    navigate("/dashboard/listreservasi")
  }

  const goToKeunggulan = () => {
    navigate("/dashboard/listkeunggulan")
  }

  const goToFaq = () => {
    navigate("/dashboard/listfaq")
  }
  
  const goToKota = () => {
    navigate("/dashboard/listkota")
  }

  const goToSekolah = () => {
    navigate("/dashboard/listsekolah")
  }

  const goToPilihanProgram = () => {
    navigate("/dashboard/listpilihanprogram")
  }

  const goToFiturProgram = () => {
    navigate("/dashboard/listfiturprogram")
  }

  const goToPromo = () => {
    navigate("/dashboard/listpromo")
  }

  const goToKelasPerKota = () => {
    navigate("/dashboard/listkelasperkota")
  }

  const goToTestimoni = () => {
    navigate("/dashboard/listtestimoni")
  }

  const goToGuru = () => {
    navigate("/dashboard/listguru")
  }

  const Logout = async () => {
    try {
      await axios.delete("http://localhost:8000/logout");
      goToLogin();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="s-layout">
      {/* Sidebar */}
      <div className="s-layout__sidebar">
        <div className="navbar-top">
          <a className="s-sidebar__trigger">
            <FontAwesomeIcon onClick={showSidebar} className="hamburger-icon" icon={faBars} />
          </a>
          <div className="parent-btn">
            <button className="btn-logout" onClick={Logout}>
              Logut
            </button>
          </div>
        </div>
        <nav className="s-sidebar__nav">
          <ul>
          <li>
              <a>
                <em><img className="img-title" src="https://edumatrix-education.vercel.app/static/media/logo_edm.d190f8a81fb23ea9ea9b.png" alt="" /></em>
              </a>
            </li>
            <li onClick={() => goToProgram()}>
              <a className="s-sidebar__nav-link">
                <em className="em-style">Program</em>
              </a>
            </li>
            <li onClick={() => goToReservasi()}>
              <a className="s-sidebar__nav-link">
                <em className="em-style">Reservasi</em>
              </a>
            </li>
            <li onClick={() => goToPilihanProgram()}>
              <a className="s-sidebar__nav-link">
                <em className="em-style">Pilihan Program</em>
              </a>
            </li>
            <li onClick={() => goToFiturProgram()}>
              <a className="s-sidebar__nav-link">
                <em className="em-style">Fitur Program</em>
              </a>
            </li>
            <li onClick={() => goToLayanan()}>
              <a className="s-sidebar__nav-link">
                <em className="em-style">Fitur Layanan</em>
              </a>
            </li>
            <li onClick={() => goToPromo()}>
              <a className="s-sidebar__nav-link">
                <em className="em-style">Promo</em>
              </a>
            </li>
            <li onClick={() => goToGuru()}>
              <a className="s-sidebar__nav-link">
                <em className="em-style">Guru</em>
              </a>
            </li>
            <li onClick={() => goToKelas()}>
              <a className="s-sidebar__nav-link">
                <em className="em-style">Kelas</em>
              </a>
            </li>
            <li onClick={() => goToKelasPerKota()}>
              <a className="s-sidebar__nav-link">
                <em className="em-style">Kelas/Kota</em>
              </a>
            </li>
            <li onClick={() => goToKota()}>
              <a className="s-sidebar__nav-link">
                <em className="em-style">Kota</em>
              </a>
            </li>
            <li>
              <a className="s-sidebar__nav-link">
                <em className="em-style">Kota/Kabupaten</em>
              </a>
            </li>
            <li>
              <a className="s-sidebar__nav-link">
                <em className="em-style">Kecamatan</em>
              </a>
            </li>
            <li onClick={() => goToMapel()}>
              <a className="s-sidebar__nav-link">
                <em className="em-style">Mata Pelajaran</em>
              </a>
            </li>
            <li>
              <a className="s-sidebar__nav-link">
                <em className="em-style">Mapel/Wilayah</em>
              </a>
            </li>
            <li onClick={() => goToKeunggulan()}>
              <a className="s-sidebar__nav-link">
                <em className="em-style">Keunggulan</em>
              </a>
            </li>
            <li onClick={() => goToSekolah()}>
              <a className="s-sidebar__nav-link">
                <em className="em-style">Asal Sekolah</em>
              </a>
            </li>
            <li onClick={() => goToTestimoni()}>
              <a className="s-sidebar__nav-link">
                <em className="em-style">Testimoni</em>
              </a>
            </li>
            <li onClick={() => goToFaq()}>
              <a className="s-sidebar__nav-link">
                <em className="em-style">FAQ</em>
              </a>
            </li>
            <li onClick={() => goToKantor()}>
              <a className="s-sidebar__nav-link">
                <em className="em-style">Office</em>
              </a>
            </li>
            <li onClick={() => goToWhatsApp()} className="page-wa">
              <a className="s-sidebar__nav-link">
                <em className="em-style">WhatsApp</em>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;