import React from 'react'
import About from '../About/About';
import identiteMarque from '../../images/services/icones-articles/indentite.jpg';
import organisationAdapte from '../../images/services/icones-articles/carte-collect.jpg'
import recherchesAvances from '../../images/services/icones-articles/icone-victoir.jpg'
import phaseFinale from '../../images/services/icones-articles/carte-visite-emilie.jpg';
import QuestionsCourantes from './QuestionsCourantes';
import arrayIdentite from '../../Object/services/identiteDeMarque.json';
import './Services.scss';



function IdentiteDeMarque() {
    return (
        <section id="identite-de-marque">
            <div className="container-main">
                <About 
                img={identiteMarque}
                paddingTop="120px"
                paddingBottom="120px"
                sizeTitle="55px"
                sizeTxt="30px"
                title="Votre identité la marque :"
                txt="De votre logo à l’ensemble de votre charte graphique, je crée l’identité visuelle qui vous rend remarquable et vous permet de vous différencier.
                Etape par étape, j’utilise un processus créatif qui vous inclut dans la réalisation de ce travail qui traduira l’ADN et la personnalité de votre projet ou votre marque."/>

                <About 
                img={organisationAdapte}
                paddingTop="0px"
                paddingBottom="60px"
                sizeTitle="55px"
                sizeTxt="30px"
                title="Une approche personnalisée :"
                txt="Afin de répondre pleinement à votre objectif, je dois comprendre VOS enjeux et VOS besoins. Je prends ainsi l’engagement de vous aider à résoudre les problématiques qui vous sont propres. Pour cela je démarre notre collaboration avec un entretien et un questionnaire dont les réponses me permettront de réaliser un brief créatif. Celui-ci servira de base à notre collaboration."/>
    
                <About 
                img={recherchesAvances}
                paddingTop="120px"
                paddingBottom="60px"
                sizeTitle="55px"
                sizeTxt="30px"
                title="Une recherche approfondie"
                txt="Une fois le brief défini, nous démarrons la création graphique. Une réunion de brainstorming permet de définir les pistes créatives (couleurs, typographie…). L’idée est de faire ressortir un univers graphique qui traduira les valeurs de votre marque."/>

                <About 
                img={phaseFinale}
                paddingTop="0px"
                paddingBottom="60px"
                sizeTitle="55px"
                sizeTxt="30px"
                title="La phase finale :"
                txt="Après validation des tendances graphiques, je formalise ces choix dans le cadre d’une charte graphique complète et détaillée. Ce document vous sera remis en fin de prestation afin de pouvoir les décliner sur l’ensemble de vos supports print et web (site internet, flyer, plaquette…)."/>
         </div>
         <QuestionsCourantes servicesArray={arrayIdentite} />
        </section>
    )
}

export default IdentiteDeMarque;