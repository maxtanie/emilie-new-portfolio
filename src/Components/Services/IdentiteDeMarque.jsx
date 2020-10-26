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
                title="Identité la marque :"
                txt="A la conception d’un logotype et la mise en
                oeuvre d’une charte graphique complète, je vous
                suis dans l’organisation entière de votre projet,
                avec une solution confirmer montrer étape par
                étape les processus créatifs qui sont bien
                réglementé dans le domaine professionnelle. "/>

                <About 
                img={organisationAdapte}
                paddingTop="0px"
                paddingBottom="60px"
                sizeTitle="55px"
                sizeTxt="30px"
                title="L’organisation adaptée :"
                txt="Les solutions adapter à la bonne direction artistique se
                définit par vos besoins rechercher sur l’identification de
                votre projet. Cette étape première se traduit par un
                questionnaire constructive, question/ réponse qui
                permettra de mieu connaître un brief créatif bien précis."/>
    
                <About 
                img={recherchesAvances}
                paddingTop="120px"
                paddingBottom="60px"
                sizeTitle="55px"
                sizeTxt="30px"
                title="La recherche avancée :"
                txt="Une fois les idées confirmer et identifier, l’étape de
                conception peut débuter.
                Un Brainstorming est un concepts audacieux ayant pour
                but d’avoir une liste d’idée tel que :
                La recherche graphique, la palette des couleurs, la
                typographie. L’idée est de connaître l'image créative qui
                ressortiront les valeurs de la marque."/>

                <About 
                img={phaseFinale}
                paddingTop="0px"
                paddingBottom="60px"
                sizeTitle="55px"
                sizeTxt="30px"
                title="Phase finale :"
                txt="Suite aux choix finalisé et travailler l’ensemble des
                directions créatifs sur l’une des propositions bien définis,
                tous les concepts graphique finalisés vous seront
                donnée. Une notice d’utilisation de votre charte
                graphique et identité visuelle sera à votre possessions
                afin d'affirmer une cohésion sur tous vos supports."/>
         </div>
         <QuestionsCourantes servicesArray={arrayIdentite} />
        </section>
    )
}

export default IdentiteDeMarque;