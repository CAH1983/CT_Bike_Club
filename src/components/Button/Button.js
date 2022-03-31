import { faSort } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import './Button.css'

const sortCards = () => alert('sortcards!')

const Button = ({ buttonLabel }) => {
  return (
    <button className='button' onClick={() => sortCards()}>
      <FontAwesomeIcon icon={faSort} />
      {buttonLabel}
    </button>
  )
}

export default Button
