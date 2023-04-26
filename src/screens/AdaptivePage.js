import React from "react";

import styles from "../styles/adaptive-styles/adaptive.css";

import { AiFillCopy } from "react-icons/ai";

const AdaptivePage = () => {
  function VwContainer(props) {
    return (
      <div className="vw-container">
        <h3 className="vw-heading">{props.heading}</h3>
        <p className="vw-paragraph">{props.paragraph}</p>
        <input className="vw-input"></input>
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
      <div className="container">
        <h2 className="adaptive-heading">Adaptive</h2>
        <div className="main-content adaptive-container">
          <VwContainer
            heading="Pixels in VW (DESKTOP)"
            paragraph="Convert From px to VW"
            result="RESULT"
          ></VwContainer>
        </div>
      </div>
    </div>
  );
};

export default AdaptivePage;
