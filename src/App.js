import Header from './components/Header/Header';
import './App.css';
import ContactCard from './components/ContactCard/ContactCard';
import React, { useState } from 'react';
import contactsData from './contact-data.json';

function App() {
  const generateNum = () => Math.floor(Math.random() * 11);
  const randomNum = generateNum();

  return (
    <div className="App">
      <Header />
      <main>

        <ul className='contacts-wrapper'>

          {contactsData.map(contact => (
            <li key={contact.id}>
              <ContactCard firstName={contact.first_name} lastName={contact.last_name} phone={contact.phone} src={require(`./contact-images/${randomNum}.jpeg`)} />

            </li>
          ))}
        </ul>



      </main>
    </div>
  );
}

export default App;
