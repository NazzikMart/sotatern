import React, { Component } from "react";
import "./ProductCatalog.css";
import ProductCatalogFilter from "../ProductCatalogFilter/ProductCatalogFilter.js";
import ProductCatalogSort from "../ProductCatalogSort/ProductCatalogSort.js";
import Card from "../Card/Card.js";
import ServiceAndService from "../ServiceAndService/ServiceAndService.js";

export default class ProductCatalog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      producers: [
        { name: "SilverCrest", id: 1, category: "producer" },
        { name: "Elenberg", id: 2, category: "producer" },
        { name: "SeaBreeze", id: 3, category: "producer" },
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
          type: " Чайник",
          producer: "SilverCrest",
          counter: 1,
          heading: "kitchen",
          img: "https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/import/3791650014461147.jpg",
        },
        {
          name: "Телефон",
          price: 1100,
          model: "Magio",
          category: "telephone",
          volume: "16",
          producer: "Samsung",
          heading: "phone",
          id: 2,
          counter: 1,
          img: "https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/1/2/123_11_36.jpg",
        },
        {
          name: "Гриль",
          price: 1100,
          model: "SilverCrest",
          heading: "kitchen",
          category: "Grill",
          producer: "SilverCrest",
          id: 3,
          counter: 1,
          img: "https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/g/c/gc772d30-1.jpg",
        },
        {
          name: "Мікрохвильовка",
          price: 1100,
          model: "Magio",
          heading: "kitchen",
          category: "Microwave",
          producer: "Magio",
          id: 4,
          counter: 1,
          img: "https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/1/5/1574995.jpg",
        },
        {
          name: "Пилосос",
          price: 1100,
          model: "SilverCrest",
          heading: "household",
          category: "VacuumCleaner",
          producer: "SilverCrest",
          id: 5,
          counter: 1,
          img: "https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/3/2/3214_2211400052.1200x1200.jpg",
        },
        {
          name: "Термокружка",
          price: 1100,
          model: "SeaBreeze",
          heading: "kitchen",
          category: "ThermalMug",
          producer: "SeaBreeze",
          id: 6,
          counter: 1,
          img: "https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/1/7/176588385_images_16495315817.jpg",
        },
      ],
      currentItems: [],
      newItem: [],
      maxPrice: "",
      minPrice: "",
      hasError: false,
      searchTerm: "",
      searchResults: [],
      selectedProducers: [],
      cardPosition: "",
      selectedCategories: [],
      services: [
        {
          iconClass: "fa-solid fa-truck",
          name: "Доставка",
          description:
            "Перевірка при отриманні та можливість безкоштовно повернути товар",
        },
        {
          iconClass: "fa-brands fa-sellsy",
          name: "Б/У техніка",
          description:
            "У нас також в наявності є вживана техніка за солодкими цінами",
        },
        {
          iconClass: "fa-solid fa-laptop-file",
          name: "Ремонт",
          description: "Відремонтуємо будь-яку річ швидко та якісно",
        },
        {
          iconClass: "fa-solid fa-shop",
          name: "Магазини",
          description: "Легко відкрийте свій інтернет-магазин",
        },
        {
          iconClass: "fa-solid fa-circle-info",
          name: "Допоможи іншим",
          description:
            "Передайте ваші речі дитячим будинкам та благодійним організаціям",
        },
        {
          iconClass: "fa-solid fa-credit-card",
          name: "Товар в кредит",
          description:
            "Можна купити будь який наш товар в кредит або митєву розтрочку",
        },
      ],
    };

    this.state.currentItems = this.state.product;
    this.choseCategory = this.choseCategory.bind(this);
    this.renderElement = this.renderElement.bind(this);
    this.showFunction = this.showFunction.bind(this);
  }
  choseCategory(category, heading) {
    if (category === "all") {
      this.setState({ currentItems: this.state.product });
    } else {
      this.setState({
        currentItems: this.state.product.filter((el) => {
          return el.category === category || el.heading === heading;
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
  handleMinPriceChange = (event) => {
    this.setState({ minPrice: event.target.value });
  };

  handleMaxPriceChange = (event) => {
    this.setState({ maxPrice: event.target.value });
  };
  filterByPcrice() {
    if (this.state.minPrice !== "" && this.state.maxPrice !== "") {
      const FilterProductPrice = this.state.currentItems.filter((el) => {
        return (
          el.price >= Number(this.state.minPrice) &&
          el.price <= Number(this.state.maxPrice)
        );
      });
      console.log(FilterProductPrice);
      this.setState({
        currentItems: FilterProductPrice,
      });
    }
  }

  filterByProducer = () => {
    const { selectedProducers } = this.state;

    if (selectedProducers.length > 0) {
      const filteredProducts = this.state.product.filter((el) =>
        selectedProducers.includes(el.producer)
      );

      this.setState({ currentItems: filteredProducts });
    } else {
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

  showFunction() {
    this.filterByProducer();
    this.filterByPcrice();
  }

  twoCard() {
    let cards = document.querySelector(".product-catalog-items");
    let card = document.querySelectorAll(".BestCard");
    let cardItems = document.querySelectorAll(".cardItems");
    let rating = document.querySelectorAll(".rating");
    let prices = document.querySelectorAll(".prices");
    let name = document.querySelectorAll(".item-name");
    let buttons = document.querySelectorAll(".buttons");
    let button = document.querySelectorAll(".buttons button");
    for (let index = 0; index < card.length; index++) {
      const element = card[index];
      element.style.width = "95%";
      element.style.flexDirection = "row";
      element.style.marginLeft = "30px";
    }
    for (let index = 0; index < button.length; index++) {
      const element = button[index];
      element.style.width = "100%";

      element.style.marginRight = "40px";
    }
    for (let index = 0; index < buttons.length; index++) {
      const element = buttons[index];
      element.style.width = "100%";
      element.style.flexDirection = "column";
    }
    for (let index = 0; index < name.length; index++) {
      const element = name[index];
      element.style.marginRight = "20px";
      element.style.marginLeft = "20px";
    }
    for (let index = 0; index < cardItems.length; index++) {
      const element = cardItems[index];
      element.style.width = "100%";
      element.style.flexDirection = "row";
      element.style.alignItems = "center";
    }
    for (let index = 0; index < rating.length; index++) {
      const element = rating[index];
      element.style.width = "100%";
      element.style.flexDirection = "column";
      element.style.alignItems = "center";
    }
    for (let index = 0; index < prices.length; index++) {
      const element = prices[index];
      element.style.width = "100%";
      element.style.flexDirection = "column";
      element.style.alignItems = "center";
    }
    cards.style.flexDirection = "column";
    cards.style.textAlign = "center";
    cards.style.justifyContent = "center";
  }

  threeCard() {
    let cards = document.querySelector(".product-catalog-items");
    let card = document.querySelectorAll(".BestCard");
    let cardItems = document.querySelectorAll(".cardItems");
    let rating = document.querySelectorAll(".rating");
    let prices = document.querySelectorAll(".prices");
    let name = document.querySelectorAll(".item-name");
    let buttons = document.querySelectorAll(".buttons");
    let button = document.querySelectorAll(".buttons button");
    for (let index = 0; index < card.length; index++) {
      const element = card[index];
      element.style.width = "30%";
      element.style.flexDirection = "row";
    }
    for (let index = 0; index < button.length; index++) {
      const element = button[index];

      element.style.marginRight = "0";
    }
    for (let index = 0; index < buttons.length; index++) {
      const element = buttons[index];

      element.style.flexDirection = "row";
    }
    for (let index = 0; index < name.length; index++) {
      const element = name[index];
      element.style.marginRight = "0px";
      element.style.marginLeft = "0px";
    }
    for (let index = 0; index < cardItems.length; index++) {
      const element = cardItems[index];

      element.style.flexDirection = "column";
    }
    for (let index = 0; index < rating.length; index++) {
      const element = rating[index];

      element.style.flexDirection = "row";
      element.style.alignItems = "center";
    }
    for (let index = 0; index < prices.length; index++) {
      const element = prices[index];

      element.style.flexDirection = "row";
      element.style.alignItems = "center";
    }
    cards.style.flexDirection = "row";
    cards.style.width = "100%";
  }
  render() {
    if (this.state.hasError) {
      return <div>Щось пішло не так із компонентом ProductCatalog</div>;
    }
    return (
      <React.Fragment>
        <div className="product-catalog-wrapper-osn">
          <ServiceAndService services={this.state.services} />
          <div className="product-catalog-wrapper">
            <div className="product-catalog">
              <div className="product-catalog-name">Каталог товарів</div>
              <ProductCatalogSort
                threeCard={this.threeCard}
                twoCard={this.twoCard}
              />
              <Card
                searchTerm={this.state.searchTerm}
                searchResults={this.state.searchResults}
                addClass={this.props.addClass}
                addToOrder={this.props.addToOrder}
                infoProduct={this.props.infoProduct}
                currentItems={this.state.currentItems}
                choseProducer={this.choseProducer}
              />
            </div>
            <ProductCatalogFilter
              categories={this.state.categories}
              minPrice={this.state.minPrice}
              maxPrice={this.state.maxPrice}
              producers={this.state.producers}
              selectedProducers={this.state.selectedProducers}
              showFunction={this.showFunction}
              choseCategory={(category) =>
                this.choseCategory(category, this.state.heading)
              }
              searchTerm={this.state.searchTerm}
              handleSearch={this.handleSearch}
              choseProducer={this.choseProducer}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
