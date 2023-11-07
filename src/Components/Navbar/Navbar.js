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
            <span className="profile ">
              <Link to="/profile">Акунт</Link>
            </span>
            <span className="besket">
              <Link to="/besket">Кошик</Link>
            </span>
          </div>
        </nav>
        <nav className="navbar navbar-light bg-light padding">
          <div className="Logo">
            <img
              src="https://www.pngall.com/wp-content/uploads/2/S-Letter-PNG-Photo.png"
              className="logo-img"
            />
            <div className="logo-items">
              <Link className="navbar-brand" to="/">
                Сота - студія техніки
              </Link>
              <span>Електроніка та побутова техніка</span>
            </div>
          </div>

          <span className=" color-blue" to="/number">
            <i className="fa-solid fa-phone"></i> +380-97-46-13-997
          </span>
        </nav>
        <nav className="navbar navbar-dark bg-dark padding">
          <div
            className="form-inline"
            style={{
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <Link
              to="/catalog"
              style={{
                marginLeft: "30px",
              }}
              className="product-catalog-btn"
            >
              Каталог товарів <i className="fa-solid fa-bars"></i>
            </Link>
            <input
              className="form-control search"
              type="search"
              placeholder="пошук товару..."
              aria-label="Search"
              style={{
                width: "700px",
              }}
            />
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
          <Route
            path="/catalog"
            element={
              <ProductCatalog
                addToOrder={this.props.addToOrder}
                product={this.props.product}
                orders={this.props.orders}
                removeProduct={this.props.removeProduct}
                counter={this.props.counter}
                totalCost={this.props.totalCost}
                updateOrders={this.props.updateOrders}
              />
            }
          />
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
