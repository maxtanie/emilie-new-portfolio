import React, { Component } from "react";
import "./CreationsListsPages.scss";

export default class CreationsListsPages extends Component {
  render() {
    const { id, titleCreations, itemCreations, descriptions, img } = this.props;
    return (
      <React.Fragment>
        <div className="block">
          <div className="id">{id < 10 ? `0${id}` : id}</div>
          <div className="title-creations">{titleCreations}</div>
          <div className="item-creations">{itemCreations}</div>
          <div className="descriptions">{descriptions}</div>
          <img src={img} alt="" />
        </div>
      </React.Fragment>
    );
  }
}
