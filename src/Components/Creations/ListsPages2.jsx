import React, { Component } from "react";
import "./ListsPages.scss";
import print from "../../Object/print2.json";
import affiches from "../../Object/affiches.json";
import flyers from "../../Object/flyers.json";
import carte from "../../Object/carte.json";
import magazine from '../../Object/magazine.json'
import web from "../../Object/web2.json";
import packaging from "../../Object/packaging.json";
import illustration from "../../Object/illustration.json";

// const dataLists = print.concat(web, packaging, illustration);
const dataLists = affiches;
const dataList = print.concat(web);
const dataFlyers = flyers;
const dataCarte = carte;
const dataMagazine = magazine;

function DesignOne({ imgsPartOne, titlePartOne, txtPartOne }) {
  const pub = "../"
  return (
    <article className="part-one padding-portfolio">
      <div className="flex">

        <aside>
          {imgsPartOne.map((data, index) => {
            return (
              <div className="slider">
                <img src={pub + data.img} alt="" className="img" />
              </div>
            )
          })}
          <div className="infos ml purple-color">
            <h2>{titlePartOne}</h2>
            <p>{txtPartOne}</p>
          </div>
        </aside>
      </div>
    </article>
  )
}

function DesignTwo({ imgsPartTwo, titlePartTwo, txtPartTwo }) {
  const pub = "../"
  return (
    <article className="part-two padding-portfolio">
      <div className="flex row-reverse">
        <aside>
          {imgsPartTwo.map((data, index) => {
            return (
              <div className="slider">
                <img src={pub + data.img} alt="" className="img" />
              </div>
            )
          })}
          <div className="infos ml purple-color">
            <h2>{titlePartTwo}</h2>
            <p>{txtPartTwo}</p>
          </div>

        </aside>
      </div>
    </article>
  )
}

function BlockInfos({ title, txt, bg, img }) {
  const backgroundBox = {
    background: `${bg}`,
    padding: "40px 20px",
    color: "#fff"
  }
  return (
    <React.Fragment>
      <div className="content center" style={backgroundBox}>
        <h2 className="f-size-35px">{title}</h2>
        <p dangerouslySetInnerHTML={{ __html: txt }} className="f-size-35px size-txt" />
      </div>
      <div className="block-img-portfolio">
        <img src={img} alt="" className
          ="img-portfolio" />
      </div>
    </React.Fragment>

  )
}
function ListsPages() {

  const locationName = window.location.pathname;
  const prints = dataList.map(el => {
    const name = el.DefaultsCreations.map(names => {
      return names.name;
    })
    const v = el.DefaultsCreations.map(els => {
      const pub = "../"
      if (locationName.includes(name)) {
        return (
          <BlockInfos title={els.mainTitle} txt={els.txtInformations} bg={els.bgColor} img={pub + els.img} />
        )
      }
    })


    // const bootik = el.ListSlide.map((data, index) => {
    //   return data.PartOne.map(datas => {
    //     if (name.includes("flyers-my-bootik")) {
    //       return (
    //         <DesignOne imgsPartOne={datas.imgSlide} titlePartOne={datas.title} txtPartOne={datas.informations} />
    //       )
    //     }
    //   })
    // })



    return [v]

  })

  const affichePartOne = dataLists.map((data, index) => {

    return data.ListSlide.map(el => {
      return el.PartOne.map(datas => {
        if (locationName.includes("affiches-cinema")) {
          return (
            <div id="portfolio-affiches-cinema">
              <DesignOne imgsPartOne={datas.imgSlide} titlePartOne={datas.title} txtPartOne={datas.informations} />
              {el.PartTwo.map(datas => {
                return (
                  <DesignTwo imgsPartTwo={datas.imgSlide} titlePartTwo={datas.title} txtPartTwo={datas.informations} />
                )
              })
              }

            </div>
          )
        }
      })
    })
  })

  const flys = dataFlyers.map(data => {
    return data.ListSlide.map(dat => {
      return dat.PartOne.map(datas => {
        if (locationName.includes("flyers-my-bootik")) {
          return (
            <div id="portfolio-affiches-cinema">
              <DesignOne imgsPartOne={datas.imgSlide} titlePartOne={datas.title} txtPartOne={datas.informations} />
            </div>
          )
        }
      })
    })
  })

  const cart = dataCarte.map(data => {
    return data.ListSlide.map(dat => {
      return dat.PartOne.map(datas => {
        if (locationName.includes("carte-de-visite")) {
          return (
            <div id="portfolio-affiches-cinema">
              <DesignOne imgsPartOne={datas.imgSlide} titlePartOne={datas.title} txtPartOne={datas.informations} />
            </div>
          )
        }
      })
    })
  })


  const magazine = dataMagazine.map((data, index) => {

    return data.ListSlide.map(el => {
      return el.PartOne.map(datas => {
        if (locationName.includes("magazine-retro-game")) {
          return (
            <div id="portfolio-affiches-cinema">
              <DesignOne imgsPartOne={datas.imgSlide} titlePartOne={datas.title} txtPartOne={datas.informations} />
              {el.PartTwo.map(datas => {
                return (
                  <DesignTwo imgsPartTwo={datas.imgSlide} titlePartTwo={datas.title} txtPartTwo={datas.informations} />
                )
              })
              }

            </div>
          )
        }
      })
    })
  })

  // Print creations
  const cocaColaPrint = () => {

  }


  // Web creations


  // Packaging creations


  // Illustrations


  return [prints, affichePartOne, flys, cart, magazine]

}

export default ListsPages;



