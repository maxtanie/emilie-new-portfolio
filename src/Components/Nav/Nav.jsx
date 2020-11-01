import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";
import logoBlanc from "../../images/home/logo-blanc.png";

export default class Nav extends Component {
  render() {
    return (
      <nav class="nav">
        <div className="flex">
          <div className="logo">
            <Link to="/">
              <img src={logoBlanc} alt="logo blanc" className="logo-size" />
            </Link>
          </div>
          <ul className="flex-list list-menu">
            <li className="list-items">
              <a className="anchors-items noto-regular" href="/portfolio">
                Portfolio
              </a>
            </li>
            <li className="list-items" id="services-items">
              <a
                className="anchors-items noto-regular"
                href="/identite-de-marque"
              >
                Compétences <i class="fas fa-caret-down"></i>
              </a>
              <ul className="sub-menu">
                <li className="list-items">
                  <a
                    className="anchors-items noto-regular"
                    href="/identite-de-marque"
                  >
                    Identité de marque
                  </a>
                </li>
                <li className="list-items">
                  <a className="anchors-items noto-regular" href="/webdesign">
                    Webdesign
                  </a>
                </li>
                <li className="list-items">
                  <a
                    className="anchors-items noto-regular"
                    href="/support-communication"
                  >
                    Support communication
                  </a>
                </li>
                <li className="list-items">
                  <a
                    className="anchors-items noto-regular"
                    href="/illustrations"
                  >
                    Illustrations
                  </a>
                </li>
              </ul>
            </li>
            <li className="list-items">
              <a className="anchors-items noto-regular" href="/a-propos">
                Qui suis-je ?
              </a>
            </li>
            <li className="list-items">
              <a className="anchors-items noto-regular" href="/contact">
                Me Contacter
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
