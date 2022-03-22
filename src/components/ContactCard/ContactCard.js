import React, { useState } from 'react';
import './ContactCard.css';


const ContactCard = ({ firstName, lastName, phone }) => {
    const [open, setModalOpen] = useState(false);
    const generateNum = () => Math.floor(Math.random() * 10) + 1;
    const randomNum = generateNum();
    
    return (

        <div role="tab" className={open ? 'contact-card-big' : 'ContactCard'} onClick={() => setModalOpen(!open)}>
            <div>
                <img src={require(`./../../contact-images/${randomNum}.jpeg`)} alt={`${lastName}-pic`} />
            </div>

            <div className="contact-details-wrapper">
                <h3 className='contact-names'>{firstName} {lastName}</h3>
                <p className='contact-phone'> Tel:{phone}</p>
            </div>

        </div>
    )
}

export default ContactCard;