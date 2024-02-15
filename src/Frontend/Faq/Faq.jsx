import React, { useEffect, useState } from "react";
import "./Faq.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion, faQuestion, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

const Faq = () => {
  // const [faq, setFaq] = useState([]);
  // const [selectFaq, setSelectFaq] = useState(null);

  // useEffect(() => {
  //   fetchFaq();
  // }, []);

  // const handleFaq = (index) => {
  //   if (selectFaq === index) {
  //     setSelectFaq(null);
  //   } else {
  //     setSelectFaq(index);
  //   }
  // };

  // const fetchFaq = () => {
  //   fetch("http://localhost:8000/faq")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setFaq(data);
  //       console.log(data);
  //     });
  // };

  const [faqData, setFaqData] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  useEffect(() => {
    const fetchFaq = () => {
      fetch("http://localhost:8000/faq")
        .then((res) => res.json())
        .then((data) => {
          setFaqData(data);
          console.log(data);
        });
    };
    fetchFaq();
  }, []);

  const toggleQuestion = (index) => {
    if (selectedQuestion === index) {
      setSelectedQuestion(null);
    } else {
      setSelectedQuestion(index);
    }
  };

  return (
    <React.Fragment>
      <h1 className="text-faq">Frequently Asked Questions</h1>
      <div className="garis-faq">
        <hr className="child-garis-faq" />
        <span><FontAwesomeIcon icon={faCircleQuestion} /></span>
        <hr className="child-garis-faq"/>
      </div>
      {/* {faq.map((item, index) => (
        <div key={index} className="accordion">
          <div className="accordion-item">
            <input type="checkbox" id="accordion1" />
            <label
              htmlFor="accordion1"
              className={`accordion-item-title ${
                selectFaq === index ? "active" : ""
              }`}
              onClick={() => handleFaq(index)}
            >
              <span className="icon" />
              {item.pertanyaan}
            </label>
            <div className={`accordion-faq-desc ${selectFaq === index ? 'open' : 'closed'}`}>{item.jawaban}</div>
          </div>
        </div>
      ))} */}

      <div className="faq-accordion">
        {faqData.map((question, index) => (
          <div className="parent-all-accordion">
            <div
              key={index}
              className={`question ${
                selectedQuestion === index ? "active" : ""
              }`}
              onClick={() => toggleQuestion(index)}
            >
              <p>{question.pertanyaan}</p>
              <span className="material-symbols-outlined">
                {selectedQuestion === index ? "-" : "+"}
              </span>
            </div>
            <div
              className={`answer ${
                selectedQuestion === index ? "open" : "closed"
              }`}
            >
              <hr className="line-faq" />
              <p>{question.jawaban}</p>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Faq;
