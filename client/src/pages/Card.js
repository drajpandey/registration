// src/components/Card.js

import React from 'react';
import './Card.css';
import {  Link } from 'react-router-dom';

const Card = ({ title, imageSrc, description,link }) => {
  return (
    <Link to={link} className="card-link">
    <div className="card">
      {/* <img src={imageSrc} alt={title} /> */}
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
    </Link>
  );
};

export default Card;
