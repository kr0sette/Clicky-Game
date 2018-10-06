import React from "react";
import "./Card.css";


const Card = props => (
    <div 
        className="card" 
        value={props.id}
        onClick = {() => props.handleClick(props.id)}
    >
        <img src={props.image} alt="" />
    </div>
);

export default Card;