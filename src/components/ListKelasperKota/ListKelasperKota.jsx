import React, { useState, useEffect } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";

const ListKelasperKota = () => {
  const [name, setName] = useState("");
  const [token, setToken] = useState("");
  const [expire, setExpire] = useState("");
  const [users, setUsers] = useState([]);
  const [kelasPerKota, setKelasperKota] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    refreshToken();
    getUsers();
    getKelasperKota();
  }, []);

  const goToLogin = () => {
    navigate("/");
  };

  const goToAddKelasperKota = () => {
    navigate("/addkelasperkota");
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

  const getKelasperKota = async () => {
    const response = await axiosJWT.get("http://localhost:8000/kelasperkota", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setKelasperKota(response.data);
  };

  const deleteKelasperKota = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/kelasperkota/${id}`);
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
                <th>Jenjang Pendidikan</th>
                <th>Jangkauan Kota</th>
                <th>Gambar</th>
                <th>
                  <button
                    className="add-btn"
                    onClick={() => goToAddKelasperKota()}
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                </th>
              </tr>
            </thead>
            <tbody className="parent-map">
              {kelasPerKota.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.jenjang_pendidikan}</td>
                  <td>{item.jangkauan_kota}</td>
                  <td className="parent-img">
                    <img
                      className="img-class"
                      src={"http://localhost:8000/images/" + item.image}
                    />
                  </td>
                  <td>
                    <button
                      className="delete-btn"
                      onClick={() => deleteKelasperKota(item.id)}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                    {/* <button className="edit-btn">
                      <Link to={`/edit-keunggulan/${keunggulan.id}`}><FontAwesomeIcon icon={faEdit} /></Link>
                    </button> */}
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

export default ListKelasperKota;
