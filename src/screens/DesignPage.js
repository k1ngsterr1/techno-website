import React from "react";

import styles from "../styles/design-styles/design.css";

const Design = () => {
  function CardContainer(props) {
    return (
      <div className="card-container">
        <h2 className="card-heading">{props.heading}</h2>
        <a className="card-button" href={props.link} target="_blank">
          Go
        </a>
      </div>
    );
  }

  return (
    <div className="design-page">
      <div className="container">
        <h2 className="design-heading">Design</h2>
        <div className="cards-container">
          <CardContainer heading="fffuel.co" link="https://fffuel.co/" />
          <CardContainer
            heading="coolors.co"
            link="https://coolors.co/50673d"
          />
          <CardContainer
            heading="mycolors.space"
            link="https://mycolor.space/"
          />
        </div>
      </div>
    </div>
  );
};

export default Design;
