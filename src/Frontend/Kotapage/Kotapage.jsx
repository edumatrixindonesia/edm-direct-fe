import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { Link, useLocation, useParams } from "react-router-dom";
import Topbar from "../../Topbar/TopBar";
import model from "../../asset/model.png";
import Footer from "../Footer/Footer";

const Kotapage = () => {
  const [name, setName] = useState([]);
  const [lokasi, setLokasi] = useState([]);
  const { id } = useParams();
  const [token, setToken] = useState("");
  const [kabupaten, setKabupaten] = useState([]);

  // useEffect(() => {
  //   getKotaById();
  // }, []);

  // const getKotaById = async () => {
  //   const response = await axios.get(`http://localhost:8000/kota/${id}`);
  //   setName(response.data?.name);
  // };

  function useQuery() {
    const { search } = useLocation();

    return useMemo(() => new URLSearchParams(search), [search]);
  }

  const query = useQuery();
  const axiosJWT = axios.create();

  useEffect(() => {
    const getLokasi = async () => {
      const response = await axiosJWT.get(
        `http://localhost:8000/kota/${query.get("data")}`,
        {
          headers: {
            Authorization: `Bearer`,
          },
        }
      );
      setName(response.data);
    };
    console.log(id);
    getLokasi(id);
    fetchKabupaten();
  }, [id, query]);

  useEffect(() => {
    console.log(name);
  }, [name]);

  const fetchKabupaten = () => {
    fetch("http://localhost:8000/ibukotakab")
      .then((res) => res.json())
      .then((data) => {
        setKabupaten(data);
        console.log(data);
      });
  };

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
                  Les Privat Terbaik di {name.kota}
                </span>
              </h3>
              <p>
                Jasa Les Privat untuk TK, SD, SMP, SMA, UN/AKM, OSN, CPNS, LPDP,
                PPDS, SIMAK UI, SNBT, AKPOL, AKMIL, Kedinasan, Mahasiswa dan
                Karyawan. Dapatkan layanan Les Privat kapan pun dan dimana pun
                dengan lebih dari 5.000 Master Teacher Edumatrix yang siap
                memberikan pelayanan terbaik.
              </p>
              {/* <div className="parent-button">
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
            </div> */}
              <p className="text-diliput">diliput oleh :</p>
            </div>
            <div className="parent-img">
              <img src={model} alt="" />
            </div>
          </div>
        </div>
        {/* KABUPATEN */}
        <div className="parent-title-kota">
          <h3 className="title-jangkauan-kota">
            Edumatrix Ada di Kota - Kota Berikut
          </h3>
          <p className="desk-jangkauan-kota">
            Edumatrix Indonesia memberikan layanan belajar terbaik sekaligus
            terdekat yang disesuaikan dengan lokasi siswa di seluruh Indonesia.
            Pilihlah layanan belajar Edumatrix yang terdekat dari kotamu:
          </p>
          <div className="parent-list-kota">
            {kabupaten.map((item, index) => (
              <Link
                to={`kabupaten/${item.slug.toLowerCase()}?data=${item.id}`}
                className="btn-kota"
                key={index}
              >
                {item.kota_kabupaten}
              </Link>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Kotapage;
