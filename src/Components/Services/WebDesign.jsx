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
                txt="De la conception d’une landing page à un site e-commerce, en passant par des outils CMS, je vous propose la création graphique de vos outils en respectant les critères ergonomiques. Mon objectif reste toujours le même : l’optimisation de vos conversions sur ces supports. Je m’adapte à tous les domaines et crée des univers graphiques sur mesure et attractif."/>

                <About 
                img={titiBurger}
                paddingTop="0px"
                paddingBottom="60px"
                sizeTitle="55px"
                sizeTxt="30px"
                title="Création de votre site web :"
                txt="Présenter votre activité sur internet est indispensable, le faire de manière optimale est primordial. La phase d’étude de vos besoins me permet de faire ressortir les objectifs du site pour votre activité (notoriété, image, conversion…). Je le conçois ensuite de manière à vous conduire à ce résultat. Pour présenter votre entreprise, vos services et les valoriser auprès de vos clients, j’utilise les critères webdesign qui font le succès du moment."/>
    
                <About 
                img={appliMobileTitiBurger}
                paddingTop="120px"
                paddingBottom="60px"
                sizeTitle="55px"
                sizeTxt="30px"
                title="Création de votre application mobile :"
                txt="Une application mobile vous permet d’offrir des fonctionnalités utiles à vos clients.A forte valeur ajoutée, c’est un outil du web qui vous rapproche d’eux et les fidélise. De la réflexion à la conception, je vous accompagne pour crée une application sur-mesure, répondant aux exigences du web. Je vous propose ensuite un service de maintenance et reste à vos côtés pour optimiser et faire évoluer cet outil en fonction des attentes de vos utilisateurs."/>

                <About 
                img={acquisitionEquipe}
                paddingTop="0px"
                paddingBottom="60px"
                sizeTitle="55px"
                sizeTxt="30px"
                title="Une équipe d'experts à vos côtés :"
                txt="Je travaille avec des partenaires qualifiés pour vous apporter tout leur savoir-faire. Je m’entoure de développeurs web, motion designers et intégrateurs web. En tant que chef de projet, je m’occupe de toute la gestion et reste votre unique point interlocuteur. Vous économisez votre temps et gagnez en efficacité et en sérénité."/>
                <QuestionsCourantes servicesArray={arrayIdentite} />
            </div>
        </section>
    )
}
