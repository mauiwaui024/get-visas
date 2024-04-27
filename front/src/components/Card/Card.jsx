import React from 'react';
import './Card.css';

const Card = ({ header, text }) => {
  return (
    <div className="card">
      <h2>{header}</h2>
      <p>{text}</p>
    </div>
  );
};

export default Card;