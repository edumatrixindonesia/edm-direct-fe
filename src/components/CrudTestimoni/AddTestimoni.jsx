import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";

const AddTestimoni = () => {
  const [title, setTitle] = useState("");
  const [judul_testi, setjudul_testi] = useState("");
  const [deskripsi, setDeskripsi] = useState("")
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");
  const navigate = useNavigate();

  const goToDashboard = () => {
    navigate("/dashboard/listtestimoni");
  };

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

  const saveTestimoni = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);
    formData.append("deskripsi", deskripsi);
    formData.append("judul_testi", judul_testi)
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

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={saveTestimoni}>
          <div className="field">
            <label className="label">Nama Siswa</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
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
                onChange={(e) => setjudul_testi(e.target.value)}
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
            <FontAwesomeIcon icon={faSave} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTestimoni;
