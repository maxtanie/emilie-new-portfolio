import React, { Component } from "react";
import "./BtnCreations.scss";

export default class BtnCreations extends Component {
  render() {
    console.log(this.props.btnFilter);

    return (
      <div
        className="btn-creations lazer fluo-yellow-color"
        onClick={this.props.onClick}
      >
        {this.props.btnFilter}
        {this.props.children}
      </div>
    );
  }
}
