import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
// @import "~bootstrap/scss/bootstrap";

import "./App.scss";
import HomePage from "./Components/HomePage/Home";
import Nav from "./Components/Nav/Nav";
import About from "./Components/About/About";
import AboutPage from "./Components/AboutPage/AboutPage";
import IdentiteDeMarque from "./Components/Services/IdentiteDeMarque";
import WebDesign from "./Components/Services/WebDesign";
import Footer from "./Components/Footer/Footer";
import SupportCommunication from "./Components/Services/SupportCommunication";
import Illustrations from "./Components/Services/Illustrations";
import Creations from "./Components/Creations/Creations";
import ListsPages from "./Components/Creations/ListsPages";
import Contact from "./Components/Contact/Contact";

export default class App extends Component {
  render() {
    let scroll = 0;
    window.addEventListener("scroll", function (event) {
      scroll = this.scrollY;
      console.log(scroll);
    });

    console.log(scroll);
    return (
      <Router>
        <div>
          <Nav />

          <Route>
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/identite-de-marque" component={IdentiteDeMarque} />
              <Route path="/webdesign" component={WebDesign} />
              <Route path="/support-communication" component={SupportCommunication} />
              <Route path="/illustrations" component={Illustrations} />
              <Route path="/portfolio" exact component={Creations} />
              <Route path="/portfolio/:id" exact component={ListsPages} />
              <Route path="/list" component={Lists} />
              {/* <Route path="/creations" exact component={Creations} />
            <Route path="/creations/:id" exact component={ListsPages} /> */}
              <Route path="/a-propos" component={AboutPage} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </Route>
        </div>
      </Router>
    );
  }
}

const Lists = () => {

  return (
    <div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus impedit cum consequatur, soluta iure nemo dolorem architecto voluptatibus. Ducimus autem quaerat dolor quidem assumenda dolores maxime impedit perspiciatis voluptas nam!
      Voluptatem quos placeat, veniam totam nihil iusto id corrupti maiores, nam alias reprehenderit, optio possimus ea similique ad unde adipisci numquam recusandae fugit facere at dicta? Amet at fuga ipsum!
      Eum eius fuga id assumenda recusandae magnam facere itaque sequi dolor dolore quod, natus amet vel rerum at cupiditate? Odio expedita sint rerum? Odio impedit labore quos, voluptatem asperiores molestiae?
      Blanditiis inventore accusantium, deleniti itaque natus neque ipsa, voluptatem incidunt ipsam veniam veritatis odit cumque, id iste at earum. Perspiciatis porro dolores et facere a voluptates reprehenderit dolore aspernatur consequatur?
      Beatae ut explicabo amet nesciunt eveniet totam consequuntur vel repudiandae saepe maiores eaque ex, architecto quia id, corporis quaerat temporibus sint deserunt facilis praesentium iste ipsum sequi repellendus! Soluta, enim?</p>
    </div>
  )
}