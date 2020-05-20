import React from "react";
import "./index.css";

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      toggleFrontClass: "active",
      toggleRearClass: "inactive"
    };
  }

  handleClick() {
    // this.setState({ displayFront: "none", displayRear: "" });
    this.state.toggleFrontClass === "active"
      ? this.setState({ toggleFrontClass: "inactive",  toggleRearClass: "active" })
      : this.setState({ toggleRearClass: "inactive", toggleFrontClass: "active" });
  }

  render() {
    return (
      <div className="direction flex-center">
        <div id="overlay"></div>
        <div className="card2 postcard">
          <img
            className={`image-scale flex-center ${this.state.toggleFrontClass}`}
            onClick={this.handleClick}
            src={this.props.src1}
            alt={this.props.alt}
          ></img>
          <img
            className={`image-scale flex-center ${this.state.toggleRearClass}`}
            onClick={this.handleClick}
            src={this.props.src2}
            alt={this.props.alt}
          ></img>
        </div>
        <br></br>
        <p className="flex-center">{this.props.text}</p>
      </div>
    );
  }
}
