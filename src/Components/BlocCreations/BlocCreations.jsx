import React, { Component } from "react";
import "./BlocCreations.scss";

export default class BlocCreations extends Component {
  render() {
    const { id, flexDirection } = this.props;

    const flxDirection = {
      flexDirection: `${flexDirection}`
    };

    return (
      <section id={id} className="crea-bloc">
        <div className="flex-crea-bloc" style={flxDirection}>
          {this.props.children}
        </div>
      </section>
    );
  }
}
