import React from 'react';
import Front from '../../images/FrontComp1.png'
import './index.css'

function Card2( props ) {
    return (
      <div className = 'direction'>
    <div className="Content Home card2">
      <img src = {props.src} alt = {props.alt} className = 'image-scale flex-center'></img>

    </div>
    <p>{props.text}</p>
    </div>
    
    )
}

export default Card2