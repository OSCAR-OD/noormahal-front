
import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from "next/link"
import './Services.css';
//import './Catagory.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaintRoller, faBroom, faPeopleCarryBox, faHandsHoldingChild } from '@fortawesome/free-solid-svg-icons'

import Image from "next/image";

const Services = () => {

  const [cards, setCards] = useState([]);
 
  useEffect(() => {
    axios.get('http://localhost:3030/cardRoute')
      .then((response) => {
        console.log(response.data);
        setCards(response.data);
      })
      .catch((error) => {
        console.error('Error fetching cards:', error);
      });
  }, []);
  
  return (
    <section id='services' className="category" aria-label="category">
      <div className="container">
        <p className="section-subtitle">Service Categories</p>
        <h2 className="h2 section-title">Popular Service In your City</h2>
        <ul className="grid-list">
          <li>
          <div className="card">
         <img src="https://res.cloudinary.com/dloaa5m7e/image/upload/v1695974956/noormahal/Banner1_voozpr.jpg" className="card-image" />
         <div className="card-description">
         <h1>ewrtw werttw SUITES 650 SQ. FT.</h1>
         <h2>Designed with a dash of majestic past!</h2>
           <p>Khwabgah is a spacious royal chamber encompassing 2 bedrooms, a living room, a dining room, a separate bar, a private butler service and an office chamber with a private terrace. Arched stonework, rich...</p>
         </div>
       </div>
          </li>
         
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

export default Services;