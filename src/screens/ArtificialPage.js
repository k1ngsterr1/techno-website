import React from "react";

import styles from "../styles/ai-styles/ai.css";

import Zoom from "react-reveal/Zoom";

import openAI from "../assets/openai_logo.svg";

const AI = () => {
  return (
    <div className="ai-page">
      <Zoom top>
        <div className="container">
          <h2 className="ai-heading">Artificial Intelligence</h2>
          <div className="ai-card">
            <img src={openAI} className="gpt-img" alt="openai_logo"></img>
            <p className="gpt-chat">Chat GPT</p>
            <a
              className="button-link"
              href="https://chat.openai.com/"
              target="_blank"
            >
              Go
            </a>
          </div>
        </div>
      </Zoom>
      <div className="ai-span">ONE DAY I WILL CREATE MY OWN AI</div>
    </div>
  );
};

export default AI;
