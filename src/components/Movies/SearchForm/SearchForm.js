import React from "react";

import './SearchForm.css'

function SearchForm() {
  return (
    <section className="searchForm">
      <div className="search">

        <form className="search__container">
          <input className="search__input" type="text" name="search" placeholder="Фильм" required />
        </form>
        <button className="search__button" type="button" aria-label="поиск">Найти</button>
      </div>
      < div className='search__checkbox'>
        <label className="checkbox__container">
          <input type="checkbox" name='checkbox' defaultChecked />
          <span className="checkbox__slider"></span>
        </label>
        <span className='checkbox__text'>Короткометражки</span>
      </div>
    </section>
  )
}

export default SearchForm;
