import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthForm from '../AuthForm/AuthForm';

import './Login.css';
import '../Register/Register.css'

function Login(onLogin) {
  const [email] = useState('');
  const [password] = useState('');

  function handleSubmit(evt) {
    evt.preventDefault();
    onLogin(password, email)
  }

  return (
    <section className="login">
      <div className='login__container'>
        <Link className="header__logo header__logo_register" to='/' />
        <AuthForm className="form" title={'Рады видеть!'} name={'login'} onSubmit={handleSubmit}>
          <div className="form__field form__field_login">

            <label >
              <span className="form__title">Email</span>
              <input className="form__input form__input_type_auth" type="email" placeholder="Email" id="email"
                name="email"
                minLength="2" maxLength="40" required />
            </label>

            <label>
              <span className="form__title">Пароль</span>
              <input className="form__input form__input_type_auth" type="password" placeholder="Пароль" id="password"
                name="password" minLength="6" maxLength="200" required />
            </label>
          </div>
        </AuthForm>
        <button className={"form__button form__button_login form__button_type_save-auth"} type="submit">Войти</button>
        <p className={"form__text form__text_login"}>Еще не зарегистрированы? <Link className={"form__link form__link_login"} to={'/signup'}>Регистрация</Link></p>
      </div>
    </section>

  )
}

export default Login;
