import React, { Component } from "react";
import "./ServiceAndService.css";

export default class ServiceAndService extends Component {
  render() {
    return (
      <div>
        <div className="services-product">
          <div className="services-product-name">Сервіси та послуги</div>
          <div className="services-product-items">
            {this.props.services.map((el) => {
              return (
                <div className="services-product-item">
                  <i class={el.iconClass}></i>
                  <p>{el.name}</p>
                  <span>{el.description}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
