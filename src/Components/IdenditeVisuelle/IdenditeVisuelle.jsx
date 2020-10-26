import React, { Component } from "react";
import "./IdentiteVisuelle.scss";
import BlocCreations from "../BlocCreations/BlocCreations";
import iconIdentiteVisuel from "../../images/home/identite-visuelle/dessin-grand.png";
import iconIdentiteVisuelPetit from "../../images/home/identite-visuelle/petit-visuel.svg";
import oldeez from "../../images/home/identite-visuelle/oldeez.png";
import chabadouBox from "../../images/home/identite-visuelle/shoes-produits.jpg";
import chabadouLogo from "../../images/home/identite-visuelle/chabadou-logo.png";
import BlockCreaInfosText from "../BlockCreaInfosText/BlockCreaInfosText";

export default class LogoCreations extends Component {
  render() {
    return (
      <BlocCreations id="identite-visuelle">
        <div className="blocCreaBlueSky">
          <div className="content-img">
          <img src={chabadouBox} alt="oldeez" className="chabadou-box-size" />
            <img src={oldeez} alt="oldeez" className="oldeez-size" />
            
          </div>
        </div>
        <BlockCreaInfosText
          mainTitle="Comment je travaille sur vos projets ?"
          secondTitle="Votre identité visuelle"
          bgIcon={iconIdentiteVisuel}
          icon={iconIdentiteVisuelPetit}
          link="identite-de-marque"
          txt="Je vous accompagne durant toute la création de votre identité visuelle. De la réflexion sur votre univers et vos messages, à la réalisation de votre logo, jusqu'au choix de vos couleurs, et de votre typographie. Je suis à vos côtés pour imaginer ensemble une identité de marque à décliner sur l'ensemble de vos supports de communication (réseaux sociauux, brochures, flyers, site web...)"
          txtButton="Créer mon identité visuelle"
        />
      </BlocCreations>
    );
  }
}
