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
                <h3 className='contact-names'>{firstName} {lastName}</h3>
                <p className='contact-phone'> Tel: {phone}</p>
            </div>


        </div>
    )
}

export default ContactCard;