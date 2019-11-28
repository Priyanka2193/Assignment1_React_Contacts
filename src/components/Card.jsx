import React from "react";

function Card(props) {
  return (
    <div className="content">
      <div className="top">
        <h2>{props.name}</h2>
      </div>
      <div className="bottom">
        <p>{props.number}</p>
        <p>{props.email}</p>
      </div>
      <img className="image" src={props.img} alt="Contact1" />
    </div>
  );
}

export default Card;
