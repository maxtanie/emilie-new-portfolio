import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './PlusProjet.scss';


const PlusProjet = () => {
    return (
        <section id="plus-projet">
            <h3 className="noto-regular"><Link to="/" className="td-none purple-color">Plus de projets à voir </Link><i class="fal fa-arrow-right arrow-margin-left"></i></h3>
        </section>
    )
}

export default PlusProjet;
