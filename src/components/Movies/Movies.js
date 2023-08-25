import React from 'react';

import Search from './Search/Search';
import Preloader from './Preloader/Preloader'
import MoviesCardList from './MoviesCardList/MoviesCardList';
// import moviesList from '../../utils/constans';

import './Movies.css';

const Movies = ({
  onSearch,
  loading,
  isSearchDone,
  searchStatus,
  renderedMovies,
  savedMovies,
  onSaveMovie,
  onDeleteMovie,
  moreLoadingButton,
  onRenderMovies,
}) => {
  return (
    <main className='movies'>

      <Search onSearch={onSearch} />
      {loading ?
        <div className="movies__preloader">
          <Preloader />
        </div>
        : isSearchDone
          ? renderedMovies.length > 0
            ? <MoviesCardList
              movies={renderedMovies}
              savedMovies={savedMovies}
              onSaveMovie={onSaveMovie}
              onDeleteMovie={onDeleteMovie}
              loading={loading}
              isSearchDone={isSearchDone}
              onRenderMovies={onRenderMovies}
              moreLoadingButton={moreLoadingButton}
            />
            // <MoviesCardList moviesList={moviesList} />
            : (!loading ?
              <div className="movies__container">
                <span className="movies__text">Ничего не найдено</span>
              </div>
              :
              <div className="movies__container">
                <span className="movies__text">{searchStatus}</span>
              </div>
            )
          : ("")
      }
      {/* <button className='movies__button' aria-label='Загрузить ещё' type='button'>Ещё</button> */}
    </main>

  );
}

export default Movies;
