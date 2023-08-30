import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AuthForm from '../AuthForm/AuthForm';
import useFormValidation from '../../hooks/useFormValidator';
import Error from '../Error/Error';

import './Login.css';
import '../Register/Register.css';


function Login({ onLogin, loginError }) {
  const { values, handleChange, errors, isValid, resetForm } = useFormValidation();

  useEffect(() => {
    resetForm('', '', false);
  }, [resetForm]);

  function handleSubmit(evt) {
    evt.preventDefault();
    onLogin(values)
  }

  return (
    <section className="form form_login">
      <div className='form__container form__container_login'>
        <Link className="form__logo form__logo_login" to='/' />
        <AuthForm title={'Рады видеть!'} name={'login'} onSubmit={handleSubmit}>
          <div className="form__field form__field_login">

            <label >
              <span className="form__title">Email</span>
              <input className="form__input form__input_type_auth"
                onChange={handleChange}
                type="email"
                placeholder="Email"
                id="email"
                name="email"
                minLength="2"
                maxLength="40"
                pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                value={values.email || ''}
                required />
              <Error errorMessage={errors.email} />
            </label>
            <span className='form__error'>{errors.email || ''}</span>

            <label>
              <span className="form__title">Пароль</span>
              <input className="form__input form__input_type_auth"
                onChange={handleChange}
                type="password"
                placeholder="Пароль"
                id="password"
                name="password"
                minLength="6"
                maxLength="200"
                value={values.password || ''}
                required />
              <Error errorMessage={errors.password} />
            </label>
            <span className='form__error'>{errors.password || ''}</span>
          </div>
          <div className="form__nav">
            <Error errorMessage={loginError} />
            <button className={"form__button form__button_login form__button_type_save-auth"} type="submit" disabled={!isValid}
              style={!isValid ?
                { backgroundColor: '#4285F4', opacity: '.5' } : null}>Войти</button>
            <p className={"form__text form__text_login"}>Еще не зарегистрированы? <Link className={"form__link form__link_login"} to={'/signup'}>Регистрация</Link></p>
          </div>
        </AuthForm>

      </div>
    </section>

  )
}

export default Login;
