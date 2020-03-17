import React from 'react';
import Tommy from '../../images/TommyAndElizabethComp1.png';
import Photos from "../../images.js";
// import './index.css'

console.log(Photos[0].image_src)

//Need to pass images, background color, and reverse images in as props.

function Card1( image_src,  reverse_url, backgroundColor) {
    return (
      <div className = 'direction'>
    <div className="Content Home card2">
      {/* <img src = {Photos[0].image_src} alt = 'Front' className = 'image-scale flex-center'></img> */}
      <img src = {Tommy} alt = 'Front' className = 'image-scale flex-center'></img>

    </div>
      <p>A 1908 Buick Model X Roadster, 4 Cylinder, 18 Horse Power. The rear seat was known as the mother-in-law seat.</p>
    </div>
    
    )
}

export default Card1