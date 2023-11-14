import React, { Component } from "react";
import "./Product.css";

export default class Product extends Component {
  render() {
    return (
      <div>
        {this.props.infoProducts.map((el) => {
          return (
            <div className="element-product-wrapper">
              <div className="element-product-imgs">
                <img className="product-img" src={el.img}></img>
                <div className="product-imgs">
                  <img className="img-product" src={el.img}></img>
                  <img className="img-product" src={el.img}></img>
                  <img className="img-product" src={el.img}></img>
                  <img className="img-product" src={el.img}></img>
                </div>
              </div>
              <div className="element-product-details">
                <div className="element-product-details-name">
                  {el.name} {el.model}
                </div>
                <div className="element-product-details-article">
                  Артикль: <span>{el.id}</span>
                </div>
                <div className="element-product-details-price">
                  Ціна:<span>{el.price} грн </span>
                </div>
                <div className="element-product-details-number">
                  Залишилось <span> 4 товари </span>
                </div>
                <div className="element-product-details-btn">
                  <button
                    className="element-product-details-button"
                    onClick={() => this.props.addToOrder(el)}
                  >
                    <i className="fa-sharp fa-solid fa-cart-shopping"></i> В
                    кошик
                  </button>
                  <button className="item-shop-btn product-one-click-btn">
                    Купити в 1 клік
                  </button>
                </div>
              </div>
            </div>
          );
        })}
        <div className="list-details">
          {this.props.infoProducts.map((el) => {
            return (
              <div className="element-characteristics list-group">
                <span className="element-characteristics-name list-group-item ">
                  Основні характеристики
                </span>
                <div className="element-characteristics-material list-group-item items-details-item">
                  Матеріал :<span>{el.material}</span>
                </div>
                <div className="element-characteristics-producer list-group-item items-details-item">
                  Виробник :<span>{el.producer}</span>
                </div>
                <div className="element-characteristics-diagonal list-group-item items-details-item">
                  {el.detailOne} :<span>{el.volume}</span>
                </div>
                <div className="element-characteristics-diagonal list-group-item items-details-item">
                  {el.detailTwo} :<span>{el.memory}</span>
                </div>
                <div className="element-characteristics-diagonal list-group-item items-details-item">
                  {el.detailThree} :<span>{el.ram}</span>
                </div>
                <div className="element-characteristics-diagonal list-group-item items-details-item">
                  {el.detailFour} :<span>{el.color}</span>
                </div>
                <div className="element-characteristics-type list-group-item items-details-item">
                  Тип :<span>{el.type}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
