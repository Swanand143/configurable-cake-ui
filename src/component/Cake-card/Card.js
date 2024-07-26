import React from "react";
import config from './../../config.json'
import './Card.css'

function Card({id, title, previewDescription, detailDescription, image, price }) {
  const headingStyle = {
    color: config.themeColors.headingColor
  };
  const cardbodycolor = {
    backgroundColor: config.themeColors.cakeCardbg
  };
  return (
    <div className="card" style={cardbodycolor} key={id}>
      <div className="card-body">
        <div className="card-image-container">
        <img className="card-image" src={image} alt={title} />
        </div>
        <h3
          className="card-title"
          style={headingStyle}>
          {title}
        </h3>
        <p className="card-description"> {previewDescription} </p>
        <p className="card-text"> Price: ₹{price} </p>
      </div>
    </div>
  );
}

export default Card;
