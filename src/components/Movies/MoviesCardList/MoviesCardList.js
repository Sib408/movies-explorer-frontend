import React from 'react';

import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';


function MoviesCardList(props) {

  return (
    <section className='movieCardList'>
      <div className='movieCardList__container'>
        {props.moviesList && props.moviesList.map((card) => (
          <MoviesCard
            isSavedMoviesPage={props.isSavedMoviesPage}
            deleteMovie={props.deleteMovie}
            savedMovies={props.savedMovies}
            saveMovie={props.saveMovie}
            card={card}
            key={card.id || card._id}

          />
        ))}

      </div>
    </section>
  );
};
export default MoviesCardList;
