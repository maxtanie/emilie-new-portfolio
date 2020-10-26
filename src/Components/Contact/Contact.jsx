import React from 'react';
import emailjs from 'emailjs-com';
import './Contact.scss';
import emilie from "../../images/contact/emilie.png";

export default function Contact() {


    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmail', 'portfolio', e.target, 'user_9fPraNQB6BGMJSIazbua6')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }


    const serviceLists = [
        {
            name: "Web Design",
            label: "webDesign"
        },
        {
            name: "UX/UI",
            label: "uxUi"

        },
        {
            name: "Motion Design",
            label: "motionDesign"
        },
        {
            name: "Illustration",
            label: "illustration"
        },
        {
            name: "Print : Affiche/Logotype",
            label: "printAfficheLogotype"
        }
    ]

    return (
        <section id="contact" className="margin-top-section">
            <div className="grid-contact">
                <aside className="contact-left">
                    <img src={emilie} className="contact-picture" />
                </aside>
                <aside className="contact-right">
                    <h2 className="white center size-40-px">Découvrons vos projets</h2>
                    <form className="margin-top-form" onSubmit={sendEmail}>
                        <input type="text" name="name" placeholder="Nom et prénom obligatoire*" className="input-style" />
                        <input type="email" name="email" placeholder="Email obligatoire*" className="input-style" />
                        <input type="tel" name="phone" placeholder="Numéro de téléphone, non obligatoire" className="input-style" />
                        <label htmlFor="services" className="services-name">Quels services vous intéressent ?</label>
                        <div className="grid-services">
                            {serviceLists.map((services, index) => {
                                return (
                                    <div className="services-lists" key={index}>
                                        <input type="checkbox" value={services.name} name="services" />
                                        <label htmlFor={services.label} className="label-services"> {services.name}</label>
                                    </div>
                                )
                            })}
                        </div>
                        <input type="text" name="subject" placeholder="Objet" className="input-style" />
                        <textarea name="message" id="textarea-contact" placeholder="Message" rows="10"></textarea>
                        <button className="btn-contact">Envoyer</button>

                        <div className="social-links">
                            <h2 className="white center mt-40px">Restons connecter</h2>
                            <div className="grid-social-links">
                                <span className="social-links-circles"></span>
                                <span className="social-links-circles"></span>
                                <span className="social-links-circles"></span>
                            </div>
                        </div>
                    </form>
                </aside>
            </div>

        </section>
    )
}
