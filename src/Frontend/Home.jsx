import React, { useEffect, useState } from "react";
import Topbar from "../Topbar/TopBar";
import "./Home.css";
import model from "../asset/model.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCity, faSchool, faSearch } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { Link } from "react-router-dom";
import Footer from "./Footer/Footer";
import Faq from "./Faq/Faq";
import sekolah1 from "../asset/logo sekolah1.png";
import sekolah2 from "../asset/logo sekolah2.png";
// import logosekolah from "../asset/logo sekolah.png"

const Home = () => {
  const [cardKelas, setCardKelas] = useState([]);
  // const [keyword, setKeyword] = useState("")
  const [tags, setTags] = useState([]);
  // const [token, setToken] = useState("");
  const [loading, setLoading] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  const [kota, setKota] = useState([]);
  const [keunggulan, setKeunggulan] = useState([]);
  const [sekolahSiswa, setSekolahSiswa] = useState([]);
  const [kelas, setKelas] = useState([]);
  const [mapel, setMapel] = useState([]);

  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      const response = await axios.get("http://localhost:8000/pilihankelas");
      setCardKelas(response.data);
      setLoading(false);
    };

    loadPosts();
    fetchTags();
    fetchKota();
    fetchKeunggulan();
    fetchSekolahsiswa();
    fetchKelas();
    fetchMapel();
  }, []);

  const fetchKota = () => {
    fetch("http://localhost:8000/kota")
      .then((res) => res.json())
      .then((data) => {
        setKota(data);
        console.log(data);
      });
  };

  const fetchKelas = () => {
    fetch("http://localhost:8000/kelas")
      .then((res) => res.json())
      .then((data) => {
        setKelas(data);
        console.log(data);
      });
  };

  const fetchMapel = () => {
    fetch("http://localhost:8000/matapelajaran")
      .then((res) => res.json())
      .then((data) => {
        setMapel(data);
        console.log(data);
      });
  };

  const fetchKeunggulan = () => {
    fetch("http://localhost:8000/keunggulan")
      .then((res) => res.json())
      .then((data) => {
        setKeunggulan(data);
        console.log(data);
      });
  };

  const fetchSekolahsiswa = () => {
    fetch("http://localhost:8000/asalsekolah")
      .then((res) => res.json())
      .then((data) => {
        setSekolahSiswa(data);
        console.log(data);
      });
  };

  const fetchTags = () => {
    fetch(`http://localhost:8000/tags`)
      .then((res) => res.json())
      .then((data) => {
        setTags(data);
        console.log(data);
      });
  };

  const handleTags = (tags) => {
    fetch(`http://localhost:8000/pilihkelas?&tags=${tags}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data.data);
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
              <p className="p-hero-top">
                Jasa Les Privat untuk TK, SD, SMP, SMA, UN/AKM, OSN, CPNS, LPDP,
                PPDS, SIMAK UI, SNBT, AKPOL, AKMIL, Kedinasan, Mahasiswa dan
                Karyawan. Dapatkan layanan Les Privat kapan pun dan dimana pun
                dengan lebih dari 5.000 Master Teacher Edumatrix yang siap
                memberikan pelayanan terbaik.
              </p>
              <div className="parent-button">
                <div className="parent-search">
                  <input
                    onChange={(e) => setSearchTitle(e.target.value)}
                    className="input-src"
                    type="search"
                    placeholder="cari kelas..."
                  />
                  <button className="btn-src">
                    <FontAwesomeIcon className="src-icon" icon={faSearch} />
                  </button>
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
          <div className="parent-filter">
            <h3>Filter</h3>
            {tags?.map((item, index) => (
              <button
                value={tags}
                className="btn-filter"
                key={index}
                onClick={() => handleTags(item.tags)}
              >
                {item.tags}
              </button>
            ))}
          </div>
          <div className="container-card">
            {/* {cardKelas?.map((item, index) => (
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
              </div>
            ))} */}

            {loading ? (
              <h4>Loading ...</h4>
            ) : (
              cardKelas
                .filter((value) => {
                  if (searchTitle === "") {
                    return value;
                  } else if (
                    value.name.toLowerCase().includes(searchTitle.toLowerCase())
                  ) {
                    return value;
                  }
                })
                .map((item, index) => (
                  <div key={index} className="card-utama">
                    <div className="card-2">
                      <img
                        className="img-pilihkelas"
                        src={"http://localhost:8000/images/" + item.image}
                        alt="Avatar"
                      />
                      <div className="container">
                        <h4 className="title-card">
                          <b>{item.name}</b>
                        </h4>
                        <p>{item.deskripsi}</p>
                        <button className="btn-tags">{item.tags}</button>
                      </div>
                    </div>
                  </div>
                ))
            )}
          </div>
        </div>

        <div className="container-kota">
          {/* KOTA */}
          <div className="parent-title-kota">
            <h3 className="title-jangkauan-kota">
              Edumatrix Ada di Kota - Kota Berikut
            </h3>
            <p className="desk-jangkauan-kota">
              Edumatrix Indonesia memberikan layanan belajar terbaik sekaligus
              terdekat yang disesuaikan dengan lokasi siswa di seluruh
              Indonesia. Pilihlah layanan belajar Edumatrix yang terdekat dari
              kotamu:
            </p>
            <div className="parent-list-kota">
              {kota.map((item, index) => (
                <Link
                  to={`kota/${item.kota.toLowerCase()}?data=${item.id}`}
                  className="btn-kota"
                  key={index}
                >
                  <FontAwesomeIcon icon={faCity} /> &nbsp;
                  {item.kota}
                </Link>
              ))}
            </div>
          </div>
          <br />
          <br />
          {/* KELAS */}
          <div className="parent-title-kota">
            <h3 className="title-jangkauan-kota">
              Program di Edumatrix Indonesia
            </h3>
            <p className="desk-jangkauan-kota">
              Edumatrix Indonesia menyediakan pilihan program belajar terlengkap
              yang bisa disesuaikan dengan kelas/tingkatan setiap siswa.
              Pilihlah program belajar yang paling sesuai dengan kebutuhan dan
              tujuan belajarmu.
            </p>
            <div className="parent-list-kota">
              {kelas.map((item, index) => (
                <Link
                  to={`kelas/${item.slug.toLowerCase()}?data=${item.id}`}
                  className="btn-kelas"
                  key={index}
                >
                  <FontAwesomeIcon icon={faSchool} /> &nbsp;
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <br />
          <br />
          {/* MAPEL */}
          <div className="parent-title-kota">
            <h3 className="title-jangkauan-kota">Pilihan Mata Pelajaran</h3>
            <p className="desk-jangkauan-kota">
              Edumatrix Indonesia menyediakan pilihan program belajar terlengkap
              yang bisa disesuaikan dengan kelas/tingkatan setiap siswa.
              Pilihlah program belajar yang paling sesuai dengan kebutuhan dan
              tujuan belajarmu.
            </p>
            <div className="parent-list-mapel">
              {mapel.map((item, index) => (
                <Link
                  to={`mata-pelajaran/${item.name.toLowerCase()}?data=${
                    item.id
                  }`}
                  className="btn-mapel"
                  key={index}
                >
                  <div className="combine-icon-text">
                    <img
                      className="icon-mapel"
                      src={"http://localhost:8000/images/" + item.image}
                      alt=""
                    />
                    {item.name}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="container-keunggulan">
            <div className="parent-title-keunggulan">
              <h3 className="title-keunggulan">
                Keunggulan Edumatrix Indonesia
              </h3>
              <p className="desk-jangkauan-keunggulan">
                Hadir sebagai Bimbel terbaik, Edumatrix Indonesia semakin
                mengukuhkan status tersebut dengan berbagai keunggulan yang
                tidak dimiliki oleh Bimbel-Bimbel lainnya.
              </p>
              <div className="parent-card-keunggulan">
                {keunggulan.map((item, index) => (
                  <div key={index} className="card-keunggulan">
                    <div className="child-card-keunggulan">
                      <img
                        className="img-keunggulan"
                        src={"http://localhost:8000/images/" + item.image}
                      />
                      <hr className="line" />
                      <p className="desk-keunggulan">
                        <strong>{item.slug}</strong>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ASAL SEKOLAH */}
          <div className="container-keunggulan">
            <div className="parent-title-keunggulan">
              <h3 className="title-keunggulan">Asal Sekolah Siswa</h3>
              <p className="desk-jangkauan-keunggulan">
                Siswa Kami Berasal dari Berbagai Sekolah dengan Kurikulum
                Nasional dan Internasional
              </p>
              <div className="parent-card-asalsekolah">
                <div className="marquee">
                  <div className="track">
                    <div className="content">
                      <img className="logo-school" src={sekolah1} alt="" />	&nbsp;&nbsp;
                      <img className="logo-school" src={sekolah1} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              {/* --- */}
              <div className="parent-card-asalsekolah">
                <div className="marquee2">
                  <div className="track2">
                    <div className="content">
                      <img className="logo-school" src={sekolah2} alt="" /> 	&nbsp;&nbsp;
                      <img className="logo-school" src={sekolah2} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Faq />
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Home;
