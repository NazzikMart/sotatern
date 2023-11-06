import React, { Component } from "react";
import "./Navbar.css";
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";

import About from "../About/About.js";
import ProductCatalog from "../ProductCatalog/ProductCatalog.js";
import Contact from "../Contact/Contact.js";
import Besket from "../Besket/Besket.js";
import HomePage from "../HomePage/HomePage";
import Profile from "../Profile/Profile.js";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar-wrapper">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link className="navbar-brand" to="/">
            Сота - студія техніки
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Головна
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Контакти
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/catalog">
                  Каталог товарів
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/about" tabIndex="-1">
                  Про нас
                </Link>
              </li>
            </ul>
            <span className="profile">
              <Link to="/profile">
                <i className="fa-sharp fa-solid fa-user"></i>
              </Link>
            </span>
            <span className="besket">
              <Link to="/besket">
                <i className="fa-sharp fa-solid fa-basket-shopping"></i>
              </Link>
            </span>
          </div>
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                product={this.props.product}
                addToOrder={this.props.addToOrder}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/catalog" element={<ProductCatalog />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/besket"
            element={
              <Besket
                orders={this.props.orders}
                removeProduct={this.props.removeProduct}
                counter={this.props.counter}
                totalCost={this.props.totalCost}
                updateOrders={this.props.updateOrders}
              />
            }
          />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    );
  }
}
