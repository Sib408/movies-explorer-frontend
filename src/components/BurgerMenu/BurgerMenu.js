import React from 'react';
import { Link } from "react-router-dom";


import './BurgerMenu.css'

function BurgerMenu({ onClick, isOpen, onClose }) {

  const burgerButton = `burger-menu__visible ${isOpen ? 'burger-menu__hidden' : 'burger-menu__visible'}`;

  const burgerActive = `burger-menu ${isOpen ? 'burger-menu__active' : ' '}`;

  return (
    <>

      <button className={burgerButton}
        onClick={onClick}
      />
      <div className={burgerActive}>
        <button className="burger-menu__button" onClick={onClose} />
        <nav className="burger-menu__links">
          <Link className="burger-menu__link" to="/">Главная</Link>
          <Link className="burger-menu__link burger-menu__link_active" to="/movies">Фильмы</Link>
          <Link className="burger-menu__link" to="/saved-movies">Сохранённые фильмы</Link>
        </nav>
        <nav className='burger-menu__footer'>
          <Link className="burger-menu__login" to="/profile">Аккаунт</Link>
        </nav>
      </div>


    </>
  )
}

export default BurgerMenu;
