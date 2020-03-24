import React from 'react';
import Photos from "../../images.js";
// import Tommy from '../../images/TommyAndElizabethComp1.png';
// import './index.css'

console.log(Photos[0].image_src)

//Need to pass images, background color, and reverse images in as props.

function Card1( props ) {
    return (
      <div className = 'direction'>
    <div className="Content Home card2">
      <img src = {props.src} alt = {props.alt} className = 'image-scale flex-center'></img>
      {/* <img src = {Tommy} alt = 'Front' className = 'image-scale flex-center'></img> */}

    </div>
    <p>{props.text}</p>
    </div>
    
    )
}

export default Card1