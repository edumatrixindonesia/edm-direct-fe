import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRefresh } from "@fortawesome/free-solid-svg-icons";

const EditFaq = () => {
  const [pertanyaan, setPertanyaan] = useState("");
  const [jawaban, setJawaban] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getFaqById();
  }, []);

  const goToDashboard = () => {
    navigate("/dashboard/listfaq");
  };

  const updateFaq = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:8000/faq/${id}`, {
        pertanyaan,
        jawaban
      });
      goToDashboard()
    } catch (error) {
      console.log(error);
    }
  };

  const getFaqById = async () => {
    const response = await axios.get(`http://localhost:8000/faq/${id}`);
    setPertanyaan(response.data.pertanyaan);
    setJawaban(response.data.jawaban);
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={updateFaq}>
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
            <FontAwesomeIcon icon={faRefresh} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditFaq;