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
                  className="img-about"
                />
              </div>
              <div className="bloc-about bloc-txt-about">
                <h2 className="title-profil">Profil</h2>
                <p className="txt-profil">
                  Diplômée de plusieurs formations numérique ayant du Print au
                  Web design et Chef de Projet Web. Avec plus de 7 stages
                  d’entreprise différents en tant que graphiste print et web,
                  j’ai développé des connaissances et compétences théoriques à
                  pratiques pendant les stages de formation. Ouverte à
                  collaborer avec des agences de communication et publicitère
                  ainsi que grande, moyen, petite entreprise à l’association,
                  j’élargie les secteurs d’activités clientèles.
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
          title="Atouts"
          txt="Dynamique et créative, j’arrive à prendre le projet en main du
          début jusqu’à la fin, en partant de l’étape de création à
          l’impression numérique aux produits finis, disons de moi la
          seule collaboratrice du projet. J'accorde une grande
          importance à la création graphique. Ordonnée, organisée, je
          suis là personne qui résout les problématiques et contraintes
          des clients, avec les recherches adaptées à tout profil de
          projet créatif."
        />

        <section id="other-passion">
          <div className="container-main">
            <div className="content-other-passion">
              <div className="bloc-content">
                <p className="txt-other-passion">
                  En dehors de mon métier de graphiste, j’ai pour passions
                  l’illustration, la création de personnage et l’art
                  traditionnelle, peinture, portrait, photographie de mode et
                  loisirs sur instagram.
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
