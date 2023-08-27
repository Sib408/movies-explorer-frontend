import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
import { MOVIES_URL } from '../../../utils/constans';

import './MoviesCard.css'
// import baseLikeIcon from '../../../images/baseLike.svg';
// import activeLikeIcon from '../../../images/activeLike.svg';
// import deleteButton from '../../../images/delete_card.svg';

function MoviesCard(props) {
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    if (props.savedMovies.some((movie) => movie.movieId === props.card.id)) {
      setIsSaved(true);
    }
  }, [props.savedMovies, props.card.id]);

  //длительность фильма
  const hours = Math.floor(props.card.duration / 60);
  const minutes = props.card.duration % 60;


  function onClickLink(url) {
    return () => window.open(url, '_blank', 'noopener noreferrer')
  }

  function handleDeleteMovie() {
    props.deleteMovie(props.card.id || props.card._id, setIsSaved);
  }

  function handleSaveMovie() {
    const dataOfMovie = {
      country: props.card.country,
      director: props.card.director,
      duration: props.card.duration,
      year: props.card.year,
      description: props.card.description,
      image: props.card.image,
      trailerLink: props.card.trailerLink,
      thumbnail: props.card.thumbnail,
      movieId: props.card.id,
      nameRU: props.card.nameRU,
      nameEN: props.card.nameEN,
    };
    props.saveMovie(dataOfMovie, setIsSaved);
  }




  return (
    <article className='card'>

      <a className='card__link'
        href={props.card.trailerLink}
        onClick={onClickLink}
      >
        <img className='card__image'
          src={props.isSavedMoviesPage ? `${props.card.image}` : `${MOVIES_URL}${props.card.image.url}`}
          alt={props.card.nameRU}
        // src={(typeof movie.image === 'string') ? movie.image : `${MOVIES_URL}${movie.image.url}`}
        // alt={`Постер фильма ${props.card.nameRU}`}
        />
      </a>
      <div className='card__container'>
        <h2 className='card__title'>{props.card.nameRU}</h2>
        <button
          onClick={props.isSavedMoviesPage ? handleDeleteMovie : isSaved ? handleDeleteMovie : handleSaveMovie}
          className={`card__click ${props.isSavedMoviesPage ? 'card__click_delete' : isSaved && 'card__add'}`}
          type="button" aria-label="Добавить в сохранённые фильмы или удалить"></button>
        {/* {location.pathname === '/saved-movies' &&
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
        } */}
      </div>
      <p className='card__duration'>{hours !== 0 ? `${hours}ч` : ""} {minutes !== 0 ? `${minutes}м` : ""}</p>

    </article>
  );
};

export default MoviesCard;
