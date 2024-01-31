import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRefresh } from "@fortawesome/free-solid-svg-icons";

const EditContact = () => {
  const [name, setName] = useState("");
  const [nomorHP, setNomorHP] = useState("");
  const [nomorWA, setNomorWA] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getUserById();
  }, []);

  const goToDashboard = () => {
    navigate("/dashboard/listreservasi");
  };

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:8000/reservasis/${id}`, {
        name,
        nomorHP,
        nomorWA
      });
      goToDashboard()
    } catch (error) {
      console.log(error);
    }
  };

  const getUserById = async () => {
    const response = await axios.get(`http://localhost:8000/reservasis/${id}`);
    setName(response.data?.name);
    setNomorHP(response.data?.nomorHP);
    setNomorWA(response.data?.nomorWA);
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={updateUser}>
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
                placeholder="Nomor"
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
                placeholder="Nomor"
              />
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

export default EditContact;