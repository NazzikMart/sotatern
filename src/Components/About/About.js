import React, { Component } from "react";
import "./About.css";

export default class About extends Component {
  render() {
    return (
      <div className="About">
        <span className="AboutName">Трохи про нас</span>

        <div className="AboutDesc">
          Ласкаво просимо до магазину "Сота" – вашого надійного партнера у світі
          сучасної техніки! У магазині "Сота" ми пропонуємо широкий асортимент
          сучасної техніки та гаджетів для ваших потреб. Наша компанія
          присвячена наданню найкращих рішень для вашого повсякденного та
          робочого життя. Ви знайдете у нас найновіші моделі смартфонів,
          планшетів, ноутбуків, побутових приладів та багато іншого.
        </div>

        <span className="AboutName">Чому обирають нас</span>
        <div className="AboutDesc">
          <ul>
            <li>
              Великий вибір: У нашому магазині ви знайдете різноманітні товари
              від провідних виробників. Ми завжди прагнемо мати на складі
              найбільший асортимент товарів, щоб ви могли знайти саме те, що вам
              потрібно.
            </li>
            <li>
              Якість та надійність: Ми турбуємося про якість продукції, яку ми
              продаємо. Всі товари відомих брендів, що представлені у нас,
              проходять контроль якості.
            </li>
            <li>
              Консультація фахівців: Наші професійні консультанти готові
              допомогти вам вибрати найкращий варіант, враховуючи ваші потреби
              та бюджет.
            </li>
            <li>
              Зручність та сервіс: Ми надаємо зручний сервіс та можливість
              замовлення онлайн, а також швидку доставку до вашого дому.
            </li>
            <li>
              Акції та знижки: У нас завжди діють різні акції та знижки, щоб
              зробити ваші покупки ще вигіднішими
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
