import React from 'react';
import { useLocation } from 'react-router-dom';
import { MOVIES_URL } from '../../../utils/constans';

import './MoviesCard.css'
import baseLikeIcon from '../../../images/baseLike.svg';
import activeLikeIcon from '../../../images/activeLike.svg';
import deleteButton from '../../../images/delete_card.svg';

function MoviesCard({ movie, savedMovies, onSaveMovie, onDeleteMovie }) {
  const location = useLocation();
  const savedMovie = savedMovies.find((m) => m.movieId === movie.id);


  const isSaved = movie.id ? savedMovie : location.pathname === '/saved-movies'

  //длительность фильма
  const hours = Math.floor(movie.duration / 60);
  const minutes = movie.duration % 60;

  //открыть фильм в новом окне
  function onClickLink(url) {
    return () => window.open(url, '_blank', 'noopener noreferrer')
  }

  //удалить фильм
  function handleDeleteMovie() {
    onDeleteMovie(movie);
  }

  //сохранить фильм
  function handleSaveMovie() {
    if (!savedMovie) {
      onSaveMovie({
        country: String(movie.country),
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: `${MOVIES_URL}${movie.image.url}`,
        trailerLink: movie.trailerLink,
        thumbnail: `${MOVIES_URL}${movie.image.formats.thumbnail.url}`,
        movieId: movie.id,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
      });
    } else {
      onDeleteMovie(savedMovies.filter((m) => m.movieId === movie.id)[0]);
    }
  }

  return (
    <article className='card'>

      <a className='card__link'
        href={movie.trailerLink}
        onClick={onClickLink}
      >
        <img className='card__image'
          src={(typeof movie.image === 'string') ? movie.image : `${MOVIES_URL}${movie.image.url}`}
          alt={`Постер фильма ${movie.nameRU}`}
        />
      </a>
      <div className='card__container'>
        <h2 className='card__title'>{movie.nameRU}</h2>

        {location.pathname === '/saved-movies' &&
          <button type='button'
            aria-label='удалить фильм'
            className={isSaved ? 'card__button' : 'card__button'}
            onClick={handleDeleteMovie}
          >
            {isSaved ? <img className='card__click card__click_delete'
              alt='удалить'
              src={deleteButton} /> : ""}
          </button>
        }

        {location.pathname === '/movies' &&
          <button type='button'
            aria-label='сохранить'
            className={isSaved ? 'card__button' : 'card__button'}
            onClick={handleSaveMovie}
          >
            {isSaved ? <img className='card__click' alt='добавлено' src={activeLikeIcon} /> :
              <img className='card__add' alt='добавить' src={baseLikeIcon} />}</button>
        }
      </div>
      <p className='card__duration'>{hours !== 0 ? `${hours}ч` : ""} {minutes !== 0 ? `${minutes}м` : ""}</p>

    </article>
  );
};

export default MoviesCard;
