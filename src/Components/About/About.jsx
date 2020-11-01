import React, { Component } from "react";
import "./About.scss";

export default class About extends Component {
  render() {
    const {
      sizeTitle,
      sizeTxt,
      paddingTop,
      paddingBottom,
      img,
      txt,
      title
    } = this.props;

    const pad = {
      paddingTop: `${paddingTop}`,
      paddingBottom: `${paddingBottom}`
    };
    const sTitle = {
      fontSize: `${sizeTitle}`
    };

    const sText = {
      fontSize: `${sizeTxt}`
    };

    return (
      <section id="a-propos" style={pad}>
        <div className="container-main">
          <div className="content-about grid-about-right purple-color">
            <div className="bloc-about bloc-txt-about">
              <h2 className="title-about" style={sTitle}>
                {title}
              </h2>
              <p dangerouslySetInnerHTML={{ __html: txt }} className="txt-about" style={sText}>
                
              </p>
              {this.props.children}
            </div>
            <div className="bloc-about">
              <img src={img} alt="profil Emilie" className="img-about" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
