// import React from 'react'
// import "./Testimoni.css"

// const Testimoni = () => {
//   return (
//     <React.Fragment>
//     <div className="parent-box-card">

//     </div>
//     </React.Fragment>
//   )
// }

// export default Testimoni

import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Testimoni.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faStar, faUniversity } from "@fortawesome/free-solid-svg-icons";

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

const Slider = () => {
  const [testimoni, setTestimoni] = useState([]);

  useEffect(() => {
    fetchTestimoni();
  }, []);

  const fetchTestimoni = () => {
    fetch("http://localhost:8000/testimoni")
      .then((res) => res.json())
      .then((data) => {
        setTestimoni(data);
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
          {testimoni.map((item, index) => {
            return (
              <div className="slider" key={index}>
                <div className="main-card-testi">
                  <img
                    className="img-slider"
                    src={"http://localhost:8000/images/" + item.image}
                    alt=""
                  />
                  <h1>{item.name_siswa}</h1>
                  <h1 className="judul-testimoni">{item.judul_testi}</h1>
                  <img className="star-5" src="https://static.vecteezy.com/system/resources/previews/003/355/389/original/five-5-star-rank-sign-illustration-free-vector.jpg" alt="" />
                  <span className="petik-quot"><FontAwesomeIcon className="icon-quote" icon={faQuoteLeft} /></span>
                  <h1 className="desk-testi">{item.deskripsi}</h1>
                </div>

                {/* --------- */}

                {/* <div className="parent-main-card">
                <div className="bg-judul-testi">
                  <span className="petik-quot">
                    <FontAwesomeIcon
                      className="icon-quote"
                      icon={faUniversity}
                    />
                  </span>
                  <h1 className="desk-testi">{item.judul_testi}</h1>
                </div>
                <div className="main-card-testi">
                  <img
                    src={"http://localhost:8000/images/" + item.image}
                    alt=""
                  />
                </div>
                <div className="bg-testimoni">
                  <span className="petik-quot">
                    <FontAwesomeIcon
                      className="icon-quote"
                      icon={faQuoteLeft}
                    />
                  </span>
                  <h1 className="desk-testi">{item.deskripsi}</h1>
                </div>
                </div> */}
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};
export default Slider;
