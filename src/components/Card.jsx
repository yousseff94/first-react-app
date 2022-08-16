import React from "react";
import "../styles/card.css";
import "../styles/home.css";
export default function Card(props) {
  return (
    
      <article style={{flexBasis:"30%"}}>
        <img
          src={props.img }
         
        />
        <h3>{props.title}</h3>
        <p>{props.parag}</p>
      </article>
    
  );
}
