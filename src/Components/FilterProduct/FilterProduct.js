import React, { Component } from "react";
import "./FilterProduct.css";

export default class FilterProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [
        { key: "all", name: "Все" },
        { key: "Kettle", name: "Чайник" },
        { key: "telephone", name: "Телефон" },
        { key: "Grill", name: "Гриль" },
        { key: "Microwave", name: "Мікрохвильовка" },
        { key: "VacuumCleaner", name: "Пилосос" },
        { key: "ThermalMug", name: "Термокружка" },
      ],
    };
  }
  render() {
    return (
      <div className="FilterProduct">
        {this.state.categories.map((item) => {
          return (
            <span
              className="category-item"
              key={item.key}
              onClick={() => this.props.choseCategory(item.key)}
            >
              {item.name}
            </span>
          );
        })}
      </div>
    );
  }
}
