import React from "react";
import "./index.css";

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.handleFrontClick = this.handleFrontClick.bind(this);
    this.handleBackClick = this.handleBackClick.bind(this);
    this.state = { isFront: true };
  }

  handleFrontClick() {
    this.setState({ isFront: false });
  }

  handleBackClick() {
    this.setState({ isFront: true });
  }

  render() {
    return (
      <div className="direction">
        <div id="overlay"></div>
        <div className="card2 postcard">
          {this.state.isFront ? (
            <img
              onClick={this.handleFrontClick}
              src={this.props.src1}
              alt={this.props.alt}
              className="image-scale flex-center"
            ></img>
          ) : (
            <img
              onClick={this.handleBackClick}
              src={this.props.src2}
              alt={this.props.alt}
              className="image-scale flex-center"
            ></img>
          )}
        </div>
        <br></br>
        <p className="flex-center">{this.props.text}</p>
      </div>
    );
  }
}
