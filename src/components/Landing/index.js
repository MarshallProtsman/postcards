import React from "react";
import "./Landing.css";
import ReactFullpage from "@fullpage/react-fullpage";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import Photos from "../../images.json";

// import IsLoaded from "../IsLoaded";
import Card from "../Card";

import PaperBG from "../../images/assets/groovepaper/groovepaper.png";

// import config from "../../config/firebaseconfig";
// import firebase from "firebase/app";
import "firebase/database";

// import imageDataArr from "../../config/getFirebaseData";
// import getFirebaseData from "../../config/getFirebaseData";

// Background Image Styling
const CardStyle = {
  backgroundImage: `url(${PaperBG})`,
};

// function waitToLog(x) {
//   setTimeout(() => {
//     console.log(`wait to log ${x / 1000} seconds`);
//     console.log(imageDataArr);
//   }, x);
// }

// waitToLog(2000);

const Fullpage = () => (
  <ReactFullpage
    //fullpage options
    licenseKey={"494BD911-8A8E42B4-8F69FCD9-30D8E5A8"}
    scrollingSpeed={700} /* Options here */
    navigation={true}
    // onLeave={origin}
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section home-section" style={CardStyle} id="welcome">
            <div className="content-style">
              <div className="title">
                <p className="main-title">
                  Postcards<br></br>from<br></br>my<br></br>grandfather.
                </p>
                <br></br>
                <h4 className="flex-left subtitle">
                  The Stone Mountain Park Auto Museum
                </h4>
              </div>
              <div className="btm-cntr">
                <div
                  className="btm-cntr"
                  onClick={() => fullpageApi.moveSectionDown()}
                >
                  <p className="scroll">Scroll down</p>
                  <FontAwesomeIcon id="down-arrows" icon={faChevronDown} />
                  <p className="fas fa-sort-down" id="down-arrows"></p>
                </div>
              </div>
            </div>
          </div>

          {/* Mapping over DB to render postcard slides */}
          {/* <IsLoaded /> */}
          {Photos.map((photo, index) => {
              return (
                <div
                  className={`section flex-center section${index}`}
                  style={CardStyle}
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
            })
          }
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default Fullpage;
