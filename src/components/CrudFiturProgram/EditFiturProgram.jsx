import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRefresh } from "@fortawesome/free-solid-svg-icons";

const EditFiturProgram = () => {
  const [jumlah, setJumlah] = useState("");
  const [isi, setIsi] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getFiturProgramById();
  }, []);

  const goToDashboard = () => {
    navigate("/dashboard/listfiturprogram");
  };

  const updateFiturProgram = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:8000/fiturprogram/${id}`, {
        jumlah,
        isi,
      });
      goToDashboard();
    } catch (error) {
      console.log(error);
    }
  };

  const getFiturProgramById = async () => {
    const response = await axios.get(
      `http://localhost:8000/fiturprogram/${id}`
    );
    setJumlah(response.data.jumlah);
    setIsi(response.data.isi);
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={updateFiturProgram}>
          <div className="field">
            <label className="label">Jumlah Program</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={jumlah}
                onChange={(e) => setJumlah(e.target.value)}
                placeholder="program"
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
              <FontAwesomeIcon icon={faRefresh} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditFiturProgram;
