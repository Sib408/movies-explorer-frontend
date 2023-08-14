import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Error from '../Error/Error';
import AuthForm from '../AuthForm/AuthForm';

import './Register.css'

function Register({ onRegister }) {
  const [email] = useState('');
  const [password] = useState('');

  // function handleEmail(evt) {
  //   setEmail(evt.target.value)
  // }

  // function handlePassword(evt) {
  //   setPassword(evt.target.value)
  // }

  function handleSubmit(evt) {
    evt.preventDefault();
    onRegister(password, email)
  }

  return (
    <section className="register">
      <div className='register__container'>
        <Link className="header__logo header__logo_register" to='/' />

        <AuthForm title={'Добро пожаловать!'} name={'register'} onSubmit={handleSubmit}>
          <div className="form__field">
            <label>
              <span className="form__title">Имя</span>
              <input className="form__input form__input_type_auth" type="text" name="name" placeholder="Имя" minLength="2" required defaultValue={'Виталий'} />
            </label>
            <label >
              <span className="form__title">Email</span>
              <input className="form__input form__input_type_auth" type="email" placeholder="Email" id="email"
                name="email" defaultValue={'pochta@yandex.ru'}
                minLength="2" maxLength="40" required />
            </label>

            <label>
              <span className="form__title">Пароль</span>
              <input className="form__input form__input_password form__input_type_auth" type="password" placeholder="Пароль" id="password"
                name="password" minLength="6" maxLength="200" required />
              <Error />
            </label>
          </div>


          <button className={"form__button form__button_type_save-auth"} type="submit" >Зарегистрироваться</button>
          <p className={"form__text"}>Уже зарегистрированы? <Link className={"form__link"} to={'/signin'}>Войти</Link></p>

        </AuthForm>
      </div>
    </section>
  )

}

export default Register;
