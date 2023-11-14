import React, { Component } from "react";

import FilterProduct from "../FilterProduct/FilterProduct";
import BestSellers from "../BestSellers/BestSellers";
import Header from "../../UI/Header/Header.js";

export default class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentItems: [],
      hasError: false,
    };
    this.state.currentItems = this.props.product;
    this.choseCategory = this.choseCategory.bind(this);
    // this.addToOrder = this.addToOrder.bind(this);
  }

  choseCategory(category) {
    if (category === "all") {
      this.setState({ currentItems: this.props.product });
      return;
    }
    console.log(category);
    this.setState({
      currentItems: this.props.product.filter((el) => {
        return el.category === category;
      }),
    });
  }
  componentDidCatch(error, info) {
    console.error("Error caught in Besket component:", error);
    console.error("Component stack trace:", info.componentStack);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <div>Щось пішло не так із компонентом HomePage.</div>;
    }
    return (
      <div>
        <Header />
        {/* <ProductCategories /> */}
        <span className="BestSellersName">Лідери продажів</span>
        <FilterProduct choseCategory={this.choseCategory} />

        <BestSellers
          product={this.state.currentItems}
          addToOrder={this.props.addToOrder}
          infoProducts={this.props.infoProducts}
          infoProduct={this.props.infoProduct}
        />
      </div>
    );
  }
}
