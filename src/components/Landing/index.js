import React from "react";
import "./Landing.css";
import ReactFullpage from "@fullpage/react-fullpage";
import Content from "../Content";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Photos from "../../images.js";

// import Card1 from "../Card"
import Card2 from "../Card2";

import PaperBG from "../../images/assets/groovepaper/groovepaper.png";
// import PaperBG from "../../images/assets/embossed_paper/embossed_paper.png"
// import PaperBG from "../../images/assets/lightpaperfibers/lightpaperfibers_@2X.png"

// Background Image Styling
const CardStyle = {
  backgroundImage: "url(" + PaperBG + ")",
};

this.state = {
  clicked: false
}

const Fullpage = () => (
  <ReactFullpage
    //fullpage options
    licenseKey={"YOUR_KEY_HERE"}
    scrollingSpeed={700} /* Options here */
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section home-section" id="welcome">
            <Content />
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

          {Photos.map((photo, index) => {
            return (
              <div className={`section section${index}`} style={CardStyle}>
                <Card2
                  src={this.state.clicked === true ? photo.image_src : photo.image_reverse}
                  // src={photo.image_src}
                  alt={photo.alt}
                  text={photo.description}
                />
              </div>
            );
          })}

         
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default Fullpage;