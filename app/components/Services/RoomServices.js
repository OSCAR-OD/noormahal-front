import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaintRoller, faBroom, faPeopleCarryBox, faHandsHoldingChild } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

const RoomServices = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios.get('https://noormahal-api.onrender.com/cardRoute') 
    .then((response) => {
        setCards(response.data);
      })
      .catch((error) => {
        console.error('Error fetching cards:', error);
      });
  }, []);

  return (
    <section className="droomservices">
      <div className="container">
        <ul className="droomservices-list">
          {/* Map through the 'cards' array to display each card */}
          {cards.map((card) => (
            <li key={card._id}>
              <div className="droomservices-card">
                {/* Render the card image */}
                <a href="#" className="card-banner">
                  <figure>
                    <img src={card.pic[0].url} alt={card.heading} />
                  </figure>
                </a>
                <h3 className="h3 card-title">{card.heading}</h3>
                <p className="card-text">{card.subheading}</p>
                <p className="card-text">{card.desc}</p>
                <a href="#" className="card-link">
                  <span>Learn More</span>
                </a>
              </div>
            </li>
          ))}
        </ul>
        <h2 className="h2 section-title">IN-ROOM SERVICES & AMENITIES</h2>
        
        <div className="center-image">
       <img
         className="section-image lazy loading"
         src="/pics/exp.png"
         alt="section image"
       />
       </div>
          </div>
    </section>
  );
};

export default RoomServices;
