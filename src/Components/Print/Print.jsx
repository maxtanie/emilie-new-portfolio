import React, { Component } from "react";
import "./Print.scss";
import BlocCreations from "../BlocCreations/BlocCreations";
import bgPrint from "../../images/home/print/print-grand.png";
import iconPrintPetit from "../../images/home/print/print-petit.svg";

import myBootik from "../../images/home/print/my-bootik.png";
import retro from "../../images/home/print/retro.jpg";
import afficheCinema from "../../images/home/print/affiche-cinema.png";
import BlockCreaInfosText from "../BlockCreaInfosText/BlockCreaInfosText";

export default class Print extends Component {
  render() {
    return (
      <BlocCreations id="print">
        <div className="blocCreaBlueSky">
          <div className="content-img">
            <img
              src={myBootik}
              alt="my bootik"
              className="my-bootik-size auto"
            />
            <img src={retro} alt="retrogaming" className="retro-size auto" />
            <img
              src={afficheCinema}
              alt="affiche cinéma"
              className="affiche-cinema-size auto"
            />
          </div>
        </div>
        <BlockCreaInfosText
          secondTitle="Vos supports de communication print"
          bgIcon={bgPrint}
          icon={iconPrintPetit}
          link="print"
          txt="Outils de promotion intemporels et très efficaces, vos plaquettes, flyers, dépliants, brochures... méritent une attention particulière. Ils doivent refléter votre identité et véhiculer votre message. Je vous propose un graphisme original et en adéquation avec vos objectifs de communication."
          txtButton="Concevoir mes supports de communication print"
        />
      </BlocCreations>
    );
  }
}
