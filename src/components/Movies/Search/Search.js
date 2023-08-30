import React, { useEffect } from "react";

import useFormValidation from "../../../hooks/useFormValidator";
import Checkbox from "./Checkbox";
import { InfoError } from "../../InfoError/InfoError";

import './Search.css'


function Search(props) {
  const { values, handleChange, setValues } = useFormValidation();


  function handleSubmit(evt) {
    evt.preventDefault();
    props.handleSearchMovies(values.movie, props.isShorts);
  }

  function handleShorts() {
    const checkboxValue = !props.isShorts;
    props.setShorts(checkboxValue)
    props.handleSearchMovies(values.movie, checkboxValue);

  }

  useEffect(() => {
    if (props.lastSearchMovie) {
      setValues({ ...values, 'movie': props.lastSearchMovie });
    }
  }, [props.lastSearchMovie, setValues]);

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

          <button className="search__button" type="submit" aria-label="поиск"
            disabled={props.isLoading} onClick={handleSubmit}>Найти</button>
        </form>
      </div>
      <Checkbox
        isChecked={props.isShorts}
        handlerCheck={handleShorts}

      />
      <InfoError
        isInfoErrorOpen={props.isInfoErrorOpen}
        closeInfoError={props.closeInfoError}
        textInfoError={props.textInfoError} />
    </section>

  )
}

export default Search;
