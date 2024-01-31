import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AddFaq = () => {
  const [pertanyaan, setPertanyaan] = useState("");
  const [jawaban, setJawaban] = useState("");
  const navigate = useNavigate();

  const goToDashboard = () => {
    navigate("/dashboard/listfaq")
  }

  const saveFaq = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/faq", {
        pertanyaan,
        jawaban
      })
      goToDashboard();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={saveFaq}>
          <div className="field">
            <label className="label">Pertanyaan</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={pertanyaan}
                onChange={(e) => setPertanyaan(e.target.value)}
                placeholder="pertanyaan"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Jawaban</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={jawaban}
                onChange={(e) => setJawaban(e.target.value)}
                placeholder="jawaban"
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

export default AddFaq;