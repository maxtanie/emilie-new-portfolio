import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import './BlockCreaInfosText.scss';

export default class BlockCreaInfosText extends Component {
  render() {
    const {
      bgIcon,
      link,
      icon,
      mainTitle,
      secondTitle,
      txt,
      txtButton,
      btnWidth,
      paddingTopBottom,
      paddingLeftRight
    } = this.props;

    const bg = {
      backgroundImage: ` url("${bgIcon}") `,
      backgroundRepeat: "no-repeat",
      backgroundSize: "50%",
      backgroundPosition: "center",
      padding: `${paddingTopBottom} ${paddingLeftRight}`
    };

    return (
      <div className="blocCreaBlueSkyLight" style={bg}>
        <h2 className="center title-creations purple-color noto-bold">
          {mainTitle}
        </h2>
        <div className="content-informations">
          <div className="flex-creations">
            <img src={icon} alt="" className="icon-crea" />
            <h2 className="title-creations purple-color noto-light">
              {secondTitle}
            </h2>
          </div>

          <div className="txt-creations">
            <p className="para-size">{txt}</p>

            <Link to={`/${link}`} className="link-anchors">
              <Button
                txt={txtButton}
                colorTxt="#fff !important"
                padding="15px"
                btnWidth={btnWidth}
                minwidth="100%"
                bgColor="#4f0fd5"
                margin="30px"
                txtSize="0.9em"
              />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
