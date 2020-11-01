import React from 'react';
import About from '../About/About';
import illustration from '../../images/services/icones-articles/illustration.jpg';
import model1 from '../../images/services/icones-articles/mode-1.jpg';
import model2 from '../../images/services/icones-articles/poon.jpg';


export default function Illustrations() {
    const Text = () => {
        return (
            <div className="text">
                <p>Je vous propose trois options de domaine selon vos projets de
                création :</p>
                <span><b>Storyboard sur mesure et thème<br />
                    Character design de personnage :<br />
                    Arts traditionnelle/Numérique : </b> Peinture numérique, Peinture
                    acrylique, Feutre alcoolique
                </span><br />
                <b>Paysage / Architecture </b>
                <p>Materiels :</p>
                <p>Crayons, Fusain, Acrylique, Crayons de couleurs</p>
            </div>
        )
    }
    return (

        <div>
            <section id="illustration">
                <div className="container-main">
                    <About
                        img={illustration}
                        paddingTop="120px"
                        paddingBottom="50px"
                        sizeTitle="55px"
                        sizeTxt="25px"
                        title="Illustration :"
                        txt=' <div className="text">
                        Je vous propose trois univers créatifs pour vos supports print et web, que je décline en fonction de vos objectifs et de votre univers : <br/>

                        - <b>Personnages</b><br/>
                        
                        - <b>Paysages et architecture</b><br/>
                        
                        - <b/>Nature morte</b><br/>
                        
                        Mon style graphique repose sur différentes techniques et j’utilise des matériaux de dessin variés tels que la peinture, l’acrylique, le feutre, le crayon, le fusain. J’adapte ces outils aussi bien à des créations numériques que à de l’édition (print).
                    </div>' />

                    <article id="styles-design">
                        <div className="flex">
                            <img src={model1} alt="" className="img-illustration" />
                            <aside className="text-style-design purple-color">
                                <h2 className="title">Un style graphique </h2>
                                <p>Mon style de dessin de mode est basé sur mes passions pour l’univers Fantasy, les créatures mystérieuses, les chimères, la féérie… Je m’inspire des légendes et des contes pour créer des personnages originaux.</p><br />

                                <h2 className="title">Le design de mode </h2>
                                <p>Ma passion pour la mode m’apporte une créativité indispensable pour ce secteur très concurrentiel. Elle m’inspire pour créer des styles vestimentaires et des accessoires uniques.</p><br />

                                <h2 className="title">L’architecture et les paysages</h2>
                                <p>J’utilise ma créativité pour représenter et dessiner des constructions et des bâtiments qui mettent en valeurs vos ensembles immobiliers (bureaux, bâtiments, œuvres architecturales).</p>
                            </aside>
                            <img src={model2} alt="" className="img-illustration" />
                        </div>
                    </article>
                </div>
            </section>


        </div>
    )
}
