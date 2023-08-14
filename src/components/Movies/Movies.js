import React from 'react';

import Search from './Search/Search';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import moviesList from '../../utils/constans';

const Movies = () => {
  return (
    <main className='movies'>
      <Search />
      <MoviesCardList moviesList={moviesList} />
    </main>

  );
}

export default Movies;
