import React, {useState, useEffect} from 'react';
import emailjs from 'emailjs-com';

export default function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [object, setObject] = useState("");
    const [message, setMessage] = useState("");
    const [output, setOutput] = useState("");
    const [outputEmail, setOutputEmail] = useState("");
    const [outputPhone, setOutputPhone] = useState("");
    var [outputSubmit, setOutputSubmit] = useState(false);

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

    const instructions = name.length < 5 || email.length < 5 || object.length < 5 || message.length < 5;

    useEffect(() => {
        if(instructions) {
            return setOutput("Veuillez Remplir tous les champs.");
        }
        else {
            return setOutput("Merci, tous les champs sont remplis.");
        }
    })

    const ValideEmail = () => {
        return (
            <p style={{marginTop: 15}} className={!email.match(mailformat) ? "error-message" : "validate-message"}>{email.match(mailformat)? "Email valide." : "Veuillez entrer un email valide."}</p>
        )
    }

    const ValidePhone = () => {
        return (
            <p style={{marginTop: 15}} className={!phone.match(/^\d{10}$/g) ? "error-message" : "validate-message"}>{phone.match(/^\d{10}$/g)? "Téléphone valide." : "Veuillez entrer un numéro de téléphone valide."}</p>
        )
    }

    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var phoneFormat = /^[2-9]\d{2}[2-9]\d{2}\d{4}$/;

    return (
        <form className="margin-top-form" onSubmit={sendEmail}>
            <p className={instructions ? "error-message" : "validate-message"}>{output}</p>
            <input type="text" name="name" value={name} placeholder="Nom et prénom obligatoire*" className="input-style" onChange={e => setName(e.target.value)} />
            <input type="email" name="email" value={email} placeholder="Email obligatoire*" className="input-style" onChange={e=> setEmail(e.target.value)} />
            {email.length >= 2 ? <ValideEmail/> : ""}
            <input type="tel" name="phone" value={phone} placeholder="Numéro de téléphone, non obligatoire" className="input-style" onChange={e=> setPhone(e.target.value)} />
            {phone.length >= 2 ? <ValidePhone/> : ""}
            
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
            <input type="text" name="subject"  value={object} placeholder="Objet" className="input-style" onChange={e=> setObject(e.target.value)} />
            <textarea name="message" value={message}  id="textarea-contact" placeholder="Message" rows="10" onChange={e=> setMessage(e.target.value)}></textarea>
            <button className="btn-contact">Envoyer</button>
                      
        </form>
    )
}
