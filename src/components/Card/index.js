import React from "react";
import "./index.css";

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    // this.handleBackClick = this.handleBackClick.bind(this);
    this.state = {
      // displayFront: "",
      // displayRear: "none",
      toggleClass: "",
    };
  }

  handleClick() {
    // this.setState({ displayFront: "none", displayRear: "" });
    this.state.toggleClass === "front"
      ? this.setState({ toggleClass: "active" })
      : this.setState({ toggleClass: "inactive" });
  }

  // handleBackClick() {
  //   this.setState({
  //     displayFront: "",
  //     displayRear: "none"
  //   });
  // }

  render() {
    return (
      <div className="direction">
        <div id="overlay"></div>
        <div className="card2 postcard">
          <img
            className={`image-scale flex-center ${this.state.toggleClass}`}
            onClick={this.handleClick}
            src={this.props.src1}
            alt={this.props.alt}
            // style={{ display: this.state.displayFront }}
          ></img>
          <img
            className={`image-scale flex-center ${this.state.toggleClass}`}
            onClick={this.handleClick}
            src={this.props.src2}
            alt={this.props.alt}
            // style={{ display: this.state.displayRear }}
          ></img>
        </div>
        <br></br>
        <p className="flex-center">{this.props.text}</p>
      </div>
    );
  }
}
