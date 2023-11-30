import React, { Component } from "react";
import FilterProduct from "../FilterProduct/FilterProduct";
import BestSellers from "../BestSellers/BestSellers";
import Header from "../../UI/Header/Header.js";
import "../../media.css";
import ServiceCenter from "../../UI/ServiceCenter/ServiceCenter.js";
import "./HomePage.css";

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

        <p className="desc-shop-sota">
          "Студія техніки 'Сота' — ваш найкращий вибір для якісної та передової
          кухонної техніки. Наш магазин пропонує широкий асортимент продукції
          від провідних світових виробників, щоб забезпечити вашу кухню
          найсучаснішим та надійним обладнанням. <br />
          <br />У нашому асортименті ви знайдете інноваційні кухонні прилади,
          які роблять процес готування легким та приємним. Від кавоварок та
          мультиварок до соковитисків та блендерів — ми маємо все для того, щоб
          ваша кухня стала справжнім центром гастрономії. <br />
          <br /> Наша команда працює тільки з надійними постачальниками,
          гарантуючи вам якість та довговічність кожного товару. Ми прагнемо
          забезпечити клієнтів найнижчими цінами на ринку, роблячи техніку
          доступною для всіх шанувальників кулінарії. <br /> <br />
          Обирайте 'Сота' для того, щоб перетворити вашу кухню на місце, де
          вирує справжнє кулінарне мистецтво. З нами ви отримаєте якість,
          інновації та найкращі ціни — бо ваш комфорт та задоволення є нашим
          пріоритетом."
        </p>
      </div>
    );
  }
}
