import React from 'react';
import Front from '../../images/TommyAndElizabeth.png'
// import './index.css'

//Need to pass images, background color, and reverse images in as props.

function Card1( image_url,  reverse_url, backgroundColor) {
    return (
      <div className = 'direction'>
    <div className="Content Home card2">
      <img src = {Front} alt = 'Front' className = 'image-scale flex-center'></img>

    </div>
      <p>A 1908 Buick Model X Roadster, 4 Cylinder, 18 Horse Power. The rear seat was known as the mother-in-law seat.</p>
    </div>
    
    )
}

export default Card1