import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { faRefresh, faSave } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// THE EDIT FEATURE EXPERIENCED AN ERROR!!

const EditSekolah = () => {
  const [name, setName] = useState("");
  const [file, setFile] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getKeunggulanById();
  }, []);

  const goToDashboard = () => {
    navigate("/dashboard/listsekolah");
  };

  const updateSekolah = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", name);
    try {
      await axios.post("http://localhost:8000/asalsekolah", formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      goToDashboard();
    } catch (error) {
      console.log(error);
    }
  };

  const getKeunggulanById = async () => {
    const response = await axios.get(`http://localhost:8000/asalsekolah/${id}`);
    setName(response.data?.name);
    setFile(response.data?.file);
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={updateSekolah}>
          <div className="field">
            <label className="label">Sekolah</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={name}
                onChange={(e) => setSlug(e.target.value)}
                placeholder="sekolah"
              />
            </div>
          </div>
          {/* <div className="field">
            <label className="label">Gender</label>
            <div className="control">
              <div className="select is-fullwidth">
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
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

export default EditSekolah;
