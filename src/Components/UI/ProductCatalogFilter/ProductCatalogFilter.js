import React, { Component } from "react";
import "./ProductCatalogFilter.css";

export default class ProductCatalogFilter extends Component {
  render() {
    return (
      <div>
        <div className="filter-div">
          <ul className=" list-group list-top">
            {this.props.categories.map((el) => {
              return (
                <div key={el.key}>
                  <li
                    className="list-group-item list-item-filter-product hoverefect-category"
                    onClick={() => this.props.choseCategory(el.key)}
                  >
                    {el.name}
                  </li>
                </div>
              );
            })}
          </ul>
          <ul
            className=" list-group "
            style={{
              marginTop: "20px",
            }}
          >
            <div className="list-group-item list-item-filter-product list-item-filter">
              <span className="list-item-filter-name">Фільтр товарів</span>
              <input
                className="search-input-filterproduct"
                type="search"
                placeholder="пошук товару..."
                aria-label="Search"
                style={{
                  width: "250px",
                  marginTop: "20px",
                }}
                value={this.props.searchTerm}
                onChange={this.props.handleSearch}
              />
              <div className="list-item-filter-prices">
                <span className="list-item-filter-price">Ціна грн</span>
                <div className="filter-price">
                  <label className="filter-price-label">
                    <input
                      className="filter-price-input"
                      placeholder="ВІД"
                      value={this.props.minPrice}
                      onChange={(e) =>
                        this.setState({
                          minPrice: e.target.value,
                        })
                      }
                    />
                  </label>
                  <label className="filter-price-label">
                    <input
                      className="filter-price-input"
                      placeholder="ДО"
                      value={this.props.maxPrice}
                      onChange={(e) =>
                        this.setState({
                          maxPrice: e.target.value,
                        })
                      }
                    />
                  </label>
                </div>
              </div>
              <div className="list-item-producer">
                <span className="list-item-producer-name">Виробник</span>
                {this.props.producers.map((el) => {
                  return (
                    <div className="list-producer-filter" key={el.id}>
                      <input
                        type="checkbox"
                        className="list-producer-filter-checkbox"
                        checked={this.props.selectedProducers.includes(el.name)}
                        onChange={() => this.props.choseProducer(el.name)}
                      />
                      <span className="list-producer-filter__producer">
                        {el.name}
                      </span>
                    </div>
                  );
                })}
              </div>
              <div className="list-item-novelty">
                <span className="list-item-novelty-name">Нові товари</span>
                <select className="list-item-novelty-select">
                  {this.props.categories.map((el) => {
                    return (
                      <option
                        key={el.key}
                        onClick={() => this.props.choseCategory(el.key)}
                      >
                        {el.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="list-item-show">
                <button
                  className="list-item-show-btn"
                  onClick={this.props.showFunction}
                >
                  Показати
                </button>
              </div>
            </div>
          </ul>
        </div>
      </div>
    );
  }
}
