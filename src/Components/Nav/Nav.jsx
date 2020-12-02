import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";
import logoBlanc from "../../images/home/logo-blanc.png";

export default class Nav extends Component {

  state = {
    toogle: false
  }

  showMenu = ()  => {
    this.setState({
      toogle: !this.state.toogle
    })
  }
  render() {

    const {toogle} = this.state;
    return (
      <nav class="nav">
        <div className="flex">
          <div className="logo">
            <Link to="/">
              <img src={logoBlanc} alt="logo blanc" className="logo-size" />
            </Link> 
          </div>
          <ul className={toogle ?  'flex-list list-menu show' : `flex-list list-menu` }
          >
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
              <a className="anchors-items noto-regular" href="/qui-suis-je">
                Qui suis-je ?
              </a>
            </li>
            <li className="list-items">
              <a className="anchors-items noto-regular" href="/me-contacter">
                Me Contacter
              </a>
            </li>
          </ul>

          <div className="menu-icon" onClick={this.showMenu}>
            <div className="icon"></div>
            <div className="icon"></div>
            <div className="icon"></div>
          </div>
        </div>
      </nav>
    );
  }
}
