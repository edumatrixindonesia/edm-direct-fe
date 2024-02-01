import React from "react";
import Topbar from "../Topbar/TopBar";
import "./Home.css";
import model from "../asset/model.png";

const Home = () => {
  return (
    <React.Fragment>
      <Topbar />
      <div className="container-hero">
        <div className="hero">
          <div className="content-hero">
            <div className="deskripsi-hero">
              <h3 className="title-hero">
                Edumatrix Indonesia{" "}
                <span className="bg-title-hero">
                  Les Privat Terbaik di Indonesia
                </span>
              </h3>
              <p>
                Jasa Les Privat untuk TK, SD, SMP, SMA, UN/AKM, OSN, CPNS, LPDP,
                PPDS, SIMAK UI, SNBT, AKPOL, AKMIL, Kedinasan, Mahasiswa dan
                Karyawan. Dapatkan layanan Les Privat kapan pun dan dimana pun
                dengan lebih dari 5.000 Master Teacher Edumatrix yang siap
                memberikan pelayanan terbaik.
              </p>
              <div className="parent-button">
                <button>Gabung Kelas</button>
              </div>
            </div>
            <div className="parent-img">
              <img src={model} alt="" srcset="" />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
