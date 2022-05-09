import React from 'react';
import './Button.css';
import { DogContext } from '../DogCodeContext/DogContext';
import { Link } from 'react-router-dom';

export function Button(props) {
  const { openModal } = React.useContext(DogContext)

  return (
    <Link to=''>
      <button className='btn' onClick={openModal}>Sign In</button>
    </Link>
  );
}