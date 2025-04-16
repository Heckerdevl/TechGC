import React from "react";
import "./Card.css";

function Card({ id, image, title, description, onClick }) {
  return (
    <div className="card" onClick={() => onClick(id)}>
      <div className="image-container">
        {/* <div className="net-overlay"></div> */}
        <img src={image} alt={title} />
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Card;
