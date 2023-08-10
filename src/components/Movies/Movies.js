import React from 'react';

import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import moviesList from '../../utils/constans';

const Movies = () => {
  return (
    <main className='movies'>
      <SearchForm />
      <MoviesCardList moviesList={moviesList} />
    </main>

  );
}

export default Movies;
