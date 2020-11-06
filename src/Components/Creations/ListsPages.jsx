import React, { Component } from "react";
import "./ListsPages.scss";
import print from "../../Object/print2.json";
import affiches from "../../Object/affichesCinema.json";
import flyers from "../../Object/flyersMyBootik.json";
import coca from "../../Object/cocaCola.json"
import carte from "../../Object/carte.json";
import magazine from "../../Object/magazine.json";
import carteVFreelance from "../../Object/carteVisiteFreelance.json";
import carteDeVisite from "../../Object/carteVisite.json";
import ttBurger from "../../Object/titiBurger.json";
import lgotype from "../../Object/logotype.json";
import ppToy from "../../Object/paperToy.json";
import sephoraNewsletter from "../../Object/sephora.json";
import mallyanceCrea from "../../Object/mallyance.json";
import illustrationDigital from "../../Object/illustrationDigital.json";
import mockupShoes from "../../Object/mockup.json";
import ttBurgerMobile from "../../Object/titiBurgerMobile.json"
import web from "../../Object/web2.json";
import packaging from "../../Object/packaging.json";
import illustration from "../../Object/illustration.json";
import HorizontalSlide from "./HorizontalSlide";
import { Link } from "react-router-dom";


const dataList = print.concat(web, packaging, illustration);

const affichesCinema = affiches;
const flyersMyBootik = flyers;
const cocaCola = coca;
const magazineRetroGame = magazine;
const carteVisiteFreelance = carteVFreelance;
const titiBurger = ttBurger;
const logotype = lgotype;
const carteVisiteGraphiste = carteDeVisite;
const paperToy = ppToy;
const sephora = sephoraNewsletter;
const mallyance = mallyanceCrea;
const illustrationDigit = illustrationDigital;
const mockup = mockupShoes;
const titiBurgerMobile = ttBurgerMobile;


const dataCarte = carte;


function BlockInfos({ title, txt, bg, img }) {
    const backgroundBox = {
        background: `${bg}`,
        padding: "40px 20px",
        color: "#fff"
    }
    return (
        <React.Fragment>
            <div className="content center" style={backgroundBox}>
                <a href="/portfolio" className="arrow-left" style={{fontSize: 50, color: "#fff", textDecoration: "none", position: "absolute", left: 30}}>&#8592;</a>
                <h2 className="f-size-45px" style={{marginTop: 55, fontSize: 45}}>{title}</h2>
                <p dangerouslySetInnerHTML={{ __html: txt }} className="size-txt" style={{fontSize: 25, marginTop: 15}}/>
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

        return [v]

    })

    // Component horizontal images


    // Print creations

    // Affiche cinéma
    const afficheCinemaPrint = affichesCinema.map((data, index) => {
        return data.ListSlide.map((list, index) => {
            return list.PartOne.map((datas, index) => {
                if (locationName.includes("affiches-cinema")) {
                    return (
                        <div id="portfolio-affiches-cinema" className="content-portfolio">
                            <div className="content-txt-portfolio">
                                <h2 className="title-portfolio dark-blue-color">{datas.title}</h2>
                                <p className="txt-portfolio">{datas.informations}</p>
                            </div>
                            <HorizontalSlide vals={datas.imgSlide} />
                            {list.PartTwo.map((datas, index) => {
                                return (
                                    <div>
                                        <div className="content-txt-portfolio">
                                            <h2 className="title-portfolio dark-blue-color">{datas.title}</h2>
                                            <p className="txt-portfolio">{datas.informations}</p>

                                        </div>
                                        <HorizontalSlide vals={datas.imgSlide} />
                                    </div>
                                )

                            })}
                        </div >

                    )
                }
            })

        })
    })

    // Flyers my bootik
    const flyerMyBootikPrint = flyersMyBootik.map((data, index) => {
        return data.ListSlide.map((list, index) => {
            return list.PartOne.map((datas, index) => {
                if (locationName.includes("flyers-my-bootik")) {
                    return (
                        <div id="portfolio-flyers-my-bootik" className="content-portfolio">
                            <div className="content-txt-portfolio">
                                <h2 className="title-portfolio dark-blue-color">{datas.title}</h2>
                                <p className="txt-portfolio">{datas.informations}</p>
                            </div>
                            <HorizontalSlide vals={datas.imgSlide} />
                        </div >


                    )
                }
            })

        })
    })

    // Coca Cola
    const cocaColaPrint = cocaCola.map((data, index) => {
        return data.ListSlide.map((list, index) => {
            return list.PartOne.map((datas, index) => {
                if (locationName.includes("coca-cola-packaging")) {
                    return (
                        <div id="portfolio-flyers-my-bootik" className="content-portfolio">
                            <div className="content-txt-portfolio">
                                <h2 className="title-portfolio dark-blue-color">{datas.title}</h2>
                                <p className="txt-portfolio">{datas.informations}</p>
                            </div>
                            <HorizontalSlide vals={datas.imgSlide} />
                            {list.PartTwo.map((datas, index) => {
                                return (
                                    <div>
                                        <div className="content-txt-portfolio">
                                            <p className="txt-portfolio">{datas.informations}</p>

                                        </div>
                                        <HorizontalSlide vals={datas.imgSlide} />
                                    </div>
                                )

                            })}
                            {list.PartThree.map((datas, index) => {
                                return (
                                    <div>
                                        <HorizontalSlide vals={datas.imgSlide} />
                                    </div>
                                )

                            })}
                        </div >



                    )
                }
            })

        })
    })


    // Magazine retrogame
    const magazineRetroGamePrint = magazineRetroGame.map((data, index) => {
        return data.ListSlide.map((list, index) => {
            return list.PartOne.map((datas, index) => {
                if (locationName.includes("magazine-retro-game")) {
                    return (
                        <div id="portfolio-magazine-retrogame" className="content-portfolio">
                            <div className="content-txt-portfolio">
                                <h2 className="title-portfolio dark-blue-color">{datas.title}</h2>
                                <p className="txt-portfolio">{datas.informations}</p>
                            </div>
                            <HorizontalSlide vals={datas.imgSlide} />
                            {list.PartTwo.map((datas, index) => {
                                return (
                                    <div>

                                        <HorizontalSlide vals={datas.imgSlide} />
                                    </div>
                                )

                            })}
                        </div >

                    )
                }
            })

        })
    })


    // Carte de visite freelance
    const carteDeVisiteFreelancePrint = carteVisiteFreelance.map((data, index) => {
        return data.ListSlide.map((list, index) => {
            return list.PartOne.map((datas, index) => {
                if (locationName.includes("carte-de-visite-freelance")) {
                    return (
                        <div id="portfolio-carte-de-visite-freelance" className="content-portfolio">
                            <div className="content-txt-portfolio">
                                <h2 className="title-portfolio dark-blue-color">{datas.title}</h2>
                                <p className="txt-portfolio">{datas.informations}</p>
                            </div>
                            <HorizontalSlide vals={datas.imgSlide} />
                        </div >

                    )
                }
            })

        })
    })

    // Titi burger
    const titiBurgerPrint = titiBurger.map((data, index) => {
        return data.ListSlide.map((list, index) => {
            return list.PartOne.map((datas, index) => {
                if (locationName.includes("titi-burger")) {
                    return (
                        <div id="portfolio-titi-burger" className="content-portfolio">
                            <div className="content-txt-portfolio">
                                <h2 className="title-portfolio dark-blue-color">{datas.title}</h2>
                                <p className="txt-portfolio">{datas.informations}</p><br/>
                                <p className="txt-portfolio" style={{marginTop: -5, fontWeight: "bold"}}>Lien directe du prototypage Adobe XD UX/UI Design :</p>
                                <a target="_blank" href="https://xd.adobe.com/view/d495829c-cf13-40e3-ac-db-5328457fe7a7-81c6/?fullscreen&hints=off" style={{width: "70%", margin: "auto", textAlign: "center", padding: "15px", background: "#ffd600", marginTop: 45, display: "block", textDecoration: "none", color: "#fff", fontSize: 25}}>Voir le prototype</a>

                            </div>
                            <HorizontalSlide vals={datas.imgSlide} />
                            <a target="_blank" href="https://xd.adobe.com/view/d495829c-cf13-40e3-ac-db-5328457fe7a7-81c6/?fullscreen&hints=off" style={{width: "70%", margin: "auto", textAlign: "center", padding: "15px", background: "#ffd600", marginTop: 45, display: "block", textDecoration: "none", color: "#fff", fontSize: 25}}>Voir le prototype</a>
                        </div >


                    )
                }
            })

        })
    })


    // Logotype 
    const logotypePrint = logotype.map((data, index) => {
        return data.ListSlide.map((list, index) => {
            return list.PartOne.map((datas, index) => {
                if (locationName.includes("logotype")) {
                    return (
                        <div id="portfolio-logotype" className="content-portfolio">
                            <div className="content-txt-portfolio">
                                <h2 className="title-portfolio dark-blue-color">{datas.title}</h2>
                                <p className="txt-portfolio">{datas.informations}</p>
                            </div>
                            <HorizontalSlide vals={datas.imgSlide} />
                        </div >


                    )
                }
            })

        })
    })

    // Carte de visite graphiste
    const carteDeVisiteGraphistePrint = carteVisiteGraphiste.map((data, index) => {
        return data.ListSlide.map((list, index) => {
            return list.PartOne.map((datas, index) => {
                if (locationName.includes("carte-de-visite-graphiste")) {
                    return (
                        <div id="portfolio-carte-de-visite-graphiste" className="content-portfolio">
                            <div className="content-txt-portfolio">
                                <h2 className="title-portfolio dark-blue-color">{datas.title}</h2>
                                <p className="txt-portfolio">{datas.informations}</p>
                            </div>
                            <HorizontalSlide vals={datas.imgSlide} />
                        </div >


                    )
                }
            })

        })
    })

    // Paper toy
    const paperToyPrint = paperToy.map((data, index) => {
        return data.ListSlide.map((list, index) => {
            return list.PartOne.map((datas, index) => {
                if (locationName.includes("paper-toy")) {
                    return (
                        <div id="portfolio-paper-toy" className="content-portfolio">
                            <div className="content-txt-portfolio">
                                <h2 className="title-portfolio dark-blue-color">{datas.title}</h2>
                                <p className="txt-portfolio">{datas.informations}</p>
                            </div>
                            <HorizontalSlide vals={datas.imgSlide} />
                        </div >


                    )
                }
            })

        })
    })


    // Sephora newsletter
        const sephoraWeb = sephora.map((data, index) => {
            return data.ListSlide.map((list, index) => {
                return list.PartOne.map((datas, index) => {
                    if (locationName.includes("newsletter")) {
                        return (
                            <div id="portfolio-sephora-newsletter" className="content-portfolio">
                                <div className="content-txt-portfolio">
                                    <h2 className="title-portfolio dark-blue-color">{datas.title}</h2>
                                    <p className="txt-portfolio">{datas.informations}</p>
                                </div>
                                <HorizontalSlide vals={datas.imgSlide} />
                                {list.PartTwo.map((datas, index) => {
                                    return (
                                        <div>
                                            <div className="content-txt-portfolio">
                                            <h2 className="title-portfolio dark-blue-color">{datas.title}</h2>
                                                <p className="txt-portfolio">{datas.informations}</p>
    
                                            </div>
                                            <HorizontalSlide vals={datas.imgSlide} />
                                        </div>
                                    )
    
                                })}
                                {list.PartThree.map((datas, index) => {
                                    return (
                                        <div>
                                            <div className="content-txt-portfolio">
                                            <h2 className="title-portfolio dark-blue-color">{datas.title}</h2>
                                                <p className="txt-portfolio">{datas.informations}</p>
    
                                            </div>
                                            <HorizontalSlide vals={datas.imgSlide} />
                                        </div>
                                    )
    
                                })}
                            </div >
    
    
    
                        )
                    }
                })
    
            })
        })


    // Mallyance
    const mallyancePrint = mallyance.map((data, index) => {
        return data.ListSlide.map((list, index) => {
            return list.PartOne.map((datas, index) => {
                if (locationName.includes("carte-de-visite-mallyance")) {
                    return (
                        <div id="portfolio-paper-toy" className="content-portfolio">
                            <div className="content-txt-portfolio">
                                <h2 className="title-portfolio dark-blue-color">{datas.title}</h2>
                                <p className="txt-portfolio">{datas.informations}</p>
                            </div>
                            <HorizontalSlide vals={datas.imgSlide} />
                        </div >


                    )
                }
            })

        })
    })

    // Web creations
        // Titi burger
        const titiBurgerMobileWeb = titiBurgerMobile.map((data, index) => {
            return data.ListSlide.map((list, index) => {
                return list.PartOne.map((datas, index) => {
                    if (locationName.includes("application-mobile")) {
                        return (
                            <div id="portfolio-titi-burger" className="content-portfolio">
                               
                                <HorizontalSlide vals={datas.imgSlide} />

                                {list.PartTwo.map((datas, index) => {
                                    return (
                                        <div>
                                            <div className="content-txt-portfolio">
                                            <h2 className="title-portfolio dark-blue-color">{datas.title}</h2>
                                                <p className="txt-portfolio">{datas.informations}</p>
                                                <p className="txt-portfolio" style={{marginTop: 5, fontWeight: "bold"}}>Lien directe du prototypage Adobe XD UX/UI Design :</p>
                                            </div>
                                            <a target="_blank" href="https://xd.adobe.com/view/091390d1-71d4-
                                                421e-6402-0a235e06ccfe-7f22/?fbclid=IwAR2569yazQqeeb33Ts9Dy
                                                j3_5eqOLKpq-wCHENFm2w_WkJxQQbzKXU0
                                                b10U" style={{width: "70%", margin: "auto", textAlign: "center", padding: "15px", background: "#ffd600", marginTop: 45, display: "block", textDecoration: "none", color: "#fff", fontSize: 25}}>Voir le prototype</a>
                                            <HorizontalSlide vals={datas.imgSlide} />
                                        </div>
                                    )
    
                                })}
                            </div >
    
    
                        )
                    }
                })

    
            })
        })
    


    // Packaging creations

     // Mockup
     const mockupPrint = mockup.map((data, index) => {
        return data.ListSlide.map((list, index) => {
            return list.PartOne.map((datas, index) => {
                if (locationName.includes("mockup-shoes")) {
                    return (
                        <div id="portfolio-mockup-shoes" className="content-portfolio">
                            <div className="content-txt-portfolio">
                                <h2 className="title-portfolio dark-blue-color">{datas.title}</h2>
                                <p className="txt-portfolio">{datas.informations}</p>
                            </div>
                            <HorizontalSlide vals={datas.imgSlide} />
                        </div >


                    )
                }
            })

        })
    })


    // Illustrations
    const illustrationDigitIllustration = illustrationDigit.map((data, index) => {
        return data.ListSlide.map((list, index) => {
            return list.PartOne.map((datas, index) => {
                if (locationName.includes("carnet-illustration")) {
                    return (
                        <div id="portfolio-illustration" className="content-portfolio">
                            <div className="content-txt-portfolio">
                                <h2 className="title-portfolio dark-blue-color">{datas.title}</h2>
                                <p className="txt-portfolio">{datas.informations}</p>
                            </div>
                            <HorizontalSlide vals={datas.imgSlide} />
                            {list.PartTwo.map((datas, index) => {
                                return (
                                    <div>
                                        <div className="content-txt-portfolio">
                                            <h2 className="title-portfolio dark-blue-color">{datas.title}</h2>
                                            <p className="txt-portfolio">{datas.informations}</p>

                                        </div>
                                        <HorizontalSlide vals={datas.imgSlide} />
                                    </div>
                                )

                            })}
                            {list.PartThree.map((datas, index) => {
                                return (
                                    <div>
                                        <div className="content-txt-portfolio">
                                            <h2 className="title-portfolio dark-blue-color">{datas.title}</h2>
                                            <p className="txt-portfolio">{datas.informations}</p>

                                        </div>
                                        <HorizontalSlide vals={datas.imgSlide} />
                                    </div>
                                )

                            })}
                        </div >



                    )
                }
            })

        })
    })


    return [prints, afficheCinemaPrint, flyerMyBootikPrint, cocaColaPrint, magazineRetroGamePrint,  carteDeVisiteFreelancePrint, titiBurgerPrint, logotypePrint, carteDeVisiteGraphistePrint, paperToyPrint, mallyancePrint, sephoraWeb, illustrationDigitIllustration, mockupPrint, titiBurgerMobileWeb]

}

export default ListsPages;



