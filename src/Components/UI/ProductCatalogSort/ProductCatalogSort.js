import React, { Component } from "react";
import "./ProductCatalogSort.css";

export default class ProductCatalogSort extends Component {
  render() {
    return (
      <div className="product-sort">
        <div className="product-sort-logo">
          <span className="product-sort-name">Сотрувати</span>
          <i className="fa-solid fa-sort"></i>
        </div>
        <div className="product-sort-orientations">
          <div
            className="product-sort-orientations-one marg-sort"
            onClick={this.props.threeCard}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div
            className="product-sort-orientations-two marg-sort"
            onClick={this.props.twoCard}
          >
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    );
  }
}
