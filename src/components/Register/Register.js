import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Error from '../Error/Error';
import AuthForm from '../AuthForm/AuthForm';
import useFormValidation from '../../hooks/useFormValidator';


import './Register.css'

function Register({ onRegister, registerError }) {

  const { values, handleChange, errors, isValid, resetForm } = useFormValidation();
  useEffect(() => {
    resetForm({}, {}, false);
  }, [resetForm]);

  function handleSubmit(evt) {
    evt.preventDefault();
    onRegister(values)
  }

  return (
    <section className="form form_register">
      <div className='form__container form__container_register'>
        <Link className="form__logo form__logo_register" to='/' />

        <AuthForm title={'Добро пожаловать!'} name={'register'} onSubmit={handleSubmit}>
          <div className="form__field">
            <label>
              <span className="form__title">Имя</span>
              <input className="form__input form__input_type_auth"
                value={values.name || ""}
                onChange={handleChange}
                type="text"
                name="name"
                placeholder="Имя"
                minLength="2"
                maxLength="30"
                required
              />
              <Error errorMessage={errors.name} />

            </label>
            <span className='form__error'>{errors.name || ''}</span>
            <label >
              <span className="form__title">Email</span>
              <input className="form__input form__input_type_auth"
                value={values.email || ''} onChange={handleChange}
                type="email"
                placeholder="Email"
                id="email"
                name="email"
                pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                minLength="2"
                maxLength="40"
                required />
              <Error errorMessage={errors.email} />
            </label>
            <span className='form__error'>{errors.email || ''}</span>

            <label>
              <span className="form__title">Пароль</span>
              <input className="form__input form__input_password form__input_type_auth"
                value={values.password || ''} onChange={handleChange}
                type="password"
                placeholder="Пароль"
                id="password"
                name="password"
                minLength="6"
                maxLength="200"
                required />
              <Error errorMessage={errors.password} />
            </label>
            <span className='form__error'>{errors.password || ''}</span>
          </div>
          <div className="form__nav">
            <Error errorMessage={registerError} />
            <button className={"form__button form__button_type_save-auth"} type="submit" disabled={!isValid}
              style={!isValid ?
                { backgroundColor: '#4285F4', opacity: '.5' } : null} >Зарегистрироваться</button>
            <p className={"form__text"}>Уже зарегистрированы? <Link className={"form__link"} to={'/signin'}>Войти</Link></p>
          </div>
        </AuthForm>
      </div>
    </section>
  )

}

export default Register;
