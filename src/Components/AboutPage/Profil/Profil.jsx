import React, { Component } from "react";
import "./Profil.scss";
import imgCintic from "../../../images/home/a-propos/outil-cintic.jpg";
import About from "../../About/About";
import Button from "../../Button/Button";
import karina from "../../../images/home/a-propos/karina-photo.jpg";
import karinaColors from "../../../images/home/a-propos/karina-colors.jpg";
import maquetteParis from "../../../images/home/a-propos/maquette-paris.jpg";
import personnagePoon from "../../../images/home/a-propos/personnage-poon.jpg";


export default class Profil extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="profil">
          <div className="container-main-2">
            <div className="content-about purple-color">
              <div className="bloc-profil">
                <img
                  src={imgCintic}
                  alt="profil Emilie"
                  className="img-profil"
                />
              </div>
              <div className="bloc-about bloc-txt-about">
                <h2 className="title-profil">Mon parcours</h2>
                <p className="txt-profil">
                J’ai suivi plusieurs formations dans l’ensemble des métiers liés au design print et numérique. Ayant ainsi cumulé les expériences en entreprises à travers mes différents stages (exemples ? ), je me suis formée auprès de professionnels très compétents. Ces expériences me permettent aujourd’hui d’avoir des connaissances théoriques et une vision terrain de gestion de projet globale.
                Je collabore aujourd’hui avec des agences de communication et des annonceurs (entreprises et associations de toutes tailles).
                </p>
              </div>
            </div>
          </div>
        </section>

        <About
          img="https://img.aws.la-croix.com/2014/12/03/1246810/Quels-sont-atouts-France_1_730_400.jpg"
          paddingTop="120px"
          paddingBottom="120px"
          sizeTitle="40px"
          sizeTxt="24px"
          title="Mes atouts"
          txt="Dynamique et créative, je gère vos projets de la phase stratégique et de conception à livraison du produit fini. Je vous accompagne au quotidien et cherche à vous apporter un maximum de valeur afin que vos outils ne soient pas uniquement des supports de promotion mais aussi d’adhésion et de fidélisation.
          J’accorde une grande place à la créativité à travers mon style graphique original.     
          En tant que chef de projet, j’attache une grande importance aux qualités indispensables liées à la gestion de projet : rigueur et organisation. Toujours à la recherche de la meilleure solution, je m’adapte à vos éventuelles contraintes."
        />

        <section id="other-passion">
          <div className="container-main">
            <div className="content-other-passion">
              <div className="bloc-content">
                <p className="txt-other-passion">
                En dehors de mon métier de graphiste, je suis passionnée par l’illustration, notamment la création de personnages fictifs inspirés de l’univers HeroicFantasy, mais aussi de l’art traditionnel (peinture, dessin, photo de mode).Retrouvez mon univers sur Instagram, où je partage mes créations.
                </p>
                <Button txt="En savoir plus" colorTxt="#fff" padding="18px 20px" width="250px" bgColor="#ffd600" margin="60px" txtSize="1.4em" fWeight="bold" lSpacing="2px"/>
              </div>
              <div className="bloc-content">
                <div className="grid-img">
                    <div className="img">
                        <img src={karina} />
                        <div className="layer">
                          <div className="content-layer">
                            <h2 className="title-content">Karina en mode 1980</h2>
                          </div>
                        </div>
                    </div>
                    <div className="img">
                    <img src={karinaColors} />
                    <div className="layer">
                          <div className="content-layer">
                            <h2 className="title-content">Karina</h2>
                          </div>
                        </div>
                    </div>
                    <div className="img">
                    <img src={maquetteParis} />
                    <div className="layer">
                          <div className="content-layer">
                            <h2 className="title-content">Karina</h2>
                          </div>
                        </div>
                    </div>
                    <div className="img">
                    <img src={personnagePoon} className="img-other-passion" />
                    <div className="layer">
                          <div className="content-layer">
                            <h2 className="title-content">Karina en mode 1980</h2>
                          </div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
