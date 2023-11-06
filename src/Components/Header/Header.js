import React, { Component } from "react";
import "./Header.css";

import rb2 from "../../img/Samsung-Galaxy-A04s-Desgin.jpg";
import rb3 from "../../img/Xiaomi-Poco-C40-hp.jpg";
import a04s from "../../img/images.jpg";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={a04s} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Робот-пилосос SILVERCREST SSRA1 (7258)</h5>
              </div>
            </div>
            <div className="carousel-item">
              <img src={rb2} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Galaxy A04s</h5>
              </div>
            </div>
            <div className="carousel-item">
              <img src={rb3} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>POCO C40 4/64GB Power Black</h5>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}
