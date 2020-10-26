import React, { Component } from "react";
import "./Presentation.scss";
import imgPresentationBig from "../../images/home/presentation/750x578.png";
import oldeez from "../../images/home/presentation/oldeez.png";
import chabadou from "../../images/home/presentation/chabadou.png";

export default class Presentation extends Component {
  render() {
    return (
      <section id="presentation" className="section-padding">
        <h2 class="title-section white">Présentation</h2>

        <div className="block-presentation auto">
          <div className="block-info-presentation">
            <img src={imgPresentationBig} className="img-big-size" />
          </div>

          <div className="block-info-presentation">
            <div className="flex-presentation">
              <div className="left">
                <div className="bloc">285x285</div>
                <div className="bloc">285x285</div>
              </div>
              <div className="right">
                <div className="bloc-width-tiny">
                  <img src={chabadou} />
                </div>
                <div className="bloc-long-with">
                  <img src={oldeez} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
