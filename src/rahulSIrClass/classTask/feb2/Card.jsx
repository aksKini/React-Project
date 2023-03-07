import React from "react";
import STYLE from "./cardModule.css"


function Card(props) {
  return <div className={`${STYLE.card} ${props.className}`}>{props.children}</div>;
}

export default Card;