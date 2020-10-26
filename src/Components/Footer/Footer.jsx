import React, { Component } from "react";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import "./Footer.scss";

import instragramIcon from "../../images/home/footer/icone-instagram-hover.png";
import linkedinIcon from "../../images/home/footer/icone-linkeding-hover.png";
import behanceIcon from "../../images/home/footer/icone-behance-hover.png";

export default class Footer extends Component {
  render() {
    return (
      <footer id="footer">
        <div className="content-footer">
          <h2 className="title-footer noto-light">
            Vous souhaitez me parler de votre projet <br/> et peut-être faire appel à mes services de<br/> graphiste / illustratrice ?
          </h2>
          <Link to="/contact" className="td-none link">
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
          </Link>

          <div className="grid-footer-infos">
            <div className="infos-footer">
              <h5 className="name-footer-infos">Services</h5>
              <Link to="/indentite-de-marque" className="link-footer">
                Identité de marque
              </Link>
              <Link to="/webdesign" className="link-footer">
                Webdesign
              </Link>
              <Link to="/communication" className="link-footer">
                Communication
              </Link>
              <Link to="/illustrations" className="link-footer">
                Illustrations
              </Link>
            </div>

            <div className="infos-footer">
              <h5 className="name-footer-infos">Suivre</h5>
              <div className="content-icon icon-instagram">
                <Link to="/">
                  <img
                    src={instragramIcon}
                    alt="instragam icon "
                    className="icon-footer"
                  />
                </Link>
              </div>
              <div className="content-icon icon-linkedin">
                <Link>
                  <img
                    src={linkedinIcon}
                    alt="linkedin icon"
                    className="icon-footer"
                  />
                </Link>
              </div>
              <div className="content-icon icon-behance">
                <Link>
                  <img
                    src={behanceIcon}
                    alt="behance icon"
                    className="icon-footer"
                  />
                </Link>
              </div>
            </div>

            <div className="infos-footer">
              <h5 className="name-footer-infos">Contact</h5>
              <a
                href="mailto:emiliephamda@gmail.com"
                className="link-footer underline"
              >
                emiliephamda@gmail.com
              </a>
              <p>Tél. +33 06 60 91 30 65</p>
            </div>
          </div>

          <p className="mentions-legales noto-light">
            Mentions légales | Copyright &copy; Emilie PHAM DA | 2020
          </p>
        </div>
      </footer>
    );
  }
}
