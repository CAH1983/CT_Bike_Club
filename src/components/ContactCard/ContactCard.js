import React, { useState } from 'react';
import './ContactCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';


const ContactCard = ({ firstName, lastName, phone }) => {
    const [open, setModalOpen] = useState(false);
    const generateNum = () => Math.floor(Math.random() * 10) + 1;
    const randomNum = generateNum();

    const handleClick = (e) => {
        e.preventDefault();
        setModalOpen(!open);
    }

    const handleKeyPress = () => {
        setModalOpen(!open)
    }

    return (

        <div className={open ? 'contact-card-big' : 'ContactCard'} onClick={handleClick} onKeyPress={handleKeyPress} tabIndex='0'>
            <div>
                <img src={require(`./../../contact-images/${randomNum}.jpeg`)} alt={`${lastName}-pic`} />
            </div>

            <div className="contact-details-wrapper">
                <h3 className='contact-names'>{firstName} {lastName}</h3>
                <p className='contact-phone'> <FontAwesomeIcon icon={faPhone} /> {phone}</p>
            </div>

        </div>
    )
}

export default ContactCard;