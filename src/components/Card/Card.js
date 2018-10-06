import React from "react";
import "./Card.css";


const Card = props => (
    <div className="card" value={props.id}>
        <img src={props.image} />
    </div>
);

export default Card;