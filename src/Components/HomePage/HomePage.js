import React, { Component } from "react";
import Header from "../Header/Header";
import FilterProduct from "../FilterProduct/FilterProduct";
import BestSellers from "../BestSellers/BestSellers";
import ProductCategories from "../ProductCategories/ProductCategories";

export default class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentItems: [],
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

  render() {
    return (
      <div>
        <Header />
        <ProductCategories />
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
