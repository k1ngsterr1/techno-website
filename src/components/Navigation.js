import React from "react";

import styles from "../styles/nav-styles/nav.css";

import { Link } from "react-scroll";
import Dropdown from "react-dropdown";
import logo from "../assets/techno_logo.svg";

const Navigation = () => {
  const options = ["Classic", "two", "three"];
  const defaultOption = options[0];

  return (
    <nav className="navigation">
      <img className="logo" src={logo} alt="logo"></img>
      <div className="links">
        <Link className="adaptive link" to="adaptive">
          Adaptive
        </Link>
        <Link className="artificial link" to="adaptive">
          Artificial Intelligence
        </Link>
        <Link className="design link" to="adaptive">
          Design
        </Link>
        <Link className="guidelines link" to="adaptive">
          Guidelines
        </Link>
        <Link className="others link" to="adaptive">
          Others
        </Link>
      </div>
      {/* <Dropdown
        options={options}
        // onChange={this._onSelect}
        value={defaultOption}
        placeholder="Themes"
      /> */}
    </nav>
  );
};

export default Navigation;
