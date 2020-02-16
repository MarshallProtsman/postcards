import React from "react";
import "./Landing.css";
import ReactFullpage from "@fullpage/react-fullpage";
import Home from "../Home";
import Front from '../Card2'
import Content from "../Content";
// import NavMenu from '../NavMenu'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
// import NavBar from '../NavMenu';

// const scroll = {
//   display: "inline",
//   padding: "5px"
// };

// const contentStyle = {
//   display: "flex",
//   // flexDirection: 'row',
//   justifyContent: "space-around",
//   alignItems: "center",
//   height: "80vh",
//   width: "92vw",
//   marginTop: '20px',
//   borderStyle: "solid",
//   borderWidth: "1px"
// };

// const btmCntr = {
//   display: "flex",
//   flexDirection: "column",
//   justifyContent: "flex-end",
//   alignItems: "center",
//   paddingRight: "6vw"
//   /* padding-left: '39vw' */
// };

const Fullpage = () => (
  <ReactFullpage
    //fullpage options
    licenseKey={"YOUR_KEY_HERE"}
    scrollingSpeed={700} /* Options here */
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section" id="welcome">
            <Content />
            <div className="content-style">
            {/* <NavMenu /> */}
              <div className="title">
                <h2>Postcards</h2>
                <h4>Stone Mountain Park Auto Museum</h4>              
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
          <div className="section">
            <Home />
          </div>
          <div className="section">
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
