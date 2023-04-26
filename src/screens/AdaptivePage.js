import React, { useEffect, useState } from "react";

import styles from "../styles/adaptive-styles/adaptive.css";

import { AiFillCopy } from "react-icons/ai";

import Zoom from "react-reveal/Zoom";

const AdaptivePage = () => {
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  function VwContainer(props) {
    return (
      <div className="vw-container">
        <h3 className="vw-heading">{props.heading}</h3>
        <p className="vw-paragraph">{props.paragraph}</p>
        <input
          className="vw-input"
          onChange={handleChange}
          value={message}
        ></input>
        <div className="result-container">
          <div className="result-container-2">
            <span className="result">{props.result}</span>
            <AiFillCopy className="fill-copy"></AiFillCopy>
          </div>
        </div>
      </div>
    );
  }

  function CalcContainer(props) {
    return (
      <div className="calc-container">
        <h3 className="calc-heading">{props.heading}</h3>
        <p className="calc-paragraph">{props.paragraph}</p>
        <input className="calc-input"></input>
        <p className="calc-paragraph">{props.paragraph_second}</p>
        <input className="calc-input"></input>
        <div className="result-container">
          <div className="result-container-2">
            <span className="result">{props.result}</span>
            <AiFillCopy className="fill-copy"></AiFillCopy>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="adaptive-page">
      <Zoom top>
        <div className="container">
          <h2 className="adaptive-heading">Adaptive</h2>
          <div className="main-content adaptive-container">
            <div className="vw-containers">
              <VwContainer
                heading="Pixels in VW (DESKTOP)"
                paragraph="Convert From px to VW"
                result={`clamp:(${message / 2}px,${message * 0.05208}vw,${
                  message * 2
                }px)`}
              ></VwContainer>
              <VwContainer
                heading="Pixels in VW (PHONE)"
                paragraph="Convert From px to VW"
                result={`clamp:(${message / 2}px,${message * 0.23364}vw,${
                  message * 2
                }px)`}
              ></VwContainer>
            </div>
            <div className="calc-containers">
              <CalcContainer
                heading="Percentage Calculator"
                paragraph="Small Number"
                paragraph_second="Big Number"
                result="RESULT"
              ></CalcContainer>
              <CalcContainer
                heading="Percentage Calculator"
                paragraph="Big Number"
                paragraph_second="Small Number"
                result="RESULT"
              ></CalcContainer>
            </div>
          </div>
        </div>
      </Zoom>
    </div>
  );
};

export default AdaptivePage;
