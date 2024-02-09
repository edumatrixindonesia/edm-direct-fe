import React, { useEffect, useState } from "react";
import "./Faq.css";
import { useParams } from "react-router-dom";

const Faq = () => {
  const [faq, setFaq] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchFaq(id)
  }, [id])

  const fetchFaq = () => {
    fetch("http://localhost:8000/faq")
      .then((res) => res.json())
      .then((data) => {
        setFaq(data);
        console.log(data);
      });
  };

  return (
    <React.Fragment>
      <h1 className="text-faq">Frequently Asked Questions</h1>
      {faq.map((item, index) => (
        <div key={index} className="accordion">
          <div className="accordion-item">
            <input type="checkbox" id="accordion1" />
            <label htmlFor="accordion1" className="accordion-item-title">
              <span className="icon" />
              {item.pertanyaan}
            </label>
            <div className="accordion-item-desc">{item.jawaban}</div>
          </div>
        </div>
      ))}
    </React.Fragment>
  );
};

export default Faq;
