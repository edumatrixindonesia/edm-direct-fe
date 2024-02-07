import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";

const AddKelasperKota = () => {
  const [slug, setSlug] = useState("");
  const [file, setFile] = useState("");
  const [name, setName] = useState("");
  const [preview, setPreview] = useState("");
  const [daftarKelas, setDaftarKelas] = useState([]);
  const [jenjangPendidikan, setJenjangPendidikan] = useState([])
  const [jangkauanKota, setJangkauanKota] = useState([])

  const navigate = useNavigate();
  const [payload, setPayload] = useState({
    daftarKelas: "",
  });

  const goToDashboard = () => {
    navigate("/dashboard/listkelasperkota");
  };

  useEffect(() => {
    fetchDaftarKelas();
  }, []);

  // const loadImage = (e) => {
  //   const image = e.target.value[0];
  //   setFile(image);
  //   setPreview(URL.createObjectURL(image));
  // };

  // const saveKelas = async (e) => {
  //   e.preventDefault();
  //   const formData = new FormData()
  //   formData.append("file", file);
  //   formData.append
  //   try {
  //     await axios.post("http://localhost:8000/kelas", {
  //       title,
  //       slug,
  //       file
  //     });
  //     goToDashboard();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const fetchDaftarKelas = () => {
    fetch(`http://localhost:8000/kelas`)
      .then((res) => res.json())
      .then((data) => {
        setDaftarKelas(data);
        console.log(data);
      });
  };

  // HANDLE API KELAS
  const handleDaftarKelas = (e) => {
    const item = JSON.parse(e);
    setPayload({ ...payload, daftarKelas: item.name });
    fetchDaftarKelas(item.id);
  };

  const saveKelasperKota = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("jenjangpendidikan", jenjangPendidikan);
    formData.append("file", file);
    formData.append("jangkauankota", jangkauanKota);
    try {
      await axios.post("http://localhost:8000/kelasperkota", formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      goToDashboard();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={saveKelasperKota}>
          <div className="field">
            <label className="label">Jenjang Pendidikan</label>
            {/* <div className="control">
              <input
                type="text"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="jenjang pendidikan"
              />
            </div> */}
            <select
              className="select-input"
              onChange={(e) => handleDaftarKelas(e.target.value)}
              style={{
                width: "100%",
                borderRadius: "5px",
                height: "35px",
                paddingLeft: "10px",
              }}
              name=""
              id="role"
              placeholder="select"
            >
              <option disabled hidden selected>
                Jenjang Pendidikan
              </option>
              {daftarKelas.map((item, index) => (
                <option key={index} value={JSON.stringify(item)}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          {/* --HARUS POST GAMBAR KARENA ADA FUNCTION GAMBAR DI BE-- */}
          {/* <div className="field">
            <label className="label">Gambar</label>
            <div className="control">
              <input
                type="file"
                className="input"
                value={file}
                onChange={(e) => setFile(e.target.value)}
                placeholder="image"
              />
            </div>
          </div> */}

          <div className="field">
            <label className="label">Jangkauan Kota</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={jangkauanKota}
                onChange={(e) => setJangkauanKota(e.target.value)}
                placeholder="jangkauan kota"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Image</label>
            <div className="control">
              <div className="file">
                <label className="file-label">
                  <input
                    type="file"
                    className="file-input"
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                  <span className="file-cta">
                    <span className="file-label">Choose a file...</span>
                  </span>
                </label>
              </div>
            </div>
          </div>

          {/* {preview ? (
            <figure className="image is-128x128">
              <img src={preview} alt="Preview Image" />
            </figure>
          ) : (
            ""
          )} */}

          <div className="field">
            <button type="submit" className="button is-success">
              <FontAwesomeIcon icon={faSave} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddKelasperKota;
