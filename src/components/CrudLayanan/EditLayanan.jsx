import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRefresh } from "@fortawesome/free-solid-svg-icons";

const EditLayanan = () => {
  const [judul_layanan, setJudul_layanan] = useState("");
  const [isi_layanan, setIsi_Layanan] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getLayananById();
  }, []);

  const goToDashboard = () => {
    navigate("/dashboard/listlayanan");
  };

  const updateLayanan = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:8000/layanan/${id}`, {
        judul_layanan,
        isi_layanan
      });
      goToDashboard()
    } catch (error) {
      console.log(error);
    }
  };

  const getLayananById = async () => {
    const response = await axios.get(`http://localhost:8000/layanan/${id}`);
    setJudul_layanan(response.data.judul_layanan);
    setIsi_Layanan(response.data.isi_layanan);
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={updateLayanan}>
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
            <FontAwesomeIcon icon={faRefresh} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditLayanan;