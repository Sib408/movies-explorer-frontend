import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import BurgerMenu from '../BurgerMenu/BurgerMenu';

import './Navigation.css'

function Navigation() {

  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const openBurgerMenu = () => {
    setIsBurgerMenuOpen(true);
  }

  const closeBurgerMenu = () => {
    setIsBurgerMenuOpen(false);
  }

  React.useEffect(() => {
    const closeByEsc = (evt) => {
      if (evt.key === 'Escape') {
        closeBurgerMenu();
      }
    }
    document.addEventListener('keydown', closeByEsc)
    return () => document.removeEventListener('keydown', closeByEsc)
  }, [])

  return (
    <header className='navigation'>
      <div className='navigation__menu'>
        <Link className="navigation__logo" to='/' />

        <div className='navigation__menu-links'>
          <Link className='navigation__menu-link navigation__menu-link_active' to='/movies'>Фильмы</Link>
          <Link className='navigation__menu-link' to='/saved-movies'>Сохранённые фильмы</Link>
        </div>
        <Link className="navigation__login" to="/profile">Аккаунт</Link>
        {/* <div className='navigation__burger'> */}
        <BurgerMenu
          isOpen={isBurgerMenuOpen}
          onClick={openBurgerMenu}
          onClose={closeBurgerMenu}
        />
      </div>
      {/* </div> */}
    </header>
  )
}

export default Navigation;
