import React from "react";
import "./logoicons.css";
import Frame from "../../../assets/icons/Frame.svg";
import Frame2 from "../../../assets/icons/Frame2.svg";
import Frame3 from "../../../assets/icons/Frame3.svg";
import Frame4 from "../../../assets/icons/Frame4.svg";
import Frame5 from "../../../assets/icons/Frame5.svg";
import Frame6 from "../../../assets/icons/Frame6.svg";

function Logoicons() {
  return (
    <nav className="container-logos-icons">
      <ul className="container-logos-list">
        <li className="container-logos-item">
          <a href="#">
            <img src={Frame} alt="icon" />
          </a>
        </li>
        <li className="container-logos-item">
          <a href="#">
            <img src={Frame2} alt="icon" />
          </a>
        </li>
        <li className="container-logos-item">
          <a href="#">
            <img src={Frame3} alt="icon" />
          </a>
        </li>
        <li className="container-logos-item">
          <a href="#">
            <img src={Frame4} alt="icon" />
          </a>
        </li>
        <li className="container-logos-item">
          <a href="#">
            <img src={Frame5} alt="icon" />
          </a>
        </li>
        <li className="container-logos-item">
          <a href="#">
            <img src={Frame6} alt="icon" />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Logoicons;