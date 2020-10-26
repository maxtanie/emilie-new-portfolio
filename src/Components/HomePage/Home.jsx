import React, { Component } from "react";
import Header from "../Header/Header";
import Presentation from "../Presentation/Presentation";
import PlusProjet from "../PlusProjet/PlusProjet";
import IdentiteVisuelle from "../IdenditeVisuelle/IdenditeVisuelle";
import Footer from "../Footer/Footer";
import Webdesign from "../Webdesign/Webdesign";
import Print from "../Print/Print";
import Illustrations from "../Illustrations/Illustrations";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <IdentiteVisuelle />
        <Webdesign />
        <Print />
        <Illustrations />
        <Footer />
      </div>
    );
  }
}
