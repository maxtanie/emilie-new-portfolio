import React, { Component } from "react";
import About from "../About/About";
import Profil from "./Profil/Profil";
import imgEmilieAbout from "../../images/home/a-propos/emilie.png";
import Footer from "../Footer/Footer";

export default class AboutPage extends Component {
  render() {
    return (
      <div>
        <About
          sizeTitle="90px"
          sizeTxt="42px"
          paddingTop="200px"
          paddingBottom="50px"
          img={imgEmilieAbout}
          title="A propos"
          txt="Graphiste et illustratrice indépendante, je conçois vos supports print et web pour sublimer votre communication et valoriser vos messages. Ma passion pour des univers originaux tels que l’HeroicFantasy rendent mes créations uniques et originales."
        />
        <Profil />
        <Footer></Footer>
      </div>
    );
  }
}
