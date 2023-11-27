import React, { Component } from "react";
import "./Card.css";
import { Link } from "react-router-dom";

export default class Card extends Component {
  render() {
    return (
      <div className="product-catalog-items">
        {this.props.searchTerm !== ""
          ? this.props.searchResults.map((item) => {
              return (
                <div className="BestCard newBestCard" key={item.id}>
                  <div className="cardItems">
                    <img src={item.img} className="img-card" />
                    <span className="item-name">{item.name}</span>
                    <span className="item-model">{item.model}</span>
                    <div className="rating">
                      <div className="stars">
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                      </div>
                      <div className="heart">
                        <i
                          className="fa-sharp fa-solid fa-heart"
                          onClick={this.props.addClass}
                        ></i>
                      </div>
                    </div>
                    <div className="prices">
                      <span className="item-price">{item.price} &#8372; </span>
                      <span className="item-availability">В наявності 4</span>
                    </div>
                    <div className="buttons">
                      <button
                        className="item-besket-btn"
                        onClick={() => this.props.addToOrder(item)}
                      >
                        <span>
                          <i className="fa-sharp fa-solid fa-cart-shopping"></i>
                          В корзину
                        </span>
                      </button>
                      <button className="item-shop-btn">Купити в 1 клік</button>
                    </div>
                    <Link
                      to="/product"
                      className="product-details-btn"
                      onClick={() => this.props.infoProduct(item)}
                    >
                      Більш про товар
                    </Link>
                  </div>
                </div>
              );
            })
          : this.props.currentItems.map((item) => {
              return (
                <div className="BestCard" key={item.id}>
                  <div className="cardItems">
                    <img src={item.img} className="img-card" />
                    <span className="item-name">{item.name}</span>
                    <span className="item-model">{item.model}</span>
                    <div className="rating">
                      <div className="stars">
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                      </div>
                      <div className="heart">
                        <i
                          className="fa-sharp fa-solid fa-heart"
                          onClick={this.props.addClass}
                        ></i>
                      </div>
                    </div>
                    <div className="prices">
                      <span className="item-price">{item.price} &#8372; </span>
                      <span className="item-availability">В наявності 4</span>
                    </div>
                    <div className="buttons">
                      <button
                        className="item-besket-btn"
                        onClick={() => this.props.addToOrder(item)}
                      >
                        <span>
                          <i className="fa-sharp fa-solid fa-cart-shopping"></i>
                          В корзину
                        </span>
                      </button>
                      <button className="item-shop-btn">Купити в 1 клік</button>
                    </div>
                    <Link
                      to="/product"
                      className="product-details-btn"
                      onClick={() => this.props.infoProduct(item)}
                    >
                      Більш про товар
                    </Link>
                  </div>
                </div>
              );
            })}
      </div>
    );
  }
}
