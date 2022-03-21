import React from 'react'
import './Header.css';
import Button from '../Button/Button';
import { useState } from 'react';

const Header = () => {
  const [buttonText,setButtonText] = useState('sorted');

  return (
    <header className="App-header">
      <h1>My contacts book</h1>
      <Button buttonLabel={'Sort A-Z'} onClick />
    </header>
  )
}

export default Header
