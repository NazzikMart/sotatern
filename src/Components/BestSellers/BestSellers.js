import React, { Component } from "react";
import "./BestSellers.css";

export default class BestSellers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toogle: false,
    };

    this.addClass = this.addClass.bind(this);
  }

  addClass(e) {
    this.setState({
      toogle: !this.state.toogle,
    });
    if (this.state.toogle === true) {
      e.target.style.color = "red";
    } else {
      e.target.style.color = "black";
    }
  }

  render() {
    return (
      <div className="BestSellersWrapper">
        <div className="BestSellers">
          {this.props.product.map((item) => {
            return (
              <div
                className="BestCard"
                style={{
                  width: "250px",
                }}
                key={item.id}
              >
                <div className="cardItems">
                  <img
                    src={item.img}
                    style={{
                      height: "200px",
                    }}
                    className="img-card"
                  />
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
                        onClick={this.addClass}
                      ></i>
                    </div>
                  </div>
                  <div className="prices">
                    <span className="item-price">{item.price} &#8372; </span>
                    <span onClick={() => this.props.addToOrder(item)}>
                      <i className="fa-sharp fa-solid fa-cart-shopping"></i>
                    </span>
                  </div>
                  <div className="buttons">
                    <span></span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
