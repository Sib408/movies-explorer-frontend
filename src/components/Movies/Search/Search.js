import React from "react";

import './Search.css'


function Search() {

  function handleSubmit(evt) {
    evt.preventDefault();
    console.log('поиск');
  }

  return (
    <section className="search">
      <div className="search__container">
        <form className="search__form" onSubmit={handleSubmit}>
          <input className="search__input"
            type="text"
            name="search"
            placeholder="Фильм"
            required />
        </form>
        <button className="search__button" type="submit" aria-label="поиск">Найти</button>
      </div>
      < div className='search__checkbox'>
        <label className="search__checkbox-container">
          <input className="search__checkbox-container-input"
            type="checkbox"
            name='checkbox'
            defaultChecked />
          <span className="search__checkbox-container-slider"></span>
        </label>
        <span className='search__checkbox-text'>Короткометражки</span>
      </div>
    </section>
  )
}

export default Search;
