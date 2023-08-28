import React, { useState, useEffect } from "react";
import Search from "../Movies/Search/Search";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
// import Preloader from '../Movies/Preloader/Preloader'
import { mainApi } from '../../utils/MainApi';
import { filterMoviesByDuration, filterMoviesByName } from '../../utils/FilterFinder';
import './SavedMovies.css';

function SavedMovies(props) {

  const [isShorts, setShorts] = useState(false);
  const [listOfSavedMovies, setListOfSavedMovies] = useState(props.savedMovies);
  const [isReady, setIsReady] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    setListOfSavedMovies(props.savedMovies);
    setIsReady(true);
  }, [props.savedMovies])

  function handleGetMovies(movie, isShorts) {
    if (!movie || movie === ' ') {
      props.setIsInfoMessageOpen(true);
      props.setTextInfoMessage("Введите параметры поиска")
    } else {
      const filtredMovies = filterMoviesByName(props.savedMovies, movie);
      const shortsFiltredMovies = filterMoviesByDuration(filtredMovies);

      if (isShorts) {
        setListOfSavedMovies(shortsFiltredMovies);
        setIsReady(true);
        if (shortsFiltredMovies.length < 1) {
          setIsReady(false);
          setErrorMessage('По вашему запросу ничего не найдено');
        }
      } else {
        setListOfSavedMovies(filtredMovies);
        setIsReady(true);
        if (filtredMovies.length < 1) {
          setIsReady(false);
          setErrorMessage('По вашему запросу ничего не найдено');
        }
      }
    }
  }

  function handleDeleteMovie(movieId, saveSetter) {
    mainApi.deleteMovie(movieId)
      .then(() => {
        saveSetter(false);
        props.setSavedMovies((state) => state.filter((movie) => movie._id !== movieId));
        setListOfSavedMovies((state) => state.filter((movie) => movie._id !== movieId));
      })
      .catch((err) => console.log(err))
  }

  return (
    <main className='savedMovies'>
      <Search
        isShorts={isShorts}
        setShorts={setShorts}
        handleGetMovies={handleGetMovies}
        isInfoMessageOpen={props.isInfoMessageOpen}
        closeInfoMessage={props.closeInfoMessage}
        textIfnoMessage={props.textIfnoMessage}
      />
      {isReady
        ? <>
          <MoviesCardList
            deleteMovie={handleDeleteMovie}
            savedMovies={props.savedMovies}
            moviesList={listOfSavedMovies}
            isSavedMoviesPage={true} />
        </>
        : <>
          <span className='savedMovies__error'>{errorMessage}</span>
        </>
      }
      <MoviesCardList />

    </main>
  )
}

export default SavedMovies;
