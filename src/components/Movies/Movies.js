import React from 'react';

import Search from './Search/Search';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import moviesList from '../../utils/constans';

import './Movies.css';

const Movies = () => {
  return (
    <main className='movies'>
      <Search />
      <MoviesCardList moviesList={moviesList} />
      <button className='movies__button' aria-label='Загрузить ещё' type='button'>Ещё</button>
    </main>

  );
}

export default Movies;
