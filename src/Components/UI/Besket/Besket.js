import React, { Component } from "react";
import "./Besket.css";
import { Link } from "react-router-dom";

export default class Besket extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      hasError: false,
    };
  }

  incrementCounter = (productId, price) => {
    const updatedOrders = this.props.orders.map((order) => {
      if (order.id === productId) {
        const newCounter = order.counter + 1;
        if (newCounter >= 1) {
          return { ...order, counter: newCounter };
        }
      }
      return order;
    });

    const totalCost = updatedOrders.reduce((accumulator, order) => {
      return accumulator + order.price * order.counter;
    }, 0);

    this.props.updateOrders(updatedOrders, totalCost);
  };

  decrementCounter = (productId, price) => {
    const updatedOrders = this.props.orders.map((order) => {
      if (order.id === productId) {
        const newCounter = order.counter - 1;
        if (newCounter >= 1) {
          return { ...order, counter: newCounter };
        } else {
          return null;
        }
      }
      return order;
    });

    const filteredOrders = updatedOrders.filter((order) => order !== null);

    const totalCost = filteredOrders.reduce((accumulator, order) => {
      return accumulator + order.price * order.counter;
    }, 0);

    this.props.updateOrders(filteredOrders, totalCost);
  };
  componentDidCatch(error, info) {
    console.error("Error caught in Besket component:", error);
    console.error("Component stack trace:", info.componentStack);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <div>Щось пішло не так із компонентом Besket.</div>;
    }
    console.log(this.props.orders);
    return (
      <div className="beskett">
        <span className="besket-name">Кошик з товарами</span>

        <div className="filterr">
          <span className="filter-item">Назва</span>
          <span className="filter-item">Кількість</span>
          <span className="filter-item">Вартість</span>
        </div>

        {this.props.orders.map((item) => {
          return (
            <div className="besket-products">
              <div className="besket-product" key={item.id}>
                <div className="besket-product-names">
                  <img src={item.img} className="besket-product-img" />
                  <span className="besket-product-name">{item.name}</span>
                </div>

                <div className="besket-count">
                  <span className="besket-count-item">{item.counter}</span>
                  <div className="besket-counter">
                    <span
                      className="besket-counter-plus"
                      onClick={() => this.incrementCounter(item.id)}
                    >
                      +
                    </span>
                    <span
                      className="besket-counter-minus"
                      onClick={() => this.decrementCounter(item.id)}
                    >
                      -
                    </span>
                  </div>
                </div>
                <div className="besket-price">{item.price} грн</div>
                <div
                  className="delete-product"
                  onClick={() => this.props.removeProduct(item.id)}
                >
                  <i className="fa-solid fa-trash"></i>
                </div>
              </div>
            </div>
          );
        })}
        <div className="all-price">
          <span className="all-price-text"> Загальна сума : </span>
          <span className="all-price-total">{this.props.totalCost} грн</span>
        </div>
        <div className="order-product-besket-btn">
          <Link to="/purchase" className="order-product-besket-button">
            Замовити
          </Link>
        </div>
      </div>
    );
  }
}
