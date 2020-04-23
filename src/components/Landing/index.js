import React from "react";
import "./Landing.css";
import ReactFullpage from "@fullpage/react-fullpage";
import Content from "../Content";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Photos from "../../images.js";

// import Card1 from "../Card"
import Card2 from "../Card";

import PaperBG from "../../images/assets/groovepaper/groovepaper.png";
// import PaperBG from "../../images/assets/embossed_paper/embossed_paper.png"
// import PaperBG from "../../images/assets/lightpaperfibers/lightpaperfibers_@2X.png"

// Background Image Styling
const CardStyle = {
  backgroundImage: "url(" + PaperBG + ")",
};

const Fullpage = () => (
  <ReactFullpage
    //fullpage options
    licenseKey={"YOUR_KEY_HERE"}
    scrollingSpeed={700} /* Options here */
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section home-section" style={CardStyle} id="welcome">
            <Content />
            <div className="content-style">
              {/* <NavMenu /> */}
              <div className="title">
                {/* <p className="main-title">POSTCARDS<br></br>FROM<br></br>MY<br></br>GRANDFATHER</p> */}
                <p className="main-title">Postcards<br></br>from<br></br>my<br></br>grandfather.</p>
                <br></br>
                <h4 className="flex-left">The Stone Mountain Park Auto & Music Museum</h4>
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
                  src1={photo.image_src}
                  src2={photo.image_reverse}
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
