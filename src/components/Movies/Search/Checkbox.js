import React from 'react';

import './Checkbox.css'

function Checkbox(props) {
  return (
    <div className='search__checkbox'>
      <label className="checkbox__container">
        <input className="checkbox__container-input"
          type="checkbox"
          name="checkbox"
          checked={props.isChecked}
          onChange={props.handlerCheck} />
        <span className="checkbox__slider"></span>
      </label>
      <span className='checkbox__text'>Короткометражки</span>
    </div>

  )
}

export default Checkbox;
