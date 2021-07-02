import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

export const LinkButton = ({ displayText, destination, isActive }) => {
  return (
    <Link to={destination} className={`link-button ${isActive && 'active'}`}>
      <div className={`link-text ${isActive && 'active'}`}>{displayText}</div>
    </Link>
  );
};
