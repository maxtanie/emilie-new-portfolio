import React, { Component, useState, useEffect } from "react";
import Isotope from "isotope-layout";
import BtnCreations from "./BtnCreations";
import BoxCreations2 from "./BoxCreations2";
import "./Creations.scss";

// DECLARATION OF MY CREATION LIST JSON OBJECT
import print from "../../Object/print.json";
import print2 from "../../Object/print2.json";
import logo from "../../Object/logo.json";
import logo2 from "../../Object/logo2.json";
import web from "../../Object/web.json";
import web2 from "../../Object/web2.json";
import packaging from "../../Object/packaging.json";
import illustration from "../../Object/illustration.json"

// const dataCreationsList = [print, web, packaging];
const data = [print2, web2, packaging, illustration];

export default class Creations extends Component {
  state = {
    name: ["Tout", "Print", "Web", "Packaging", "Illustration"],
    filterName: ["*", "print", "web", "packaging", "illustration"]
  };
  render() {
    const { name, filterName } = this.state;

    return (
      <React.Fragment>
        <IsotopeReact name={name} filterName={filterName} />
      </React.Fragment>
    );
  }
}

const IsotopeReact = ({ name, filterName }) => {
  // initialize an Isotope object with configs
  // store the isotope object in one state
  const [isotope, setIsotope] = useState(null);
  // store the filter keyword in another state
  const [filterKey, setFilterKey] = useState("*");

  useEffect(() => {
    setIsotope(
      new Isotope(".grid-creations", {
        itemSelector: ".filter-item"

        // layoutMode: "fitRows"
      })
      // layout mode options
    );
  }, []);

  // handling filter key change
  useEffect(() => {
    if (isotope) {
      filterKey === "*"
        ? isotope.arrange({ filter: `*` })
        : isotope.arrange({ filter: `.${filterKey}` });
    }
  }, [isotope, filterKey]);

  const creationsListsToFilter = data.map((info, index) => {
    return info.map(vals => {
      return vals.DefaultsCreations.map(elem => {
        return (
          <BoxCreations2
            key={index}
            filterItem={elem.item}
            itemsName={elem.itemsName}
            name={elem.alt}
            img={elem.img}
            titleCreations={elem.name}
            alt={elem.alt}
          />
        );
      });
    });
  });

  return (
    <section className="" id="creations">
      <div className="container-portfolio">
        <div className="grid-btns">
          {filterName.map((list, index) => {
            return (
              <BtnCreations
                key={index}
                btnFilter={name[index]}
                onClick={() => setFilterKey(list)}
              ></BtnCreations>
            );
          })}
        </div>
        <div className="container-design">
          <div className="grid-creations">{creationsListsToFilter}</div>
        </div>
      </div>
    </section>
  );
};
