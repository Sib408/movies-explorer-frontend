import React from 'react'

function AuthForm({ name, title, children, onSubmit }) {
  return (
    <div className='auth'>
      <h2 className={`auth__title auth__title_for_${name}`}>{title}</h2>
      <form className={`auth__form auth__form_for_${name}`} name={name} onSubmit={onSubmit}>
        {children}
      </form>
    </div>
  )
}

export default AuthForm;
