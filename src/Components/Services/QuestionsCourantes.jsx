import React, { useState } from 'react'


// export default function QuestionsCourantes({ servicesArray }) {

//     const [questions, setQuestions] = useState(false);



//     return (
//         <section class="section-questions-courantes container purple-color ">
//             <h2 className="center title-section">Les questions courantes.</h2>
//             {servicesArray.map((list, index) => {
//                 return (
//                     <div key={index} className="services-datas m-top-50px" id={index}>
//                         <span className="questions" onClick={() => setQuestions(!questions)}>
//                             <span className="services-questions">{list.question}</span> <i className={questions ? 'fal fa-angle-up ml-20px services-questions' : 'fal fa-angle-down ml-20px services-questions'}></i>
//                         </span>
//                         <span className={!questions ? 'none' : 'services-answers'}>
//                             <b >réponse : </b><span>{list.answer}</span>
//                         </span><a href="tel:+"></a>

//                     </div>
//                 )


//             })}
//         </section>
//     )
// }

const Accordion = ({ question, answer }) => {
    const [isOpen, setOpen] = useState(false);
    return (
        <div className="accordion-wrapper">

            <div
                className={`accordion-title purple-color ${isOpen ? "open" : ""}`}
                onClick={() => setOpen(!isOpen)}
            >
                {question}
            </div>
            <div className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
                <div className="accordion-content"><b>Réponse : </b>{answer}</div>
            </div>
        </div>
    );
};

export default function QuestionsCourantes({ servicesArray }) {
    return (
        <section class="section-questions-courantes container purple-color ">
            <h2 className="center title-section">Les questions courantes.</h2>
            {servicesArray.map((list, index) => {
                return (
                    <div className="m-top-50px">
                        <Accordion question={list.question} key={index} answer={list.answer} />
                    </div>
                )
            })
            }

        </section>
    )


}

