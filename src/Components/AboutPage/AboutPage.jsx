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
          txt="Graphiste et futur freelance située à Paris, je suis passionnée
          par différentes thématiques graphiques qui rendent mes créations
          originales."
        />
        <Profil />
        <Footer></Footer>
      </div>
    );
  }
}
