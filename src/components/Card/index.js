import React from "react";
import "./index.css";

function Card2(props) {
  const [side, setSide] = React.useState("front");
  console.log(side);
  const toBack = () => setSide("back");
  const toFront = () => setSide("front");

  return (
    <div className="direction">
      <div className="card2">
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

export default Card2;