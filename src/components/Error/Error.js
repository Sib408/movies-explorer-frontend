import React from 'react';

import './Error.css'

function Error({ errorMessage }) {
  return (
    <span className='error error_visible'>{errorMessage}</span>
  )

}

export default Error;
