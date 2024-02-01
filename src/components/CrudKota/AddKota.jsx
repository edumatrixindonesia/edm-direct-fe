import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";

const AddKota = () => {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");
  const navigate = useNavigate();

  const goToDashboard = () => {
    navigate("/dashboard/listkota");
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

  const saveKota = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);
    formData.append("slug", slug);
    try {
      await axios.post("http://localhost:8000/kota", formData, {
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
        <form onSubmit={saveKota}>
          <div className="field">
            <label className="label">Kota</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="kota"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Slug</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                placeholder="slug"
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

export default AddKota;
