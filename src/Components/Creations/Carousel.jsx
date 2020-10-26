import React, { Component } from "react";
import "./Carousel.scss";

export default class Carousel extends Component {
  render() {
    let { name, item, description } = this.props;
    return (
      <div className="overlay-carousel">
        <img src={name} alt="" />
        <h6>{item}</h6>
        <p>{description}</p>
      </div>
    );
  }
}
