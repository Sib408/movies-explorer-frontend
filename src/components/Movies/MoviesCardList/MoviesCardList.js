import React from 'react';

import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';


function MoviesCardList({ moviesList }) {
  return (
    <section className='movieCardList'>
      <div className='movieCardList__container'>
        {moviesList.map((card) => (
          <MoviesCard key={card.movieId}
            movieId={card.movieId}
            duration={card.duration}
            image={card.image}
            name={card.nameRU} />
        ))}
      </div>
      <button className='movieCardList__button' aria-label='Загрузить ещё' type='button'>Ещё</button>
    </section>
  );
};

export default MoviesCardList;
