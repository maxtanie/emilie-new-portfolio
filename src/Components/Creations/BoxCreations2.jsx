import React, { Component } from "react";
import "./BoxCreations.scss";

export default class BoxCreations2 extends Component {
  render() {
    const { img, alt, itemsName, name, titleCreations, filterItem } = this.props;
    const pub = process.env.PUBLIC_URL;
    return (
      <a
        className="link-read-more"
        href={`/portfolio/${titleCreations
          .split(" ")
          .join("")
          .toLowerCase()}`}
      >
        <section
          className={`box-creations filter-item bg-yellow-color ${filterItem}`}
        >
          <div className="block-img-default">
            <img src={pub + img} alt={alt} />
            <div className="layer-infos hide">
              <div className="absolute-center-creations">
                <h5 className="items-project-name">{itemsName}</h5>
                <h2 className="title-project-name">{name}</h2>
              </div>
            </div>
          </div>
        </section>
      </a>
    );
  }
}
