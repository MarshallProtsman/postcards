import React from "react";
import "./index.css";

function Card( props ) {
  const [side, setSide] = React.useState("front");
  const toBack = () => setSide("back");
  const toFront = () => setSide("front");

  return (
    <div className="direction">
      <div id="overlay">
      </div>
      <div className="card2 postcard">
              {side === "front"
              ? <img
              onClick={toBack}
              src={props.src1}
              alt={props.alt}
              className="image-scale flex-center"
            ></img>
              : <img
              onClick={toFront}
              src={props.src2}
              alt={props.alt}
              className="image-scale flex-center"
            ></img>}
      </div>
      <p>{props.text}</p>
    </div>
  );
}

export default Card;
