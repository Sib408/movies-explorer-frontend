import React, { useEffect } from "react";
// import { useLocation } from 'react-router-dom';
import useFormValidation from "../../../hooks/useFormValidator";
import Checkbox from "./Checkbox";

import './Search.css'


function Search(props) {
  const { values, handleChange, setValues } = useFormValidation();


  function handleSubmit(evt) {
    evt.preventDefault();
    props.handleGetMovies(values.movie, props.isShorts);
  }

  function handleShorts() {
    props.setShorts(!props.isShorts)
  }

  useEffect(() => {
    if (props.lastSearchFilm) {
      setValues({ ...values, 'movie': props.lastSearchFilm });
    }
  }, [props.lastSearchFilm, setValues]);

  return (
    <section className="search">
      <div className="search__container">
        <form className="search__form">
          <input className="search__input"
            type="text"
            name="movie"
            id="movie"
            minLength={1}
            placeholder="Фильм"
            value={values.movie || ''}
            onChange={handleChange}
            required />

          <button className="search__button" type="submit" aria-label="поиск" disabled={props.isLoading} onClick={handleSubmit}>Найти</button>
        </form>
      </div>
      <Checkbox
        isChecked={props.isShorts}
        handlerCheck={handleShorts}
      // checkboxStatus={checkboxStatus}
      // onChangeCheckbox={handleChangeCheckbox}
      />
    </section>
  )
}

export default Search;
