import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRefresh } from "@fortawesome/free-solid-svg-icons";

const EditProgram = () => {
  const [judul_program, setJudul_program] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getProgramById()
  }, []);

  const goToDashboard = () => {
    navigate("/dashboard/listprogram");
  };

  const updateProgram = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:8000/program/${id}`, {
        judul_program
      });
      goToDashboard()
    } catch (error) {
      console.log(error);
    }
  };

  const getProgramById = async () => {
    const response = await axios.get(`http://localhost:8000/program/${id}`);
    setJudul_program(response.data.judul_program);
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={updateProgram}>
          <div className="field">
            <label className="label">Program</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={judul_program}
                onChange={(e) => setJudul_program(e.target.value)}
                placeholder="Program"
              />
            </div>
          </div>
          {/* <div className="field">
            <label className="label">Nomor</label>
            <div className="control">
              <input
                type="number"
                className="input"
                value={nomor}
                onChange={(e) => setNomor(e.target.value)}
                placeholder="Nomor"
              />
            </div>
          </div> */}
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

export default EditProgram;