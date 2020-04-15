import React from "react";
import Photos from "../../images";



console.log(`>>>> ${Photos[0].alt}`);

class ImageSections extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      photos: { Photos }
    }
  }
}

function ImageSection( { Photos } ) {

  return (
  <ul>
    {Photos.map((photo, index) => {
    const {
      image_src, alt, description
    } = photo

  })}
  </ul>
  )
}

export default ImageSection;
