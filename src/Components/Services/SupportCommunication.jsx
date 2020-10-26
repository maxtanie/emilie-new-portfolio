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
                title="Support communication :"
                txt="Je vous assiste pendant tout le processus créatifs
                de votre projets print, à sa mise en page jusqu'à
                l’impression d’imposition et au bon à tirer. "/>
            </div>
            <QuestionsCourantes servicesArray={arrayIdentite} />
        </section>
    )
}
