import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import './MoviesCard.css'
import baseLikeIcon from '../../../images/baseLike.svg';
import activeLikeIcon from '../../../images/activeLike.svg';
import deleteButton from '../../../images/delete_card.svg';

const MoviesCard = ({ duration, image, name }) => {
  const location = useLocation();
  const [isSaved, setIsSaved] = useState(false);


  function handleClick() {
    setIsSaved(!isSaved);
  }

  return (
    <article className="card">
      <img className='card__image' src={image} alt={name} />
      <div className='card__container'>
        <h2 className='card__title'>{name}</h2>

        {location.pathname === '/saved-movies' &&
          <button type='button' aria-label='удалить фильм' className='card__button' onClick={handleClick}>
            <img className='card__click card__click_delete' alt='удалить' src={deleteButton} />
          </button>}

        {location.pathname === '/movies' &&
          <button type='button' aria-label='сохранить' className={isSaved ? 'card__button' : 'card__button'}
            onClick={handleClick}>
            {isSaved ? <img className='card__click' alt='добавлено' src={activeLikeIcon} /> :
              <img className='card__add' alt='добавить' src={baseLikeIcon} />}</button>}
      </div>

      <p className='card__duration'>{duration}</p>
    </article>
  )
}

export default MoviesCard;
