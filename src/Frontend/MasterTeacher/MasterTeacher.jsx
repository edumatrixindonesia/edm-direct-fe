import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuoteLeft,
  faStar,
  faUniversity,
} from "@fortawesome/free-solid-svg-icons";
import "./MasterTeacher.css";
import axios from "axios";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
};
// const sliderImageUrl = [
//   {
//     url:
//       "https://i2.wp.com/www.geeksaresexy.net/wp-content/uploads/2020/04/movie1.jpg?resize=600%2C892&ssl=1"
//   },
//   {
//     url:
//       "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-kids-movies-2020-call-of-the-wild-1579042974.jpg?crop=0.9760858955588091xw:1xh;center,top&resize=480:*"
//   },

//   {
//     url:
//       "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-movies-for-kids-2020-sonic-the-hedgehog-1571173983.jpg?crop=0.9871668311944719xw:1xh;center,top&resize=480:*"
//   },

//   {
//     url:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQS82ET2bq9oTNwPOL8gqyoLoLfeqJJJWJmKQ&usqp=CAU"
//   },

//   {
//     url:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTdvuww0JDC7nFRxiFL6yFiAxRJgM-1tvJTxA&usqp=CAU"
//   }
// ];

const MasterTeacher = () => {
  const [guru, setGuru] = useState([]);
  const [thirdPartyGuru, setThirdPartyGuru] = useState([]);

  useEffect(() => {
    fetchGuru();
    fetchThirdParty();
  }, []);

  const fetchGuru = () => {
    fetch("http://localhost:8000/gurus")
      .then((res) => res.json())
      .then((data) => {
        setGuru(data);
        console.log(data);
      });
  };

  const fetchThirdParty = () => {
    fetch("http://localhost:8000/thirdpartyguru/")
      .then((res) => res.json())
      .then((data) => {
        setThirdPartyGuru(data);
        console.log(data);
      });
  };


  return (
    <div className="parent-box-card">
      <h1 className="parent-teks-testi">
        <FontAwesomeIcon className="star-testi" icon={faStar} /> Testimoni Siswa
        Edumatrix Indonesia
      </h1>
      <div className="parent">
        <Carousel
          responsive={responsive}
          autoPlay={false}
          swipeable={true}
          draggable={true}
          showDots={true}
          infinite={true}
          partialVisible={false}
          dotListClass="custom-dot-list-style"
        >
          {guru.map((item, index) => {
            return (
              <div className="slider" key={index}>
                <div className="main-card-mt">
                  {thirdPartyGuru.map((item, index) => (
                    <div key={index}>
                      <img
                        className="img-bg"
                        src={"http://localhost:8000/images/" + item.image}
                        alt=""
                      />
                    </div>
                  ))}
                  <div className="text-mt">
                    <h1 className="judul-mt">{item.topTitle}</h1>
                    <div className="img-and-teks">
                      <img
                        className="child-img-mt"
                        src={"http://localhost:8000/images/" + item.image}
                        alt=""
                      />
                      <div>
                        <h1 className="nama-mt">{item.name}</h1>
                        <h1 className="mapel-mt">{item.deskripsi}</h1>
                      </div>
                    </div>
                    <div className="ratting-star">
                      <img
                        className="star-5"
                        src="https://static.vecteezy.com/system/resources/previews/003/355/389/original/five-5-star-rank-sign-illustration-free-vector.jpg"
                        alt=""
                      />
                      <span>5.0</span>
                    </div>
                    {/* <span className="petik-quot">
                      <FontAwesomeIcon
                        className="icon-quote"
                        icon={faQuoteLeft}
                      />
                    </span> */}
                    <div className="univ-mt">
                      <FontAwesomeIcon icon={faUniversity} />
                      <h1 className="desk-mt">{item.universitas}</h1>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};
export default MasterTeacher;
