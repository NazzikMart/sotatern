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
        <div className="list-details"></div>
      </div>
    );
  }
}
