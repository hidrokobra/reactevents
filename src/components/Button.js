import React from 'react';
import './CSS/Button.css';
import { Link } from 'react-router-dom';

export function Button() {
  return (
    <Link to='sign-up'>
      <button className='btn'>Log out</button>
    </Link>
  );
}
