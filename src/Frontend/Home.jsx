import React, { useEffect, useState } from "react";
import Topbar from "../Topbar/TopBar";
import "./Home.css";
import model from "../asset/model.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const Home = () => {
  const [cardKelas, setCardKelas] = useState([]);
  // const [keyword, setKeyword] = useState("")
  const [tags, setTags] = useState([])
  // const [token, setToken] = useState("");

  const [records, setRecords] = useState(cardKelas)

  useEffect(() => {
    fetchCardKelas();
    fetchTags();
  }, []);

  const fetchCardKelas = () => {
    fetch('http://localhost:8000/kedinasan')
      .then((res) => res.json())
      .then((data) => {
        setCardKelas(data);
        setRecords(data)
        console.log(data);
      });
  };

  const Filter = (event) => {
    setRecords(cardKelas?.filter(f => f.name.toLowerCase().includes(event.target.value)))
  }

  const fetchTags = () => {
    fetch(`http://localhost:8000/tags`)
      .then((res) => res.json())
      .then((data) => {
        setTags(data.data);
        console.log(data);
      });
  };

  // const searchHandler = (query) => {
  //   setKeyword(query)
  // }

  // const requestButton = () => {
  //   fetchCardKelas()
  // }

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
                <div className="parent-search">
                  <input
                    onChange={Filter}
                    className="input-src"
                    type="search"
                    placeholder="cari kelas..."
                  />
                  {/* <button onClick={() => requestButton()} className="btn-src">
                    <FontAwesomeIcon className="src-icon" icon={faSearch} />
                  </button> */}
                  <button className="join-btn">Gabung Kelas</button>
                </div>
              </div>
              <p className="text-diliput">diliput oleh :</p>
            </div>
            <div className="parent-img">
              <img src={model} alt="" />
            </div>
          </div>
        </div>
        <div className="container-kelas">
          <div className="deskripsi-kelas">
            <h3 className="pilih-kelas">Pilih Kelas</h3>
          </div>
          <div className="container-card">
            {cardKelas?.map((item, index) => (
              <div key={index} className="main-card">
                <div className="header-card">
                  <img
                    src={"http://localhost:8000/images/" + item.image}
                    alt=""
                  />
                </div>
                <h1 className="title-card">{item.name}</h1>
                <p>{item.deskripsi}</p>
                <button>{item.tags}</button>
                {/* {cardKelas?.map((value, index) => (
                  
                ))} */}
                {/* <button>{tags.id}</button> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
