import React, { Component } from "react";
import FilterProduct from "../FilterProduct/FilterProduct";
import BestSellers from "../BestSellers/BestSellers";
import Header from "../../UI/Header/Header.js";
import "../../media.css";
import ServiceCenter from "../../UI/ServiceCenter/ServiceCenter.js";
import "./HomePage.css";
import ip1 from '../../../img/ip1.jpg'
import ip2 from '../../../img/ip2.jpg'
import ip3 from '../../../img/ip13.jpg'
import ip4 from '../../../img/ip4.jpg'

export default class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentItems: [],
      hasError: false,
    };
    this.state.currentItems = this.props.product;
    this.choseCategory = this.choseCategory.bind(this);
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
      <div className="homepage-wrapper">
        <Header />

        <ServiceCenter />
        <span className="BestSellersName">Лідери продажів</span>
        <FilterProduct choseCategory={this.choseCategory} />

        <BestSellers
          product={this.state.currentItems}
          addToOrder={this.props.addToOrder}
          infoProducts={this.props.infoProducts}
          infoProduct={this.props.infoProduct}
        />
  <div class="product">
        <div class="product-title">
            ОБИРИ НОВИЙ ГАДЖЕТ
        </div>

        <div class="product-items">
            <div class="product-item">
                <div class="product-item__img">
                    <img class="product-item__images" src={ip1} alt="" />
                </div>
                <div class="product-item__name">
                    Gold
                </div>
                <div class="product-item__desc">
                    Золотий
                </div>
            </div>
            <div class="product-item">
                <div class="product-item__img">
                    <img class="product-item__images" src={ip2} alt="" />
                </div>
                <div class="product-item__name">
                    Black
                </div>
                <div class="product-item__desc">
                    Чорний
                </div>
            </div>
            <div class="product-item">
                <div class="product-item__img">
                    <img class="product-item__images" src={ip3} alt="" />
                </div>
                <div class="product-item__name">
                    Silver
                </div>
                <div class="product-item__desc">
                    Сріблястий
                </div>
            </div>
            <div class="product-item">
                <div class="product-item__img">
                    <img class="product-item__images" src={ip3} alt="" />
                </div>
                <div class="product-item__name">
                    Silver
                </div>
                <div class="product-item__desc">
                    Сріблястий
                </div>
            </div>
        </div>
      </div>
      <button className="btn-shop-ip">Замовити</button>
      </div>
    );
  }
}
