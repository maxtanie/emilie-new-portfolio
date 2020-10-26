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
                        txt={<Text />} />

                    <article id="styles-design">
                        <div className="flex">
                            <img src={model1} alt="" className="img-illustration" />
                            <aside className="text-style-design purple-color">
                                <h2 className="title">Styles Design </h2>
                                <p>L’hypothèse de mon style se défini par les passions d’univers
                                Fantasy et de magic ainsi que de créature mystérieuse les
                                chimères, les mutations, les fées, les sorcières. Les comptes de
                            légende m’inspire pour les histoires et le style qu’ils resso</p><br />
                                <p>D’autre passion me permet d’exprimer la créativité par exemple la
                                mode en générale inspire le faite de créer des styles différents
                            d'habits et d'accessoire.</p><br />
                                <p>Les paysages et l’architecture et pour moi une opportunité de
                                lancer cette créativité dans les formes en perspective et la nature
morte en couleur. </p>
                            </aside>
                            <img src={model2} alt="" className="img-illustration" />
                        </div>
                    </article>
                </div>
            </section>


        </div>
    )
}
