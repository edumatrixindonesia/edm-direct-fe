import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";

const AddReservasi = () => {
  const [name, setName] = useState("");
  const [nomorHP, setNomorHP] = useState("");
  const [nomorWA, setNomorWA] = useState("");
  const navigate = useNavigate();

  const goToDashboard = () => {
    navigate("/dashboard/listreservasi");
  };

  const saveContact = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/reservasis", {
        name,
        nomorHP,
        nomorWA,
      });
      goToDashboard();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={saveContact}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Nomor HP</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={nomorHP}
                onChange={(e) => setNomorHP(e.target.value)}
                placeholder="Nomor hp"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Nomor WA</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={nomorWA}
                onChange={(e) => setNomorWA(e.target.value)}
                placeholder="Nomor wa"
              />
            </div>
          </div>
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

export default AddReservasi;
