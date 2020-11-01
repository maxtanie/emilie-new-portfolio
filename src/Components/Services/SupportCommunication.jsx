import React from 'react';
import About from '../About/About';
import supportCom from '../../images/services/icones-articles/print.jpg';
import QuestionsCourantes from './QuestionsCourantes';
import arrayIdentite from '../../Object/services/supportCommunication.json';


export default function SupportCommunication() {
    return (
   
        <section id="webdesign">
            <div className="container-main">
                <About 
                img={supportCom}
                paddingTop="120px"
                paddingBottom="50px"
                sizeTitle="55px"
                sizeTxt="30px"
                title="Supports de communication :"
                txt="Vos supports de communication print sont le reflet de vos valeurs et de votre qualité de service. Ils doivent valoriser vos produits, attirer l’œil de vos clients et leur donner envie de vous faire confiance.

                Lorsque vous me confiez la réalisation de ces supports, je prends le temps de comprendre vos enjeux afin de ne pas créer un énième document qui ne vous permettrait pas d’atteindre vos objectifs. Mon ambition est de vous faire bénéficier d’outils valorisants et de qualité pour votre activité.  
                
                Je vous accompagne jusqu’à la phase d’impression au cours de laquelle je gère pour vous toute la partie opérationnelle. Vous vous déchargez de tous les aspects techniques. Je vous livrer un produit fini, prêt à être diffusé."/>
            </div>
            <QuestionsCourantes servicesArray={arrayIdentite} />
        </section>
    )
}
