import React, { Component } from "react";
import "./Product.css";

export default class Product extends Component {
  render() {
    return (
      <div>
        {this.props.infoProducts.map((el) => {
          return (
            <div className="element-product-wrapper">
              <div className="element-product-imgs">
                <img className="product-img" src={el.img}></img>
                <div className="product-imgs">
                  <img className="img-product" src={el.img}></img>
                  <img className="img-product" src={el.img}></img>
                  <img className="img-product" src={el.img}></img>
                  <img className="img-product" src={el.img}></img>
                </div>
              </div>
              <div className="element-product-details">
                <div className="element-product-details-name">{el.name}</div>
                <div className="element-product-details-article">
                  Артикль: <span>{el.id}</span>
                </div>
                <div className="element-product-details-price">
                  Ціна:<span>{el.price} грн </span>
                </div>
                <div className="element-product-details-number">
                  Залишилось <span> 4 товари </span>
                </div>
                <div className="element-product-details-btn">
                  <button
                    className="element-product-details-button"
                    onClick={() => this.props.addToOrder(el)}
                  >
                    <i className="fa-sharp fa-solid fa-cart-shopping"></i> В
                    кошик
                  </button>
                  <button className="item-shop-btn product-one-click-btn">
                    Купити в 1 клік
                  </button>
                </div>
              </div>
            </div>
          );
        })}
        <div className="list-details">
          <div className="element-characteristics list-group">
            <span className="element-characteristics-name list-group-item ">
              Основні характеристики
            </span>
            <div className="element-characteristics-material list-group-item items-details-item">
              Матеріал :<span></span>
            </div>
            <div className="element-characteristics-producer list-group-item items-details-item">
              Виробник :<span></span>
            </div>
            <div className="element-characteristics-diagonal list-group-item items-details-item">
              Діагональ екрану :<span></span>
            </div>
            <div className="element-characteristics-resolution list-group-item items-details-item">
              Роздільна здатність :<span></span>
            </div>
            <div className="element-characteristics-type list-group-item items-details-item">
              Тип :<span></span>
            </div>
          </div>
        </div>

        <div className="product-review">
          {this.props.infoProducts.map((el) => {
            return (
              <div>
                <span className="product-review-name">Огляд {el.name}</span>
                <div className="product-review-info">
                  <span className="product-review-info__text">
                    Пилосос для сухого прибирання без мішка Bosch BGS05A225
                    Незмінний помічник для підтримки чистоти в кожному будинку –
                    пилосос. Ця категорія побутової техніки представлена в самих
                    різних варіаціях і всіх цінових діапазонах. Якщо ви шукайте
                    недорогий надійний пристрій, зверніть увагу на пилосос Bosch
                    BGS05A225. Німецький холдинг Бош є лідером в сегменті
                    побутової техніки, назва цієї компанії давно асоціюється з
                    якістю і економічністю. Модель Bosch BGS05A225 має сучасний
                    дизайн – всі елементи виконані в мінімалістичному стилі, на
                    компактному корпусі немає жодної зайвої деталі. Прозорий
                    мішок дозволяє контролювати рівень заповнення ємності
                    сміттям і пилом. Вага такого девайса для прибирання
                    становить всього 4,4 кг, його легко переміщати по кімнаті
                    або будинку. А ергономічний дизайн ручки в рази спрощує
                    процес прибирання – ви без зусиль впораєтеся зі сміттям
                    навіть в самих важкодоступних місцях.
                  </span>
                  <img
                    className="product-review-info__img"
                    src="https://scdn.comfy.ua/89fc351a-22e7-41ee-8321-f8a9356ca351/https://cdn.comfy.ua/media/catalog/product/b/o/bosch_bgs05a225_1.jpg/w_600"
                  />
                </div>
                <div className="product-review-info">
                  <img
                    className="product-review-info__img"
                    src="https://cdn.comfy.ua/media/x/img/1427840/_2.jpg"
                  />
                  <span className="product-review-info__text">
                    • вид прибирання – сухий, збір сміття відбувається шляхом
                    всмоктування його через телескопічну трубу; • тип
                    пилозбірника – контейнер, сучасне рішення пилозбірника,
                    особливо актуальне для людей, схильних до розвитку
                    алергічних реакцій; • споживана потужність – 700 Вт,
                    економний і одночасно потужний агрегат; • випускний фільтр
                    НЕРА 12, позиціонується як антиалергенний. Затримує на собі
                    не тільки мікрочастинки пилу, але і різні шкідливі бактерії;
                    • об’єм пилозбірника – 1,5 л, такої ємності достатньо для
                    декількох циклів роботи пристрою. В ідеалі очищати контейнер
                    рекомендується після кожного прибирання, але з пилососом Бош
                    BGS05A225 ви можете пропустити цей момент і заощадити час; •
                    рівень шуму – 78 дБ, це середній показник, під час роботи
                    пилосос створює шум, який можна порівняти з неголосною
                    розмовою.
                  </span>
                </div>
                <div className="product-review-info">
                  <span className="product-review-info__text">
                    Конструкційні особливості і гігієна моделі Bosch BGS05A225
                    Конструкція пилососа проста, невеликі габарити. Після
                    збирання його зручно зберігати, так як агрегат не займає
                    багато місця. А спеціальне кріплення для шлангу дозволяє
                    скрутити останній навколо корпусу, економлячи місце для
                    інших предметів. Пылесос для сухой уборки без мешка Bosch
                    BGS05A225 - 3 Очистити пилозбірник після прибирання дуже
                    легко. Завдяки системі EasyClean, досить натиснути всього
                    одну кнопку, щоб зібране в ємності сміття вирушило у відро.
                    Ще один явний плюс – конструкція контейнера округла, що
                    максимально спрощується процес спустошення пилозбірника.
                    Пылесос для сухой уборки без мешка Bosch BGS05A225 - 4 Перед
                    тим як пилосос Bosch BGS05A225 купити, непогано буде
                    дізнатися його додаткові можливості. Вони наступні: •
                    автозмотування шнура; • сталева телескопічна труба
                    всмоктування; • відсутність мішка, так як пилозбірником
                    виступає пластиковий прозорий контейнер; • універсальність
                    прибирання, оскільки в комплект входять три насадки – для
                    м'яких меблів, щілинна та 2-в-1; • система гігієнічної
                    фільтрації; • високоефективна система сепарації пилу.
                  </span>
                  <img
                    className="product-review-info__img"
                    src="https://cdn.comfy.ua/media/x/img/1427840/_3.jpg"
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="list-details">
          <div className="element-characteristics list-group">
            <span className="element-characteristics-name list-group-item ">
              Характеристики
            </span>
            <div className="element-characteristics-material list-group-item items-details-item">
              Матеріал :<span></span>
            </div>
            <div className="element-characteristics-producer list-group-item items-details-item">
              Виробник :<span></span>
            </div>
            <div className="element-characteristics-diagonal list-group-item items-details-item">
              Діагональ екрану :<span></span>
            </div>
            <div className="element-characteristics-resolution list-group-item items-details-item">
              Роздільна здатність :<span></span>
            </div>
            <div className="element-characteristics-type list-group-item items-details-item">
              Тип :<span></span>
            </div>
            <div className="element-characteristics-type list-group-item items-details-item">
              Тип :<span></span>
            </div>
            <div className="element-characteristics-type list-group-item items-details-item">
              Тип :<span></span>
            </div>
            <div className="element-characteristics-type list-group-item items-details-item">
              Тип :<span></span>
            </div>
            <div className="element-characteristics-type list-group-item items-details-item">
              Тип :<span></span>
            </div>
            <div className="element-characteristics-type list-group-item items-details-item">
              Тип :<span></span>
            </div>
            <div className="element-characteristics-type list-group-item items-details-item">
              Тип :<span></span>
            </div>
            <div className="element-characteristics-type list-group-item items-details-item">
              Тип :<span></span>
            </div>
            <div className="element-characteristics-type list-group-item items-details-item">
              Тип :<span></span>
            </div>
            <div className="element-characteristics-type list-group-item items-details-item">
              Тип :<span></span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
