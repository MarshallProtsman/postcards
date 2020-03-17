import React from "react";
import "./Landing.css";
import ReactFullpage from "@fullpage/react-fullpage";
import Home from "../Card";
import Front from '../Card2'
import Content from "../Content";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";


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
                <h4>The Stone Mountain Auto & Music  Museum</h4>              
            </div>
            <div className = 'btm-cntr'>
            <div className='btm-cntr' onClick={() => fullpageApi.moveSectionDown()}>
              <p className= 'scroll'>Scroll down</p>
              <FontAwesomeIcon id="down-arrows" icon={faChevronDown} />
              <p className="fas fa-sort-down" id="down-arrows"></p>
            </div>
            </div>
            </div>
          </div>
          <div className="section section2">
            <Home />
          </div>
          <div className="section section3">
          <div className="ContentStyle">
            <Front />

              </div>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default Fullpage;
