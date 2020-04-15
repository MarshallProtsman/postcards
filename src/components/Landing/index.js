import React from "react";
import "./Landing.css";
import ReactFullpage from "@fullpage/react-fullpage";
// import Home from "../Card2";
import Card from "../Card2";
import Content from "../Content";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Photos from "../../images.js";

import PaperBG from "../../images/assets/groovepaper/groovepaper.png"
// import PaperBG from "../../images/assets/embossed_paper/embossed_paper.png"
// import PaperBG from "../../images/assets/lightpaperfibers/lightpaperfibers_@2X.png"

const CardStyle = {
  backgroundImage : 'url(' + PaperBG + ')',
};
// import ImageSection from "../Card"

// class Card extends React.Component {
//   constructor(props){
//     super(props);

//     this.state = {
//       photos: {
//         Photos
//       }
//     }
//     return(
//       <>
//       <div>
//         Hello
//         </div>
//       </>
//     )
//   }
// }

// function Card( { photo } )

const Fullpage = () => (
  <ReactFullpage
    //fullpage options
    licenseKey={"YOUR_KEY_HERE"}
    scrollingSpeed={700} /* Options here */
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section home-section" id="welcome" style = {CardStyle}>
            <Content/>
            <div className="content-style">
              {/* <NavMenu /> */}
              <div className="title">
                <h2>Postcards from:</h2>
                <h4>The Stone Mountain Auto & Music Museum</h4>
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
          <div className="section section2" style = {CardStyle}>
            {/* <Card /> */}
            {/* <ImageSection /> */}
            <Card
              src={Photos[0].image_src}
              alt={Photos[0].alt}
              text={Photos[0].description}
            />
          </div>
          <div className="section section3">
            <div className="ContentStyle">
              <Card
                src={Photos[1].image_src}
                alt={Photos[1].alt}
                text={Photos[1].description}
              />
            </div>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default Fullpage;
