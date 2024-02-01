import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AddFiturProgram = () => {
  const [jumlah, setJumlah] = useState("");
  const [isi, setIsi] = useState("");
  const navigate = useNavigate();

  const goToDashboard = () => {
    navigate("/dashboard/listfiturprogram")
  }

  const saveFiturProgram = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/fiturprogram", {
        jumlah,
        isi
      })
      goToDashboard();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={saveFiturProgram}>
          <div className="field">
            <label className="label">Jumlah Program</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={jumlah}
                onChange={(e) => setJumlah(e.target.value)}
                placeholder="jumlah program"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Isi Program</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={isi}
                onChange={(e) => setIsi(e.target.value)}
                placeholder="isi program"
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

export default AddFiturProgram;