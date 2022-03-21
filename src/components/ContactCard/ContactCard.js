import React from 'react';
import './ContactCard.css';


const ContactCard = ({ firstName, lastName, phone, src}) => {
    return( 

        <div className='ContactCard'>
            <img src={src} alt={`${lastName}-picture`}/>

            <div className="details">
            <p>{firstName} {lastName}</p>
            <p> Tel: {phone}</p>
            </div>


        </div>
    )
}

export default ContactCard;