import React, { useEffect, useState } from 'react';

import Search from './Search/Search';
import Preloader from './Preloader/Preloader'
import MoviesCardList from './MoviesCardList/MoviesCardList';
import {
  MAX_ADD_MOVIES, MAX_INITIAL_MOVIES,
  MAX_WIDTH_SCREEN, MEDIUM_INITIAL_MOVIES,
  MEDIUM_WIDTH_SCREEN, MIN_ADD_MOVIES,
  MIN_INITIAL_MOVIES
} from '../../utils/constans';
import useCurrentWidth from '../../hooks/useCurrentWidth';
import { filterMoviesByDuration, filterMoviesByName } from '../../utils/FilterFinder';
import { mainApi } from '../../utils/MainApi'
import moviesApi from '../../utils/MoviesApi'
import './Movies.css';

function Movies(props) {
  const [shownMovies, setShownMovies] = useState([]);
  const [initialMovies, setInitialMovies] = useState(0);
  const [additionalMovies, setAdditionalMovies] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [lastSearchFilm, setLastSearchFilm] = useState('');
  const [isReadyMovie, setIsReadyMovie] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isShorts, setShorts] = useState(false);
  let allMovies = localStorage.getItem('allMovies');
  const allData = localStorage.getItem('allData');
  let filtredMovies = JSON.parse(allData)?.filtredMovies || [];
  let shortFiltredMovies = JSON.parse(allData)?.shortFiltredMovies || [];
  const widthBrowser = useCurrentWidth();
  const moviesCount = initialMovies + additionalMovies * pageCount;


  useEffect(() => {
    if (widthBrowser >= MAX_WIDTH_SCREEN) {
      setInitialMovies(MAX_INITIAL_MOVIES);
      setAdditionalMovies(MAX_ADD_MOVIES);
    } else if (widthBrowser > MEDIUM_WIDTH_SCREEN && widthBrowser < MAX_WIDTH_SCREEN) {
      setInitialMovies(MEDIUM_INITIAL_MOVIES);
      setAdditionalMovies(MIN_ADD_MOVIES);
    } else if (widthBrowser <= MEDIUM_WIDTH_SCREEN) {
      setInitialMovies(MIN_INITIAL_MOVIES);
      setAdditionalMovies(MIN_ADD_MOVIES);
    }
  }, [widthBrowser]);

  useEffect(() => {
    if (allData) {
      setLastSearchFilm(JSON.parse(allData)?.film);
      setShorts(JSON.parse(allData)?.isShorts);
    }
  }, [])

  useEffect(() => {
    if (!errorMessage) {
      setIsReadyMovie(true);
      isShorts
        ? setShownMovies(shortFiltredMovies.slice(0, moviesCount))
        : setShownMovies(filtredMovies.slice(0, moviesCount))
    }
  }, [isShorts, moviesCount, errorMessage])

  useEffect(() => {
    if (allData) {
      const updateAllData = JSON.parse(allData);
      updateAllData.isShorts = isShorts;
      localStorage.setItem('allData', JSON.stringify(updateAllData))
    }
  }, [isShorts, allData])

  function removeStorageMovies() {
    localStorage.removeItem('allMovies');
  }

  useEffect(() => {
    window.addEventListener('beforeunload', removeStorageMovies);
    return () => {
      window.removeEventListener('beforeunload', removeStorageMovies);
    }
  }, [])

  async function handleGetMovies(film, isShorts) {
    if (!film || film === ' ') {
      props.setIsInfoMessageOpen(true);
      props.setTextInfoMessage("Введите параметры поиска")
    } else {
      try {
        setIsLoading(true);
        setPageCount(0)
        if (!allMovies) {
          const allMoviesData = await moviesApi.getMovies();
          localStorage.setItem('allMovies', JSON.stringify(allMoviesData));
          allMovies = localStorage.getItem('allMovies');
        }

        filtredMovies = filterMoviesByName(JSON.parse(allMovies), film);
        shortFiltredMovies = filterMoviesByDuration(filtredMovies);
        const allData = {
          filtredMovies,
          shortFiltredMovies,
          film,
          isShorts
        };
        localStorage.setItem('allData', JSON.stringify(allData));

        if (isShorts) {
          setShownMovies(shortFiltredMovies.slice(0, initialMovies));
          setIsReadyMovie(true);
          if (shortFiltredMovies.length < 1) {
            setIsReadyMovie(false);
            setErrorMessage('По вашему запросу ничего не найдено');
          }
        } else {
          setShownMovies(filtredMovies.slice(0, initialMovies));
          setIsReadyMovie(true);
          if (filtredMovies.length < 1) {
            setIsReadyMovie(false);
            setErrorMessage('По вашему запросу ничего не найдено');
          }
        }
        setIsLoading(false);
      } catch (err) {
        setShownMovies([]);
        setIsReadyMovie(false);
        setErrorMessage(
          'Во время запроса произошла ошибка.Подождите немного и попробуйте ещё раз')
        setIsLoading(false);
      }
    }
  }

  function moreContent() {
    setPageCount((count) => count + 1);
  }

  function saveMovie(movie, saveSetter) {
    mainApi.saveMovie(movie)
      .then((res) => {
        props.setSavedMovies([...props.savedMovies, res]);
        saveSetter(true);
      })
      .catch((err) => console.log(err))
  }

  function handleDeleteMovie(movieId, saveSetter) {
    const currentMovie = props.savedMovies.find((movie) => movie.movieId === movieId);
    mainApi.deleteMovie(currentMovie._id)
      .then(() => {
        saveSetter(false);
        props.setSavedMovies((state) => state.filter((movie) => movie._id !== currentMovie._id));
      })
      .catch((err) => console.log(err))
  }

  return (
    <main className='movies'>
      <Search
        isLoading={isLoading}
        isShorts={isShorts}
        setShorts={setShorts}
        lastSearchFilm={lastSearchFilm}
        handleGetMovies={handleGetMovies}
      //  isInfoMessageOpen={props.isInfoMessageOpen}
      //  closeInfoMessage={props.closeInfoMessage}
      //  textIfnoMessage={props.textIfnoMessage}
      />
      {isLoading
        ? <Preloader />
        : isReadyMovie

          ?
          <>
            <MoviesCardList
              deleteMovie={handleDeleteMovie}
              savedMovies={props.savedMovies}
              saveMovie={saveMovie}
              moviesList={shownMovies}
              isSavedMoviesPage={false} />

            <button onClick={moreContent} type='button'
              className={`film-content__more ${isShorts ? moviesCount >= shortFiltredMovies.length && 'film-content__more_none-display' : moviesCount >= filtredMovies.length && 'film-content__more_none-display'}`}>Ещё</button>
          </>
          : <>
            <h2 className='film-content__error'>{errorMessage}</h2>
          </>
      }
    </main>

  );
}

export default Movies;
