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

    // make the following return a promise?

    function getTheData() {
      return new Promise(function (resolve, reject) {
        db.ref("/postcards/")
          .once("value")
          .then(function (snapshot) {
            imageDataArr = snapshot.val();
            console.log(imageDataArr); // still logging the datat I want
            if (imageDataArr !== []) {
              return resolve();
            } else {
              return reject();
            }
            // giving error "Cannot read property 'setState' of undefined"
          });
      });
    }

    getTheData().then(console.log("Resolved"));

    // db.ref("/postcards/").on("value", (querySnapShot) => {
    //   imageDataArr = querySnapShot.val();
    //   console.log(imageDataArr);  // Logs the data I want :)
    // });

    // ?? maybe needs to return a promise and do .then(this.setState()) ???
    console.log(this.state.data); // logs []
    console.log(this.state.isLoaded); // logs false
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
