import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useFormValidation from '../../hooks/useFormValidator';
import CurrentUserContext from "../../utils/context/CurrentUserContext";

import './Profile.css'

function Profile({ onUpdateUser, onSignOut, profileMessage }) {
  const { values, setValues, errors, setErrors, handleChange, isValid, setIsValid } = useFormValidation();
  const [profileMessageText, setProfileMessageText] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const location = useLocation();

  const currentUser = React.useContext(CurrentUserContext);

  const handleChangeName = (evt) => {
    if (evt.target.value === currentUser.name || evt.target.value === currentUser.email) {
      setIsValid(false);
      setErrors({
        errors: errors.name,
        [evt.target.name]: 'Имя должно отличаться от установленного'
      })
    } else {
      handleChange(evt);
      setIsEditing(true)

    }
  };
  const handleChangeEmail = (evt) => {
    if (evt.target.value === currentUser.name || evt.target.value === currentUser.email) {
      setIsValid(false);
      setErrors({
        errors: errors.name,
        [evt.target.name]: 'Email должен отличаться от установленного'
      });
    } else {
      handleChange(evt);
      setIsEditing(true)

    }
  };
  useEffect(() => {
    setProfileMessageText(profileMessage);
  }, [profileMessage]);

  useEffect(() => {
    setProfileMessageText('');
  }, [location]);

  useEffect(() => {
    setValues({
      name: currentUser.name,
      email: currentUser.email
    });

  }, [currentUser, setValues]);

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateUser({
      name: values.name,
      email: values.email,
    });
    setIsEditing(!isEditing);

  }

  useEffect(() => {
    setIsValid(false);
    setValues({
      name: currentUser.name,
      email: currentUser.email,
    });

  }, [onUpdateUser]);

  return (
    <section className='profile'>
      <div className='profile__content'>
        <h2 className='profile__title'>{`Привет, ${currentUser.name}!`}</h2>

        <form className='profile__form' onSubmit={handleSubmit}>
          <fieldset className='profile__fieldset'>
            <label className='profile__fields'>
              <p className='profile__fields-title'>Имя</p>
              <input className='profile__input'
                laceholder='Имя'
                onChange={handleChangeName}
                type='text'
                id='input-name'
                name='name'
                value={values.name || ''}
                placeholder='Имя'
                minLength="2"
                maxLength="30"
                pattern="[а-яА-Яa-zA-ZёË\- ]{1,}"
                required
              // disabled={!isEditing}
              />

            </label>
            <span className='profile__error'>{errors.name || ''}</span>

            <label className='profile__fields'>
              <p className='profile__fields-title'>E-mail</p>
              <input className='profile__input'
                onChange={handleChangeEmail}
                type='email'
                name='email'
                id='input-email'
                value={values.email || ''}
                placeholder='E-mail'
                minLength="2"
                maxLength="40"
                pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                required
              // disabled={!isEditing}
              />
            </label>

          </fieldset>

          <span className='profile__error'>{errors.email || ''}</span>
          <span className="profile__message">{profileMessageText}</span>
          <div className='profile__nav'>

            {!isEditing ? (
              <>
                <button type="button" className="profile__nav-button profile__nav-button_edit">Редактировать</button>
                <Link className='profile__nav-button profile__nav-button_signout' to='/' onClick={onSignOut}>Выйти из аккаунта</Link>
              </>
            ) : (
              <>
                <button className={`profile__nav-button_save ${!isValid ? 'profile__submit-button_disabled' : ''}`} type="submit">Сохранить</button>
              </>
            )}


          </div>

        </form>
      </div>
    </section>
  )
}

export default Profile;
