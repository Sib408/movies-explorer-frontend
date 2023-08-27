import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import useFormValidation from "../../../hooks/useFormValidator";
import Checkbox from "./Checkbox";

import './Search.css'


function Search({ onSearch }) {
  const { handleChange } = useFormValidation();
  const location = useLocation();

  const [request, setRequest] = useState('');
  const [checkboxStatus, setCheckboxStatus] = useState(false);
  const [noSearchResult, setNoSearchResult] = useState(null);

  useEffect(() => {
    if (location.pathname === '/movies') {
      const checkbox = localStorage.getItem('checkboxStatus');
      const search = localStorage.getItem('request');

      if (search) {
        setRequest(search);

      }
      if (JSON.parse(checkbox) === true) {
        setCheckboxStatus(true);
      } else {
        setCheckboxStatus(false);
      }
    }
  }, [location.pathname]);

  //чекбокс
  function toggleCheckbox(checkboxStatus) {
    setCheckboxStatus(checkboxStatus);
    onSearch(request, checkboxStatus);
  }

  function handleChangeCheckbox(evt) {
    toggleCheckbox(evt.target.checked);
  }

  function handleRequestChange(evt) {
    handleChange(evt);
    setRequest(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    if (!request) {
      setNoSearchResult('Нужно ввести ключевое слово');
      console.log('Нужно ввести ключевое слово')
    }
    onSearch(request, checkboxStatus);
  }
  return (
    <section className="search">
      <div className="search__container">
        <form className="search__form" onSubmit={handleSubmit}>
          <input className="search__input"
            type="text"
            name="request"
            placeholder="Фильм"
            value={request || ''}
            onChange={handleRequestChange}
            required />
        </form>
        <button className="search__button" type="submit" aria-label="поиск">Найти</button>
      </div>
      <Checkbox
        checkboxStatus={checkboxStatus}
        onChangeCheckbox={handleChangeCheckbox}
      />
    </section>
  )
}

export default Search;
