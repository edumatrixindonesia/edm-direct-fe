import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRefresh } from "@fortawesome/free-solid-svg-icons";

const EditPilihanProgram = () => {
  const [program_unggulan, setProgram_unggulan] = useState("");
  const [link, setLink] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getPilihanProgramById();
  }, []);

  const goToDashboard = () => {
    navigate("/dashboard/listpilihanprogram");
  };

  const updatePilihanProgram = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:8000/pilihanprogram/${id}`, {
        program_unggulan,
        link
      });
      goToDashboard()
    } catch (error) {
      console.log(error);
    }
  };

  const getPilihanProgramById = async () => {
    const response = await axios.get(`http://localhost:8000/pilihanprogram/${id}`);
    setProgram_unggulan(response.data.program_unggulan);
    setLink(response.data.link);
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={updatePilihanProgram}>
          <div className="field">
            <label className="label">Program</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={program_unggulan}
                onChange={(e) => setProgram_unggulan(e.target.value)}
                placeholder="program"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Link</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={link}
                onChange={(e) => setLink(e.target.value)}
                placeholder="link"
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

export default EditPilihanProgram;