import React from "react";
import Navigation from "../components/Navigation";

import styles from "../styles/main-styles/main.css";

import Typewriter from "typewriter-effect";

import Zoom from "react-reveal/Zoom";

import effect from "../assets/effect.png";

const MainPage = () => {
  return (
    <div className="main-page">
      <Zoom top>
        <div className="container">
          <Navigation />
          <main className="main-content">
            <h1 className="main-heading">
              welcome to the <span className="techno">techno</span> website
            </h1>
            <p className="main-paragraph">
              <Typewriter
                options={{
                  strings: [
                    "This website was created in order to help developers to create their projects faster, comfortable and useful.  There are a lot of different tools which might be helpful for web-design and frontend development. Enjoy staying here and be <span>productive.</span>",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 55,
                  pauseFor: 9999999999,
                }}
              />
            </p>
            <button className="tools-button">Tools</button>
          </main>
        </div>
        <img className="effect" src={effect} alt="effect"></img>
      </Zoom>
    </div>
  );
};

export default MainPage;
