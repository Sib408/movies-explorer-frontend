import React from "react";
import './Header.css';
import { Link } from 'react-router-dom';
import './Header.css';
import Navigation from "../Navigation/Navigation";


function Header({ loggedIn }) {

  return (
    <>
      {(loggedIn) ? (<Navigation />) : (
        <>
          <header className='header'>
            <Link className="header__logo" to='/' />
            <nav className='header__menu'>
              <Link className='header__register' to='/signup'>Регистрация</Link>
              <Link className='header__login' to='/signin'>Войти</Link>
            </nav>
          </header>
        </>)}
    </>
  )
}
export default Header;
