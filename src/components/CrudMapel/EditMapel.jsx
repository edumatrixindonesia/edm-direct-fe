import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRefresh } from "@fortawesome/free-solid-svg-icons";

const EditMapel = () => {
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getMapelById();
  }, []);

  const goToDashboard = () => {
    navigate("/dashboard/listmapel");
  };

  const updateMapel = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:8000/matapelajaran/${id}`, {
        name,
        slug
      });
      goToDashboard()
    } catch (error) {
      console.log(error);
    }
  };

  const getMapelById = async () => {
    const response = await axios.get(`http://localhost:8000/matapelajaran/${id}`);
    setName(response.data.name);
    setSlug(response.data.slug);
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={updateMapel}>
          <div className="field">
            <label className="label">Mata Pelajaran</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Mata pelajaran"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Slug</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                placeholder="Slug"
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

export default EditMapel;