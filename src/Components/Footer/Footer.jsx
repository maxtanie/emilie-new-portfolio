import React, { Component } from "react";
import Button from "../Button/Button";
import { Link} from "react-router-dom";
import "./Footer.scss";

import instragramIcon from "../../images/home/footer/icone-instagram-hover.png";
import linkedinIcon from "../../images/home/footer/icone-linkeding-hover.png";
import behanceIcon from "../../images/home/footer/icone-behance-hover.png";

import logo from "../../images/home/footer/logo.png";

export default class Footer extends Component {
  render() {
    return (
      <footer id="footer">
        <div className="content-footer">
          <div className="d-flex">
          <h2 className="title-footer noto-light">
            Vous souhaitez me parler de votre projet et peut-être faire appel à mes services de graphiste print et web / illustratrice ?
          </h2>
          <img src={logo} alt="Logo Emilie Pham Da" className="logo-footer"/>
          </div>
        
          <a href="/me-contacter" className="td-none link">
            <Button
              txt="Contactez-moi"
              colorTxt="#fff"
              padding="18px 20px"
              width="250px"
              bgColor="#FFE465"
              margin="35px"
              txtSize="1.3em"
              fWeight="bold"
              lSpacing="2px"
              txtTransform="uppercase"
            />
          </a>

          <div className="grid-footer-infos">
          <div className="infos-footer">
              <h5 className="name-footer-infos">Portfolio</h5>
              <span className="link-footer">
                <a href="/portfolio/carte-de-visite-freelance" className="link-footer">Print</a>
              </span>
              <span className="link-footer">
                <a href="/portfolio/application-mobile" className="link-footer">Web</a>
              </span>
              <span className="link-footer">
                <a href="/portfolio/coca-cola-packaging" className="link-footer">Packaging</a>
              </span>
              <span className="link-footer">
                <a href="/portfolio/carnet-illustration" className="link-footer">Illustrations</a>
              </span>
            </div>

            <div className="infos-footer">
              <h5 className="name-footer-infos">Services</h5>
              <a href="/identite-de-marque" className="link-footer">
                Identité de marque
              </a>
              <a href="/webdesign" className="link-footer">
                Webdesign
              </a>
              <a href="/support-communication" className="link-footer">
                Communication
              </a>
              <a href="/illustrations" className="link-footer">
                Illustrations
              </a>
            </div>

            <div className="infos-footer">
              <h5 className="name-footer-infos">Suivre</h5>
              <div className="content-icon icon-instagram">
                <a href="https://www.instagram.com/lightningcreative/" target="_blank">
                  <img
                    src={instragramIcon}
                    alt="instragam icon "
                    className="icon-footer"
                  />
                </a>
              </div>
              <div className="content-icon icon-linkedin">
                <a href="https://www.linkedin.com/in/emilie-pham-da-98173532/" target="_blank">
                  <img
                    src={linkedinIcon}
                    alt="linkedin icon"
                    className="icon-footer"
                  />
                </a>
              </div>
              <div className="content-icon icon-behance">
                <a href="https://www.behance.net/emiliepham95e0" target="_blank">
                  <img
                    style={{width: 37}}
                    src={behanceIcon}
                    alt="behance icon"
                    className="icon-footer"
                  />
                </a>
              </div>
            </div> 
          </div>

          <p className="mentions-legales noto-light">
          <a href="/politiques-confidentialites" >Politiques de confidentialités</a> | Copyright © Emilie PHAM DA | 2020 <a href="/mentions-legales">Mentions légales</a>
          </p>
        </div>
      </footer>
    );
  }
}
