import './InfoError.css';

export function InfoError(props) {

  return (
    <div className={props.isInfoErrorOpen ? 'info-error' : 'info-error_hidden'}>
      <h2 className='info-error__text'>{props.textInfoError}</h2>
      <button onClick={props.closeInfoError} className='info-error__button'>Ok</button>
    </div>
  )
}
