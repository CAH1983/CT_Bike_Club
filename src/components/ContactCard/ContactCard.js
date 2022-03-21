import React from 'react';
import './ContactCard.css';


const ContactCard = ({ firstName, lastName, phone, src}) => {
    return( 

        <div className='ContactCard'>
            <div>

            <img src={src} alt={`${lastName}-pic`}/>
            </div>

            <div className="contact-details-wrapper">
                <p className='contact-names'>{firstName} {lastName}</p>
                <p className='contact-phone'> Tel: {phone}</p>
            </div>


        </div>
    )
}

export default ContactCard;