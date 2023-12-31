import React, { Component } from "react";
import "./ProductCategories.css";

export default class ProductCategories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categoryList: [
        {
          name: "Телевізори",
          key: "tv",
          number: 4,
          class: "fa-solid fa-tv product-categories-ico",
        },
        {
          name: "Телефони",
          key: "phone",
          number: 4,
          class: "fa-solid fa-phone product-categories-ico",
        },
        {
          name: "Планшети",
          key: "tablet",
          number: 4,
          class: "fa-solid fa-tablet product-categories-ico",
        },
        {
          name: "Кавоварки",
          key: "coffeeMaker",
          number: 4,
          class: "fa-solid fa-mug-hot product-categories-ico",
        },
        {
          name: "Ваги",
          key: "coffeeMaker",
          number: 4,
          class: "fa-solid fa-scale-balanced product-categories-ico",
        },
      ],
      hasError: false,
    };
  }
  componentDidCatch(error, info) {
    console.error("Error caught in Besket component:", error);
    console.error("Component stack trace:", info.componentStack);
    this.setState({ hasError: true });
  }
  render() {
    if (this.state.hasError) {
      return <div>Щось пішло не так із компонентом ProductCategories.</div>;
    }
    return (
      <div className="product-categories-wrapper">
        {this.state.categoryList.map((el) => {
          return (
            <div className="product-categories-item" key={el.key}>
              <div className="product-categories-icons">
                <i className={el.class}></i>
              </div>
              <span className="product-categories-name">{el.name}</span>
              <span className="product-categories-desc">
                Кількість {el.number}
              </span>
            </div>
          );
        })}
      </div>
    );
  }
}
