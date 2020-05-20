import React from "react";
import "./index.css";

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      toggleFrontClass: "active",
      toggleRearClass: "inactive",
    };
  }

  handleClick() {
    // this.setState({ displayFront: "none", displayRear: "" });
    this.state.toggleFrontClass === "active"
      ? this.setState({
          toggleFrontClass: "inactive",
          toggleRearClass: "active",
        })
      : this.setState({
          toggleRearClass: "inactive",
          toggleFrontClass: "active",
        });
  }

  render() {
    return (
      <div className="flex-center">
        <div className="postcard flex-center">
          <div className="flex-child">
            <img
              className={`flex-child image-scale ${this.state.toggleFrontClass}`}
              onClick={this.handleClick}
              src={this.props.src1}
              alt={this.props.alt}
            ></img>
            <img
              className={`image-scale ${this.state.toggleRearClass}`}
              onClick={this.handleClick}
              src={this.props.src2}
              alt={this.props.alt}
            ></img>
        <br></br>
        <p className="center-text">{this.props.text}</p>
          </div>
        </div>
      </div>
    );
  }
}
