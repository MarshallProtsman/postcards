import React from "react";
import "./index.css";
import Loading from "../Loading";
// import Loaded from "../Loaded";
import Card from "../Card";
import Loaded from "../Loaded";
import Wrapper from "../Wrapper"

// import Photos from "../../images.json"

import config from "../../config/firebaseconfig";
import firebase from "firebase/app";
import "firebase/database";

// let imageDataArr = [];

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
    const ref = db.ref("/postcards/");

    // make the following return a promise?

    ref.once("value", (ss) => {
      let dataNew = ss.val();
      console.log("firebase returned data below");
      console.log(dataNew);
      this.setState({
        data: dataNew,
        isLoaded: true,
      });
    });
  }

  render() {
    // console.log(this.state.isLoaded);
    // let isLoaded = this.state.isLoaded;
    // if (isLoaded) {
    //   console.log("rendered");
    //   return <Loading />;
    // } else console.log("re-rendered");
    // return <Loaded />;
  return  <Card />
  }
}



    
      // return (isLoaded ? <Loaded /> : <Loading />)

    // return this.state.data.map((photo, index) => {
    //     <div
    //       className={`section section${index}`}
    //       // style={CardStyle}
    //       key={index}
    //     >
    //       <Card
    //         src1={photo.image_src}
    //         src2={photo.image_reverse}
    //         alt={photo.alt}
    //         text={photo.description}
    //       />
    //     </div>
    // })
  // }