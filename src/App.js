import Header from './components/Header/Header';
import './App.css';
import ContactCard from './components/ContactCard/ContactCard';
import React, { useState } from 'react';
import contactsData from './contact-data.json';

function App() {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="App">
      <Header />
      <main className={darkMode ? "dark-mode" : "light-mode"}>

        <div className="btn-container">
          <span style={{ color: darkMode ? "grey" : "yellow" }}>☀︎</span>
          <div className="switch-checkbox" role="button">
            <label className="switch">
              <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
              <span className="slider round"> </span>
            </label>
          </div>
          <span style={{ color: darkMode ? "#c96dfd" : "grey" }}>☽</span>
        </div>

        <ul className='contacts-wrapper' role='tablist'>

          {contactsData.map(contact => (
            <li key={contact.id} >
              <ContactCard firstName={contact.first_name} lastName={contact.last_name} phone={contact.phone} />

            </li>
          ))}

        </ul>
      </main>
    </div>
  );
}

export default App;
