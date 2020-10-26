import React, { Component } from "react";
import "./Illustrations.scss";
import BlocCreations from "../BlocCreations/BlocCreations";
import bgIllustration from "../../images/home/illustrations/illustration-grande.png";
import iconIllustrationPetite from "../../images/home/illustrations/dessin-petit.svg";

import lightning from "../../images/home/illustrations/lightning.png";
import mode from "../../images/home/illustrations/mode.png";
import teresaClaymore from "../../images/home/illustrations/teresa-claymore.png";

import BlockCreaInfosText from "../BlockCreaInfosText/BlockCreaInfosText";

export default class Illustrations extends Component {
  render() {
    return (
      <BlocCreations id="print" flexDirection="row-reverse">
        <div className="blocCreaBlueSky">
          <div className="content-img">
            <img
              src={teresaClaymore}
              alt="my bootik"
              className="my-bootik-size auto"
            />
            <img src={mode} alt="retrogaming" className="retro-size auto" />
            <img
              src={lightning}
              alt="affiche cinéma"
              className="affiche-cinema-size auto"
            />
          </div>
        </div>
        <BlockCreaInfosText
          secondTitle="Illustrations"
          bgIcon={bgIllustration}
          icon={iconIllustrationPetite}
          link="illustrations"
          txt="Conception digitale painting et art traditionnelle, j'illustre des charactères design, des paysages et de l'architecture. Je propose trois options selon vos projets en illustrations graphique."
          txtButton="En savoir plus"
        />
      </BlocCreations>
    );
  }
}
