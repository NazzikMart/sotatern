import React, { Component } from "react";
import "./About.css";
import sota from "../../../img/photo_2023-10-24_17-34-51.jpg";
import seabreeze from "../../../img/seabreeze.jpg";
import silver from "../../../img/1401-silvercrest_logo.jpg";
import magio from "../../../img/Без назви.jpg";
import con from "../../../img/conbrio-fav.png";

export default class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fotos: [
        {
          id: 1,
          foto: "https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/1/7/176588385_images_16495315817.jpg",
        },
        {
          id: 2,
          foto: "https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/1/7/176588385_images_16495315817.jpg",
        },
        {
          id: 3,
          foto: "https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/1/7/176588385_images_16495315817.jpg",
        },
        {
          id: 4,
          foto: "https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/1/7/176588385_images_16495315817.jpg",
        },
        {
          id: 5,
          foto: "https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/1/7/176588385_images_16495315817.jpg",
        },
      ],
      producerItem: [
        {
          name: "SilverCrest",
          img: silver,
        },
        {
          name: "Magio",
          img: magio,
        },
        {
          name: "Con Brio",
          img: con,
        },
        {
          name: "Sea Breeze",
          img: seabreeze,
        },
      ],
      hasError: false,
    };
  }
  componentDidCatch(error, info) {
    console.error("Помилка в компоненті About:", error);
    console.error("Трасування стека компонентів:", info.componentStack);
    this.setState({ hasError: true });
  }

  handlerMouseEnter(e) {
    // console.log(e.target);
  }

  render() {
    if (this.state.hasError) {
      return <div>Щось пішло не так. Будь-ласка спробуйте пізніше.</div>;
    }
    return (
      <div className="about-wrapper">
        <div className="about-name">
          <p className="name-about">Трохи про нас</p>
        </div>

        <div className="about-info">
          <div className="about-info-img">
            <img className="info-img" src={sota} />
          </div>
          <div className="about-info-text">
            <span className="about-info-text-name">Сота - студія техніки</span>
            <span className="about-info-text-desc">
              {" "}
              Ласкаво просимо до магазину "Сота" – вашого надійного партнера у
              світі сучасної техніки! У магазині "Сота" ми пропонуємо широкий
              асортимент сучасної техніки та гаджетів для ваших потреб. Наша
              компанія присвячена наданню найкращих рішень для вашого
              повсякденного та робочого життя. Ви знайдете у нас найновіші
              моделі смартфонів, планшетів, ноутбуків, побутових приладів та
              багато іншого.
            </span>
          </div>
        </div>
        <div className="about-producer">
          <span className="profucer-name">Наші постачальнки</span>
          <div className="producer-items">
            {this.state.producerItem.map((el) => {
              return (
                <div className="producer-item" key={el.name}>
                  <img src={el.img} className="producer-item__img" />
                  {el.name}
                </div>
              );
            })}
          </div>
        </div>

        <div className="about-fotos">
          <span className="about-fotos-name">Фото галерея товарів</span>
          <div className="about-fotos-galery">
            {this.state.fotos.map((el) => {
              return (
                <div
                  className="about-fotos-galery__img"
                  key={el.id}
                  onMouseOver={this.handlerMouseEnter}
                >
                  <img className="about-fotos-galery__images" src={el.foto} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
