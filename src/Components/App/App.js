import "./App.css";
import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer.js";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      product: [
        {
          name: "Чайник",
          price: 1100,
          model: "SilverCrest",
          category: "Kettle",
          id: 1,
          counter: 1,
          img: "https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/import/3791650014461147.jpg",
        },
        {
          name: "Телефон",
          price: 1100,
          model: "SilverCrest",
          category: "telephone",
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
          model: "SilverCrest",
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
          model: "SilverCrest",
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
      orders: [],
      counter: 1,
      totalCost: 0,
    };

    this.addToOrder = this.addToOrder.bind(this);
    this.removeProduct = this.removeProduct.bind(this);
  }
  updateOrders = (updatedOrders, totalCost) => {
    this.setState({
      orders: updatedOrders,
      totalCost,
    });
  };

  addToOrder = (item) => {
    this.setState(
      {
        orders: [...this.state.orders, item],
      },
      this.calculateTotalCost
    );
  };

  removeProduct = (productId) => {
    this.setState(
      (prevState) => ({
        orders: prevState.orders.filter((order) => order.id !== productId),
      }),
      this.calculateTotalCost
    );
  };

  calculateTotalCost = () => {
    const totalCost = this.state.orders.reduce((accumulator, order) => {
      return accumulator + order.price * order.counter;
    }, 0);

    this.setState({
      totalCost,
    });
  };

  render() {
    return (
      <div className="App">
        <Navbar
          product={this.state.product}
          addToOrder={this.addToOrder}
          orders={this.state.orders}
          removeProduct={this.removeProduct}
          counter={this.state.counter}
          totalCost={this.state.totalCost}
          updateOrders={this.updateOrders}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
