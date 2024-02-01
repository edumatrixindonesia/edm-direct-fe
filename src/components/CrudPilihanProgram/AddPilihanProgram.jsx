import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AddPilihanProgram = () => {
  const [program_unggulan, setProgram_unggulan] = useState("");
  const [link, setLink] = useState("");
  const navigate = useNavigate();

  const goToDashboard = () => {
    navigate("/dashboard/listpilihanprogram")
  }

  const savePilihanProgram = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/pilihanprogram", {
        program_unggulan,
        link
      })
      goToDashboard();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={savePilihanProgram}>
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
            <FontAwesomeIcon icon={faSave} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPilihanProgram;