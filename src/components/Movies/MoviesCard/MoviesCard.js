import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { MOVIES_API } from '../../../utils/constans';

import './MoviesCard.css'
import baseLikeIcon from '../../../images/baseLike.svg';
import activeLikeIcon from '../../../images/activeLike.svg';
import deleteButton from '../../../images/delete_card.svg';

const MoviesCard = ({ movie, savedMovies, onSaveMovie, onDeleteMovie }) => {
  const location = useLocation();

  // const [isSaved, setIsSaved] = useState(false);
  const savedMovie = savedMovies.find((m) => m.movieId === movie.id);
  const isSaved = movie.id ? savedMovie : location.pathname === '/saved-movies'


  const hours = Math.floor(movie.duration / 60);
  const minutes = movie.duration % 60;

  function onClickLink(url) {
    return () => window.open(url, '_blank', 'noopener noreferrer')
  }

  function handleDeleteMovie() {
    onDeleteMovie(movie);
  }

  function handleSaveMovie() {
    if (!savedMovie) {
      onSaveMovie({
        country: String(movie.country),
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: `${MOVIES_API.baseUrl}${movie.image.url}`,
        trailerLink: movie.trailerLink,
        thumbnail: `${MOVIES_API.baseUrl}${movie.image.formats.thumbnail.url}`,
        movieId: movie.id,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
      });
    } else {
      onDeleteMovie(savedMovies.filter((m) => m.movieId === movie.id)[0]);
    }
  }
  // function handleClick() {
  //   setIsSaved(!isSaved);
  // }

  return (
    <article className="card">
      <a className='card__link'
        href={movie.trailerLink}
        onClick={onClickLink}
      >
        <img className='card__image' src={(typeof movie.image === 'string') ? movie.image : `${MOVIES_API.baseUrl}${movie.image.url}`} alt={`Постер фильма ${movie.nameRU}`} />
      </a>
      <div className='card__container'>
        <h2 className='card__title'>{movie.nameRU}</h2>

        {location.pathname === '/saved-movies' &&
          <button type='button' aria-label='удалить фильм' className={isSaved ? 'card__button' : 'card__button'} onClick={handleDeleteMovie}>
            {isSaved ? <img className='card__click card__click_delete' alt='удалить' src={deleteButton} /> : ""}
          </button>}

        {location.pathname === '/movies' &&
          <button type='button' aria-label='сохранить' className={isSaved ? 'card__button' : 'card__button'}
            onClick={handleSaveMovie}>
            {isSaved ? <img className='card__click' alt='добавлено' src={activeLikeIcon} /> :
              <img className='card__add' alt='добавить' src={baseLikeIcon} />}</button>}
      </div>

      <p className='card__duration'>{hours !== 0 ? `${hours}ч` : ""} {minutes !== 0 ? `${minutes}м` : ""}</p>
    </article>
  )
}

export default MoviesCard;
