import React from "react";
import "./ServiceCenter.css";
import remont from "../../../img/icons/remont.png";
import { Link } from "react-router-dom";

export default function ServiceCenter() {
  return (
    <div className="service-center">
      <div className="service-center__content">
        <h1>Ремонт у нас</h1>
        <p>Ремонтуємо вашу техніку швидко та якісно!</p>
        <Link to="/remont" className="service-centet-remont-btn">
          Детальніше
        </Link>
      </div>
      <div className="service-center__img">
        <img src={remont} className="service-center__images" />
      </div>
    </div>
  );
}
