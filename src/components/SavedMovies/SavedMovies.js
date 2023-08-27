import React, { useState, useEffect } from "react";
import Search from "../Movies/Search/Search";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import Preloader from '../Movies/Preloader/Preloader'
import shortsFilter from "../../utils/shortsFilter";

import './SavedMovies.css';

function SavedMovies({ savedMovies, onDeleteMovie }) {

  const [filteredSavedMovies, setFilteredSavedMovies] = useState([]);
  const [request, setRequest] = useState('');
  const [checkboxStatus, setCheckboxStatus] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isSearchDone, setIsSearchDone] = useState(false);

  function handleSearchSavedMovie(request, checkboxStatus) {
    startLoading();

    const searchResult = shortsFilter(savedMovies, request, checkboxStatus);
    setFilteredSavedMovies(searchResult);
    setRequest(request);
    setCheckboxStatus(checkboxStatus);
    setIsSearchDone(true);

    function startLoading() {
      setLoading(true);
      setTimeout(() => setLoading(false), 700);
    }
  }

  useEffect(() => {
    if (filteredSavedMovies.length > 0) {
      const searchResult = shortsFilter(savedMovies, request, checkboxStatus);
      setFilteredSavedMovies(searchResult);
    }
  }, [savedMovies]);

  return (
    <main className='savedMovies'>
      <Search
        onSearch={handleSearchSavedMovie}
      />
      {loading ?
        <div className="savedMovies__preloader">
          <Preloader />
        </div>
        : isSearchDone
          ? filteredSavedMovies.length > 0
            ?
            <MoviesCardList
              movies={filteredSavedMovies}
              savedMovies={savedMovies}
              onDeleteMovie={onDeleteMovie}
            />
            : (
              <div className="savedMovies__container">
                <span className="savedMovies__text">Ничего не найдено</span>
              </div>
            )
          : (
            <MoviesCardList
              movies={savedMovies}
              savedMovies={savedMovies}
              onDeleteMovie={onDeleteMovie}
            />
          )
      }

    </main>
  )
}

export default SavedMovies;
