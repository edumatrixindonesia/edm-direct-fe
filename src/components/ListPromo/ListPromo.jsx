import React, { useState, useEffect } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";

const ListPromo = () => {
  const [name, setName] = useState("");
  const [token, setToken] = useState("");
  const [expire, setExpire] = useState("");
  const [users, setUsers] = useState([]);
  const [promo, setPromo] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    refreshToken();
    getUsers();
    getPromo();
  }, []);

  const goToLogin = () => {
    navigate("/");
  };

  const goToAddPromo = () => {
    navigate("/addpromo");
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

  const getPromo = async () => {
    const response = await axiosJWT.get("http://localhost:8000/promo", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setPromo(response.data);
  };

  const deletePromo = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/promo/${id}`);
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
                <th>Gambar</th>
                <th>
                  <button className="add-btn" onClick={() => goToAddPromo()}>
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                </th>
              </tr>
            </thead>
            <tbody className="parent-map">
              {promo.map((promo, index) => (
                <tr key={promo.id}>
                  <td>{index + 1}</td>
                  <td className="parent-img"><img className="img-class" src={"http://localhost:8000/images/" + promo.image} /></td>
                  <td>
                    <button
                      className="delete-btn"
                      onClick={() => deletePromo(promo.id)}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                    <button className="edit-btn">
                      <Link to={`/edit-promo/${promo.id}`}><FontAwesomeIcon icon={faEdit} /></Link>
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

export default ListPromo;
