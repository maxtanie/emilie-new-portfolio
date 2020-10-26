import React, { Component } from "react";
import "./Webdesign.scss";
import BlocCreations from "../BlocCreations/BlocCreations";
import bgWebdesign from "../../images/home/web-design/webdesign-dessin-grand.png";
import iconWebdesignPetit from "../../images/home/web-design/webdesign-petit.svg";

import sephora from "../../images/home/web-design/sephora.png";
import starbuck from "../../images/home/web-design/starbuck.png";
import appliMobileTitiBurger from "../../images/home/web-design/appli-mob-titi-burger.jpg";
import BlockCreaInfosText from "../BlockCreaInfosText/BlockCreaInfosText";

export default class Webdesign extends Component {
  render() {
    return (
      <BlocCreations id="webdesign" flexDirection="row-reverse">
        <div className="blocCreaBlueSky">
          <div className="content-img">
            <img src={sephora} alt="sephora" className="sephora-size auto absolute-creation" />
            <img src={appliMobileTitiBurger} alt="maquette" className="titi-burger-size auto marginTop"/>
            <img src={starbuck} alt="starbuck" className="starbuck-size auto" />
          </div>
        </div>
        <BlockCreaInfosText
          secondTitle="Webdesign : le design de votre site"
          bgIcon={bgWebdesign}
          icon={iconWebdesignPetit}
          link="webdesign"
          txt="En m'inspirant de vos valeurs et de vos messages, je conçois l'identité visuelle de votre site internet ou de votre application mobile. Je conjugue mon talent artistique et mes compétences numériques pour vous aider à vous démarquer sur la toile."
          txtButton="Créer ou refondre l'identité graphique de mon site web "
          btnWidth="500px"
        />
      </BlocCreations>
    );
  }
}
