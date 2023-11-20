import React, { Component } from "react";
import "./BestSellers.css";
import { Link } from "react-router-dom";
import "../../media.css";
import Card from "../Card/Card";

export default class BestSellers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toogle: false,
      hasError: false,
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
  componentDidCatch(error, info) {
    console.error("Error caught in Besket component:", error);
    console.error("Component stack trace:", info.componentStack);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <div>Щось пішло не так із компонентом "Бестселери".</div>;
    }
    return (
      <div className="BestSellersWrapper">
        <div className="BestSellers">
          <Card
            product={this.props.product}
            addToOrder={this.props.addToOrder}
            infoProduct={this.props.infoProduct}
            infoProducts={this.props.infoProducts}
          />
        </div>
      </div>
    );
  }
}
