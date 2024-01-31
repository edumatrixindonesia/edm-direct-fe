import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { faRefresh } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const EditOffice = () => {
  const [judul_office, setJudul_office] = useState("");
  const [isi_office, setIsi_office] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getOfficeById();
  }, []);

  const goToDashboard = () => {
    navigate("/dashboard/listoffice");
  };

  const updateOffice = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:8000/office/${id}`, {
        judul_office,
        isi_office
      });
      goToDashboard()
    } catch (error) {
      console.log(error);
    }
  };

  const getOfficeById = async () => {
    const response = await axios.get(`http://localhost:8000/office/${id}`);
    setJudul_office(response.data.judul_office);
    setIsi_office(response.data.isi_office);
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={updateOffice}>
          <div className="field">
            <label className="label">Kantor</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={judul_office}
                onChange={(e) => setJudul_office(e.target.value)}
                placeholder="office"
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

export default EditOffice;