import React from 'react';
import './Contact.scss';
import { Link } from "react-router-dom";

import emilie from "../../images/contact/emilie.png";
import instragramIcon from "../../images/home/footer/icone-instagram.png";
import linkedinIcon from "../../images/home/footer/icone-linkeding.png";
import behanceIcon from "../../images/home/footer/icone-behance.png";
import ContactForm from "./ContactForm2";

export default function Contact() {
    
    return (
        <section id="contact" className="margin-top-section">
            <div className="grid-contact">
                <aside className="contact-left">
                    <img src={emilie} className="contact-picture" />
                </aside>
                <aside className="contact-right">
                    <h2 className="white center size-40-px">Découvrons vos projets</h2>
                    <ContactForm />
                    <div className="social-links">
                        <h2 className="white center mt-40px">Restons connecter</h2>
                            <div className="grid-social-links">
                                <span className="social-links-circles">
                                <div className="content-icon-contact icon-instagram">
                                <a href="https://www.instagram.com/lightningcreative/" target="_blank" rel="noopener">
                                <img
                                    src={instragramIcon}
                                    alt="instragam icon "
                                    className="icon-contact"
                                />
                                </a>
                                </div>
                                </span>
                                <span className="social-links-circles">
                                <div className="content-icon-contact icon-linkedin">
                                <a href="https://www.linkedin.com/in/emilie-pham-da-98173532/" target="_blank" rel="noopener">
                                <img
                                    src={linkedinIcon}
                                    alt="linkedin icon"
                                    className="icon-contact"
                                />
                                </a>
                            </div>
                                </span>
                                <span className="social-links-circles">
                                <div className="content-icon-contact icon-behance">
                                <a href="https://www.behance.net/emiliepham95e0" target="_blank" rel="noopener">
                                <img
                                    src={behanceIcon}
                                    alt="behance icon"
                                    className="icon-contact mt-15"
                                />
                                </a>
                            </div>
                                </span>                           
                
                            </div>
                        </div>
                </aside>
            </div>
        </section>
    )
}
