import React, { useState, useEffect } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Swal from "sweetalert2";
import { faEdit, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import "./ListWa.css";

const ListFiturProgram = () => {
  const [name, setName] = useState("");
  const [token, setToken] = useState("");
  const [expire, setExpire] = useState("");
  const [users, setUsers] = useState([]);
  const [fiturProgram, setFiturProgram] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    refreshToken();
    getUsers();
    getFiturProgram();
  }, []);

  const goToLogin = () => {
    navigate("/");
  };

  const goToAddFiturProgram = () => {
    navigate("/addfiturprogram");
  };

  // const gotoEditContact = () => {
  //   navigate(`edit/${user.id}`)
  // }

  const refreshToken = async () => {
    try {
      const response = await axios.get("http://localhost:8000/token");
      setToken(response.data.accessToken);
      const decode = jwtDecode(response.data.accessToken);
      setName(decode.name);
      setExpire(decode.exp);
    } catch (error) {
      if (error.response) {
        goToLogin();
      }
    }
  };

  const axiosJWT = axios.create();

  axiosJWT.axios?.interceptors.request.use(
    async (config) => {
      const currentDate = new Date();
      if (expire * 1000 < currentDate.getTime()) {
        const response = await axios.get("http://localhost:8000/token");
        config.headers.Authorization = `Bearer ${response.data.accessToken}`;
        setToken(response.data.accessToken);
        const decode = jwtDecode(response.data.accessToken);
        setName(decode.name);
        setExpire(decode.exp);
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  const getUsers = async () => {
    const response = await axiosJWT.get("http://localhost:8000/users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setUsers(response.data);
  };

  const getFiturProgram = async () => {
    const response = await axiosJWT.get("http://localhost:8000/fiturprogram", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setFiturProgram(response.data);
  };

  const deleteFiturProgram = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/fiturprogram/${id}`);
    } catch (error) {
      console.log(error);
    }
    Swal.fire({
      title: "Data Berhasil di Hapus",
      icon: "success",
    }).then((result) => {
      // Reload the Page
      location.reload();
    });
  };

  return (
    <React.Fragment>
      <Navbar />
      <div className="padding-table">
        <div>
          Welocome Back <b>{name}</b>
        </div>
        <button onClick={getUsers} className="button is-info">
          Get Users
        </button>
        <br />
        <br />
        <div style={{ overflowX: "auto" }}>
          <table className="table is-striped is-fullwidth">
            <thead>
              <tr>
                <th>No</th>
                <th>Jumlah</th>
                <th>Isi</th>
                <th>
                  <button className="add-btn" onClick={() => goToAddFiturProgram()}>
                  <FontAwesomeIcon icon={faPlus} />
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
              {fiturProgram.map((fiturProgram, index) => (
                <tr key={fiturProgram.id}>
                  <td>{index + 1}</td>
                  <td>{fiturProgram.jumlah}</td>
                  <td>{fiturProgram.isi}</td>
                  <td>
                    <button
                      className="delete-btn"
                      onClick={() => deleteFiturProgram(fiturProgram.id)}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                    <button className="edit-btn">
                      <Link to={`/edit-fiturprogram/${fiturProgram.id}`}><FontAwesomeIcon icon={faEdit} /></Link>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ListFiturProgram;
