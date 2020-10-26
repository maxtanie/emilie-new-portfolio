import React, { Component } from 'react'
import './Header.scss';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';


const Header = ({ text }) => {
    return (
        <header className="bg-header">
            <div className="content">
                <p className="text-header-presentation">Hello, <br/> La fille sur l'arc-en-ciel c'est moi Emilie !<br/> Je suis graphiste et travaille essentiellement sur des illustrations.</p>
                <p className="text-header-presentation">Si vous avez besoin de vous différencier sur vos supports de communication, de créer une identité de marque pour votre projet, je peux vous y aider.</p>
                <p className="text-header-presentation">Voici comment...</p>
                <Link to="/portfolio" className="link-anchors">
                    <Button txt="Ce que je peux faire pour vous" colorTxt="#fff !important" padding="10px" min-width="150px" bgColor="#4f0fd5" margin="20px" txtSize="1.1em" />
                </Link>
            </div>
            {/* <div className="scrollDown-btn">
                <i class="fal fa-chevron-circle-down scrollDown"></i>
                <p> Scroll Down</p>
            </div> */}
        </header>
    )

}



export default Header;