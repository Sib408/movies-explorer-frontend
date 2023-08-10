import React from 'react';
import { Link } from 'react-router-dom';

import './Profile.css'

function Profile({ name, email }) {
  return (
    <section className='profile'>
      <div className='profile__content'>
        <h2 className='profile__title'>{`Привет, ${name}!`}</h2>

        <form className='profile__form'>
          <fieldset className='profile__fieldset'>
            <label className='profile__fields'>
              <p className='profile__input-title'>Имя</p>
              <input className='profile__input'
                type='text'
                id='input-name'
                name='name'
                value={name}
                placeholder='Имя'
                minLength={2}
                maxLength={30}
                defaultValue={'Виталий'}
                required />

            </label>

            <label className='profile__fields'>
              <p className='profile__input-title'>E-mail</p>
              <input className='profile__input'
                type='email'
                name='email'
                id='input-email'
                value={email}
                placeholder='E-mail'
                defaultValue={'pochta@yandex.ru'}
                required />
            </label>
          </fieldset>

          <div className='profile__nav'>
            <button className='profile__button profile__button_edit' type='submit'>Редактировать</button>
            <Link className='profile__button profile__button_signout' to='/signin'>Выйти из аккаунта</Link>
          </div>

        </form>
      </div>
    </section>
  )
}
export default Profile;
