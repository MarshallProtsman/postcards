import React from 'react';
import Front from '../../images/Front.png'
import './index.css'

function Card2( props ) {
    return (
      <div className = 'direction'>
    <div className="Content Home card2">
      <img src = {Front} alt = 'Front' className = 'image-scale flex-center'></img>

    </div>
      <p>A 1933 model C Ford Roadster and a 1930 Rolls Royce Town Car, 20-25 Series.</p>
    </div>
    
    )
}

export default Card2