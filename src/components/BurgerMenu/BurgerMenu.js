import React from 'react';
import { NavLink } from "react-router-dom";


import './BurgerMenu.css'

function BurgerMenu({ onClick, isOpen, onClose }) {

  return (
    <div className="burger-menu">

      <button className={`burger-menu__click ${isOpen ? 'burger-menu__hidden' : 'burger-menu__visible'}`}
        onClick={onClick} />

      <div className={`burger-menu__inner ${isOpen ? 'burger-menu__active' : ' '}`}>
        <button className="burger-menu__button" onClick={onClose} />
        <nav className="burger-menu__links">
          <NavLink className={({ isActive }) =>
            isActive ? 'burger-menu__link_active' : 'burger-menu__link'
          } to="/">Главная</NavLink>
          <NavLink className={({ isActive }) =>
            isActive ? "burger-menu__link_active" : "burger-menu__link"
          } to="/movies">Фильмы</NavLink>
          <NavLink className={({ isActive }) =>
            isActive ? "burger-menu__link_active" : "burger-menu__link"
          } to="/saved-movies">Сохранённые фильмы</NavLink>
        </nav>
        <nav className='burger-menu__footer'>
          <NavLink className={({ isActive }) =>
            isActive ? "burger-menu__login_active" : "burger-menu__login"
          } to="/profile">Аккаунт</NavLink>
        </nav>
      </div>


    </div>
  )
}

export default BurgerMenu;
