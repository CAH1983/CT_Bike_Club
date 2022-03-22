import React, {useState} from 'react';
import './ContactCard.css';



const greetUser = () => console.log(`hello`);

const ContactCard = ({ firstName, lastName, phone, src }) => {
    const [open, setModalOpen] = useState(false);
    return (

        <div className={ open ? 'contact-card-big' :'ContactCard' } onClick={() => setModalOpen(!open)}>
            <div>

                <img src={src} alt={`${lastName}-pic`} />
            </div>

            <div className="contact-details-wrapper">
                <p className='contact-names'>{firstName} {lastName}</p>
                <p className='contact-phone'> Tel: {phone}</p>
            </div>


        </div>
    )
}

export default ContactCard;