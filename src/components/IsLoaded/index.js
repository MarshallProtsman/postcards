import React from "react";
import "./index.css";
import Loading from "../Loading";
// import Loaded from "../Loaded";
import Card from "../Card";

// import Photos from "../../images.json"

import config from "../../config/firebaseconfig";
import firebase from "firebase/app";
import "firebase/database";

let imageDataArr = [];

export default class DataLoaded extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      data: [],
    };
  }

  componentDidMount() {
    const app = firebase.initializeApp(config);
    const db = app.database();

    console.log(`this.state.data`);
    console.log(this.state.data);
    console.log(`this.state.data`);

    db.ref("/postcards/").on("value", (querySnapShot) => {
      imageDataArr = querySnapShot.val();
    });

    // needs to return a promise and do .then(this.setState()) ???

    // this.setState({ isLoaded: true, data: imageDataArr });

    console.log(imageDataArr);
    console.log(this.state.data);
    console.log(this.state.isLoaded);
  }

  render() {
    if (!this.state.isLoaded) {
      return <Loading />;
    } else {
      return this.state.data.map((photo, index) => {
        return (
          <div
            className={`section section${index}`}
            // style={CardStyle}
            key={index}
          >
            <Card
              src1={photo.image_src}
              src2={photo.image_reverse}
              alt={photo.alt}
              text={photo.description}
            />
          </div>
        );
      });
    }
  }
}
