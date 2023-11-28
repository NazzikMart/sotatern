import React from "react";
import "./ServiceCenter.css";
import remont from "../../../img/icons/remont.png";

export default function ServiceCenter() {
  return (
    <div className="service-center">
      <div className="service-center__content">
        <h1>Ремонт у нас</h1>
        <p>Ремонтуємо вашу техніку швидко та якісно!</p>
        <button>Детальніше</button>
      </div>
      <div className="service-center__img">
        <img src={remont} />
      </div>
    </div>
  );
}
