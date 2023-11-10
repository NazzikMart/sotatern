import React, { Component } from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import "./Profile.css";

export default function Profile() {
  function handlerLogin() {
    setIsAcount(!isAccount);
  }
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");
  const [isAccount, setIsAcount] = useState(true);
  return (
    <div className="forms">
      {isAccount ? (
        <form
          className="profile-register"
          onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}
        >
          <h2 className="register-name">Реєстрація</h2>
          <div className="profile-reg-name">
            <input
              className="reg-name"
              placeholder="Введіть своє ім'я"
              {...register("firstName")}
              type="text"
            />
          </div>
          <div className="profile-reg-number">
            <input
              className="reg-number"
              placeholder="Введіть номер телефону"
              {...register("number")}
              type="phone"
            />
          </div>
          <div className="profile-reg-password">
            <input
              className="reg-password"
              placeholder="Придумайте пароль"
              {...register("password")}
              type="text"
            />
          </div>
          <div className="profile-btn-reg">
            <button className="btn-reg">Реєстрація</button>
          </div>
          <div className="profile-btn-log">
            <button className="btn-log" onClick={handlerLogin}>
              Увійти
            </button>
          </div>
        </form>
      ) : (
        <form className="profile-login">
          <h2 className="login-name">Увійти</h2>
          {/* <div className="profile-reg-name">
          <input className="reg-name" placeholder="Введіть своє ім'я" />
        </div> */}
          <div className="profile-log-number">
            <input
              className="log-number"
              placeholder="Введіть номер телефону"
            />
          </div>
          <div className="profile-log-password">
            <input className="log-password" placeholder="Введіть пароль" />
          </div>
          <div className="profile-btn-log">
            <button className="btn-log">Увійти</button>
          </div>
        </form>
      )}
    </div>
  );
}
