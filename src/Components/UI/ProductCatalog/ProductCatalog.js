import React, { Component } from "react";
import "./ProductCatalog.css";
import Product from "../../Functional/Product/Product.js";
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../../Functional/Navbar/Navbar.js";

export default class ProductCatalog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      producers: [
        { name: "SilverCrest", id: 1, category: "producer" },
        { name: "Elenberg", id: 2, category: "producer" },
        { name: "Sea Brezze", id: 3, category: "producer" },
        { name: "Magio", id: 4, category: "producer" },
      ],
      categories: [
        { key: "all", name: "Всі" },
        { key: "Kettle", name: "Чайники" },
        { key: "telephone", name: "Телефони" },
        { key: "Grill", name: "Грилі" },
        { key: "Microwave", name: "Мікрохвильовки" },
        { key: "VacuumCleaner", name: "Пилососи" },
        { key: "ThermalMug", name: "Термокружки" },
      ],
      product: [
        {
          name: "Чайник",
          price: 1100,
          model: "SilverCrest SWKS 2000",
          category: "Kettle",
          id: 1,
          material: " Алюміній",
          detailOne: " Об'єм",
          volume: " 2 літра",
          detailTwo: "Потушність",
          suffocation: "2000W",
          detailThree: "Оперативна пам'ять",

          type: " Чайник",
          producer: "SilverCrest",
          color: "Black",
          counter: 1,
          img: "https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/import/3791650014461147.jpg",
        },
        {
          name: "Телефон",
          price: 1100,
          model: "Magio",
          category: "telephone",
          material: " Метал",
          detailOne: "Діагональ екрану",
          detailTwo: "Пам'ять",
          memory: "64 гб",
          detailThree: "Оперативна пам'ять",
          ram: "4 гб",
          detailFour: "Колір",
          color: "Black",
          volume: "16",
          type: " Смартфон",
          producer: "Samsung",
          id: 2,
          counter: 1,
          img: "https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/1/2/123_11_36.jpg",
        },
        {
          name: "Гриль",
          price: 1100,
          model: "SilverCrest",
          category: "Grill",
          id: 3,
          counter: 1,
          img: "https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/g/c/gc772d30-1.jpg",
        },
        {
          name: "Мікрохвильовка",
          price: 1100,
          model: "Magio",
          category: "Microwave",
          id: 4,
          counter: 1,
          img: "https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/1/5/1574995.jpg",
        },
        {
          name: "Пилосос",
          price: 1100,
          model: "SilverCrest",
          category: "VacuumCleaner",
          id: 5,
          counter: 1,
          img: "https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/3/2/3214_2211400052.1200x1200.jpg",
        },
        {
          name: "Термокружка",
          price: 1100,
          model: "SeaBreeze",
          category: "ThermalMug",
          id: 6,
          counter: 1,
          img: "https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/1/7/176588385_images_16495315817.jpg",
        },
        {
          name: "Термокружка",
          price: 1100,
          model: "SilverCrest",
          category: "ThermalMug",
          id: 7,
          counter: 1,
          img: "https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/1/7/176588385_images_16495315817.jpg",
        },
        {
          name: "Термокружка",
          price: 1100,
          model: "SilverCrest",
          category: "ThermalMug",
          id: 8,
          counter: 1,
          img: "https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/1/7/176588385_images_16495315817.jpg",
        },
        {
          name: "Термокружка",
          price: 1100,
          model: "SilverCrest",
          category: "ThermalMug",
          id: 9,
          counter: 1,
          img: "https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/1/7/176588385_images_16495315817.jpg",
        },
        {
          name: "Термокружка",
          price: 1100,
          model: "SilverCrest",
          category: "ThermalMug",
          id: 10,
          counter: 1,
          img: "https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/1/7/176588385_images_16495315817.jpg",
        },
      ],
      currentItems: [],
      newItem: [],
      minPrice: "",
      maxPrice: "",
      hasError: false,
      searchTerm: "",
      searchResults: [],
      selectedProducers: [],
    };

    this.state.currentItems = this.state.product;
    this.choseCategory = this.choseCategory.bind(this);
    this.renderElement = this.renderElement.bind(this);
  }
  choseCategory(category) {
    if (category === "all") {
      this.setState({ currentItems: this.state.product });
    } else {
      this.setState({
        currentItems: this.state.product.filter((el) => {
          return el.category === category;
        }),
      });
    }
  }
  handleSearch = (event) => {
    const term = event.target.value;
    this.setState({
      searchTerm: term,
    });

    const results = this.state.product.filter((product) =>
      product.name.toLowerCase().includes(term.toLowerCase())
    );

    this.setState({
      searchResults: results,
    });
  };
  filterByPrice = () => {
    const minPrice = parseInt(this.state.minPrice);
    const maxPrice = parseInt(this.state.maxPrice);

    if (!isNaN(minPrice) && !isNaN(maxPrice)) {
      const filteredProducts = this.state.product.filter(
        (el) => el.price >= minPrice && el.price <= maxPrice
      );

      this.setState({ currentItems: filteredProducts });
    }
  };
  filterByProducer = () => {
    const { selectedProducers } = this.state;

    if (selectedProducers.length > 0) {
      const filteredProducts = this.state.product.filter((el) =>
        selectedProducers.includes(el.producer)
      );

      this.setState({ currentItems: filteredProducts });
    } else {
      // If no producers are selected, show all products
      this.setState({ currentItems: this.state.product });
    }
  };
  choseProducer = (producer) => {
    const { selectedProducers } = this.state;

    if (selectedProducers.includes(producer)) {
      this.setState({
        selectedProducers: selectedProducers.filter((p) => p !== producer),
      });
    } else {
      this.setState({
        selectedProducers: [...selectedProducers, producer],
      });
    }
  };
  renderElement = (el) => {
    console.log(el);
    this.setState({
      newItem: [...this.state.newItem, el],
    });
    console.log(this.state.newItem);
  };

  componentDidCatch(error, info) {
    console.error("Error caught in Besket component:", error);
    console.error("Component stack trace:", info.componentStack);
    this.setState({ hasError: true });
  }
  render() {
    if (this.state.hasError) {
      return <div>Щось пішло не так із компонентом ProductCatalog</div>;
    }
    return (
      <div className="product-catalog-wrapper">
        <div className="product-catalog">
          <div className="product-catalog-name">Каталог товарів</div>
          <div className="product-sort">
            <div className="product-sort-logo">
              <span className="product-sort-name">Сотрувати</span>
              <i className="fa-solid fa-sort"></i>
            </div>
            <div className="product-sort-orientations">
              <div className="product-sort-orientations-one marg-sort">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="product-sort-orientations-two marg-sort">
                <span></span>
                <span></span>
              </div>
              <div className="product-sort-orientations-three marg-sort">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
          <div className="product-catalog-items">
            {this.state.searchTerm !== ""
              ? this.state.searchResults.map((item) => {
                  return (
                    <div className="BestCard newBestCard" key={item.id}>
                      <div className="cardItems">
                        <img src={item.img} className="img-card" />
                        <span className="item-name">{item.name}</span>
                        <span className="item-model">{item.model}</span>
                        <div className="rating">
                          <div className="stars">
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star"></i>
                          </div>
                          <div className="heart">
                            <i
                              className="fa-sharp fa-solid fa-heart"
                              onClick={this.props.addClass}
                            ></i>
                          </div>
                        </div>
                        <div className="prices">
                          <span className="item-price">
                            {item.price} &#8372;{" "}
                          </span>
                          <span className="item-availability">
                            В наявності 4
                          </span>
                        </div>
                        <div className="buttons">
                          <button
                            className="item-besket-btn"
                            onClick={() => this.props.addToOrder(item)}
                          >
                            <span>
                              <i className="fa-sharp fa-solid fa-cart-shopping"></i>
                              В корзину
                            </span>
                          </button>
                          <button className="item-shop-btn">
                            Купити в 1 клік
                          </button>
                        </div>
                        <Link
                          to="/product"
                          className="product-details-btn"
                          onClick={() => this.props.infoProduct(item)}
                        >
                          Більш про товар
                        </Link>
                      </div>
                    </div>
                  );
                })
              : this.state.currentItems.map((item) => {
                  return (
                    <div className="BestCard" key={item.id}>
                      <div className="cardItems">
                        <img src={item.img} className="img-card" />
                        <span className="item-name">{item.name}</span>
                        <span className="item-model">{item.model}</span>
                        <div className="rating">
                          <div className="stars">
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star"></i>
                          </div>
                          <div className="heart">
                            <i
                              className="fa-sharp fa-solid fa-heart"
                              onClick={this.props.addClass}
                            ></i>
                          </div>
                        </div>
                        <div className="prices">
                          <span className="item-price">
                            {item.price} &#8372;{" "}
                          </span>
                          <span className="item-availability">
                            В наявності 4
                          </span>
                        </div>
                        <div className="buttons">
                          <button
                            className="item-besket-btn"
                            onClick={() => this.props.addToOrder(item)}
                          >
                            <span>
                              <i className="fa-sharp fa-solid fa-cart-shopping"></i>
                              В корзину
                            </span>
                          </button>
                          <button className="item-shop-btn">
                            Купити в 1 клік
                          </button>
                        </div>
                        <Link
                          to="/product"
                          className="product-details-btn"
                          onClick={() => this.props.infoProduct(item)}
                        >
                          Більш про товар
                        </Link>
                      </div>
                    </div>
                  );
                })}
          </div>
        </div>
        <div>
          <ul className=" list-group list-top">
            {this.state.categories.map((el) => {
              return (
                <div key={el.key}>
                  <li
                    className="list-group-item list-item-filter-product hoverefect-category"
                    onClick={() => this.choseCategory(el.key)}
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
                className="form-control "
                type="search"
                placeholder="пошук товару..."
                aria-label="Search"
                style={{
                  width: "250px",
                  marginTop: "20px",
                }}
                value={this.state.searchTerm}
                onChange={this.handleSearch}
              />
              <div className="list-item-filter-prices">
                <span className="list-item-filter-price">Ціна грн</span>
                <div className="filter-price">
                  <label className="filter-price-label">
                    <input
                      className="filter-price-input"
                      placeholder="ВІД"
                      value={this.state.minPrice}
                      onChange={(e) =>
                        this.setState({ minPrice: e.target.value })
                      }
                    />
                  </label>
                  <label className="filter-price-label">
                    <input
                      className="filter-price-input"
                      placeholder="ДО"
                      value={this.state.maxPrice}
                      onChange={(e) =>
                        this.setState({ maxPrice: e.target.value })
                      }
                    />
                  </label>
                </div>
              </div>
              <div className="list-item-producer">
                <span className="list-item-producer-name">Виробник</span>
                {this.state.producers.map((el) => {
                  return (
                    <div className="list-producer-filter" key={el.id}>
                      <input
                        type="checkbox"
                        className="list-producer-filter-checkbox"
                        checked={this.state.selectedProducers.includes(el.name)}
                        onChange={() => this.choseProducer(el.name)}
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
                  {this.state.categories.map((el) => {
                    return (
                      <option
                        key={el.key}
                        onClick={() => this.choseCategory(el.key)}
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
                  onClick={() => {
                    this.filterByPrice();
                    this.filterByProducer();
                  }}
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
