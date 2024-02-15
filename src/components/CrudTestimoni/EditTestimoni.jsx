import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { faRefresh, faSave } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// THE EDIT FEATURE EXPERIENCED AN ERROR!!

const EditTestimoni = () => {
  const [name_siswa, setName_Siswa] = useState("");
  const [judul_testi, setJudul_Testi] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [file, setFile] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getTestimoniById();
  }, []);

  const goToDashboard = () => {
    navigate("/dashboard/listtestimoni");
  };

  const updateTestimoni = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name_siswa", name_siswa);
    formData.append("deskripsi", deskripsi);
    formData.append("judul_testi", judul_testi);
    try {
      await axios.post("http://localhost:8000/testimoni", formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      goToDashboard();
    } catch (error) {
      console.log(error);
    }
  };

  const getTestimoniById = async () => {
    const response = await axios.get(`http://localhost:8000/testimoni/${id}`);
    setName_Siswa(response.data?.name_siswa);
    setFile(response.data?.file);
    setDeskripsi(response.data?.deskripsi);
    setJudul_Testi(response.data?.judul_testi);
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={updateTestimoni}>
          <div className="field">
            <label className="label">Nama Siswa</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={name_siswa}
                onChange={(e) => setName_Siswa(e.target.value)}
                placeholder="nama siswa"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Judul Testimoni</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={judul_testi}
                onChange={(e) => setJudul_Testi(e.target.value)}
                placeholder="judul testimoni"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Testimoni</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={deskripsi}
                onChange={(e) => setDeskripsi(e.target.value)}
                placeholder="testimoni"
              />
            </div>
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
              <FontAwesomeIcon icon={faRefresh} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditTestimoni;
