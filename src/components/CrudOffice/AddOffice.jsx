import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";

const AddOffice = () => {
  const [judul_office, setJudul_office] = useState("");
  const [isi_office, setIsi_office] = useState("");
  const navigate = useNavigate();

  const goToDashboard = () => {
    navigate("/dashboard/listoffice")
  }

  const saveOffice = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/office", {
        judul_office,
        isi_office
      })
      goToDashboard();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={saveOffice}>
          <div className="field">
            <label className="label">Kantor</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={judul_office}
                onChange={(e) => setJudul_office(e.target.value)}
                placeholder="kantor"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Alamat</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={isi_office}
                onChange={(e) => setIsi_office(e.target.value)}
                placeholder="alamat"
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
            <button type="submit" className="button is-success">
            <FontAwesomeIcon icon={faSave} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddOffice;