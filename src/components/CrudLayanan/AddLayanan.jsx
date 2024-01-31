import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AddLayanan = () => {
  const [judul_layanan, setJudul_layanan] = useState("");
  const [isi_layanan, setIsi_Layanan] = useState("");
  const navigate = useNavigate();

  const goToDashboard = () => {
    navigate("/dashboard/listlayanan")
  }

  const saveLayanan = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/layanan", {
        judul_layanan,
        isi_layanan
      })
      goToDashboard();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={saveLayanan}>
          <div className="field">
            <label className="label">Layanan</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={judul_layanan}
                onChange={(e) => setJudul_layanan(e.target.value)}
                placeholder="Layanan"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Isi</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={isi_layanan}
                onChange={(e) => setIsi_Layanan(e.target.value)}
                placeholder="Isi"
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

export default AddLayanan;