import React from 'react'
import About from '../About/About';
import webdesign from '../../images/services/icones-articles/web.jpg';
import titiBurger from '../../images/services/icones-articles/presentation-titi-burger-2020-maquette.jpg'
import appliMobileTitiBurger from '../../images/services/icones-articles/appli-mob-titi-burger.jpg'
import acquisitionEquipe from '../../images/services/icones-articles/pexels-moose-photos-1036641.jpg';
import QuestionsCourantes from './QuestionsCourantes';
import arrayIdentite from '../../Object/services/webdesign.json';

export default function WebDesign() {
    return (
        <section id="webdesign">
      
            <div className="container-main">
            <About 
                img={webdesign}
                paddingTop="120px"
                paddingBottom="120px"
                sizeTitle="55px"
                sizeTxt="30px"
                title="Webdesign :"
                txt="A une conception simple landing page à un site
                e-commerce aux outils CMS, je vous offre des
                créations de site internet dans divers activité du
                web. J’inspire tout domaine visuels parfaitement
                adaptés à vos choix numérique."/>

                <About 
                img={titiBurger}
                paddingTop="0px"
                paddingBottom="60px"
                sizeTitle="55px"
                sizeTxt="30px"
                title="Création site web :"
                txt="Présenter son activité sur le web représente un enjeu
                important. Pour son réseaux et identité de marque
                pouvant intéresser un grand nombre d’internaute.
                J’inspire et conçoit votre site web pour présenter votre
                projet d’entreprise, ses services et cette présentation
                fonctionnelle vous donnera une parfaite méthodologie
                plus objectif de l'apparence webdesign d'aujourd'hui. "/>
    
                <About 
                img={appliMobileTitiBurger}
                paddingTop="120px"
                paddingBottom="60px"
                sizeTitle="55px"
                sizeTxt="30px"
                title="Projet mobile :"
                txt="A l’utilisateur d’interface design, je créer des interfaces
                web, tablettes, mobiles pour tout support ergonomiques
                en cohérence avec les exigences que rencontre des
                utilisateurs. "/>

                <About 
                img={acquisitionEquipe}
                paddingTop="0px"
                paddingBottom="60px"
                sizeTitle="55px"
                sizeTxt="30px"
                title="Acquisition d'équipe :"
                txt="Je travaille avec des partenaires qualifiés du
                secteur numérique développeur web, motion
                designer, intégrateur web afin vous montrer une
                analyse complète, de vos projet d’interfaces et
                d’animation, avec l’opportunité d’avoir un unique
                chef de projet pour toute la gestion. "/>
 <QuestionsCourantes servicesArray={arrayIdentite} />
            </div>
        </section>
    )
}
