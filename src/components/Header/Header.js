import React from "react";
import './Header.css';
import { Link } from 'react-router-dom';
import './Header.css';


function Header(props) {

    return (
        <header className='header'>
            <Link className="header__logo" to='/'/>
            <nav className="header__menu">
                <Link className="header__register" to='/signup'>Регистрация</Link>
                <Link className="header__login" to='/signin'>Войти</Link>
            </nav>
        </header>
    )
}

export default Header;
