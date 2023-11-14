import React, { Component } from "react";
import "./Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-dark">
          <footer>
            <div className="container">
              <div className="row">
                <div className="col-sm-6 col-md-3 item">
                  <h3>Силки</h3>
                  <ul>
                    <li>
                      <a href="#">Товари</a>
                    </li>
                    <li>
                      <a href="#">Контакти</a>
                    </li>
                    <li>
                      <a href="#">Про нас</a>
                    </li>
                  </ul>
                </div>
                {/* <div class="col-sm-6 col-md-3 item">
                  <h3>About</h3>
                  <ul>
                    <li>
                      <a href="#">Company</a>
                    </li>
                    <li>
                      <a href="#">Team</a>
                    </li>
                    <li>
                      <a href="#">Careers</a>
                    </li>
                  </ul>
                </div> */}
                <div className="col-md-6 item text">
                  <h3>Сота - студія техніки</h3>
                  <p>
                    Ласкаво просимо до магазину "Сота" – вашого надійного
                    партнера у світі сучасної техніки! У магазині "Сота" ми
                    пропонуємо широкий асортимент сучасної техніки та гаджетів
                    для ваших потреб. Наша компанія присвячена наданню найкращих
                    рішень для вашого повсякденного та робочого життя. Ви
                    знайдете у нас найновіші моделі смартфонів, планшетів,
                    ноутбуків, побутових приладів та багато іншого.
                  </p>
                </div>
                <div className="col item social">
                  <a href="#">
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-telegram"></i>
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </div>
              </div>
              <p className="copyright">Сота - студія техніки © 2023</p>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}
