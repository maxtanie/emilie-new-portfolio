import ReactGA from "react-ga";
import React, { Component, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


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
import PolitiquesConfidentialite from "./Components/Footer/PolitiquesConfidentialite";
import MentionsLegales from "./Components/Footer/MentionsLegales";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";




const initGA = () => {       
  ReactGA.initialize('UA-184504899-1)'); // put your tracking id here
  ReactGA.pageview("/HomePage");
} 

// const GApageView = (page) => {   
//   ReactGA.pageview(page);   
// }

// const GAmodalView = (modal) => {
//   ReactGA.modalview(modal);
// };
// GAmodalView("Request Demo");

// const GAevent = (categoryName, eventName) => {
//   ReactGA.event({       
//       category: categoryName,  // Required
//       action: eventName,       // Required
//       label: 'labelName',       
//       value: 10,       
//       nonInteraction: false     
//   });   
// }

// const GAtiming = (categoryName, variableName, valueNum) => {
//   ReactGA.timing({       
//       category: categoryName,       
//       variable: variableName,       
//       value: valueNum
//   });
// };

export default function App() {
  useEffect(() => { initGA(); }, []);
  // useEffect(() => { GApageView("landing"); }, []);
    return (
      <Router>
        <div>
          <Nav />
          <ScrollToTop initialHeight={200}/>
          <Route>
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/identite-de-marque" component={IdentiteDeMarque} />
              <Route path="/webdesign" component={WebDesign} />
              <Route path="/support-communication" component={SupportCommunication} />
              <Route path="/illustrations" component={Illustrations} />
              <Route path="/portfolio" exact component={Creations} />
              <Route path="/portfolio/:id" exact component={ListsPages} />
              <Route path="/qui-suis-je" component={AboutPage} />
              <Route path="/me-contacter" component={Contact} />
              <Route path="/politiques-confidentialites" component={PolitiquesConfidentialite} />
              <Route path="/mentions-legales" component={MentionsLegales} />
            </Switch>
          </Route>
        </div>
      </Router>
    );
}
