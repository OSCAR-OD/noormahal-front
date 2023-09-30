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

///////////////
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import './Services.css'; // You can remove the duplicate import
// import Link from 'next/link';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faPaintRoller,
//   faBroom,
//   faPeopleCarryBox,
//   faHandsHoldingChild,
// } from '@fortawesome/free-solid-svg-icons';
// import Image from 'next/image';

// const RoomServices = () => {
//   const [cards, setCards] = useState([]);

//   useEffect(() => {
//     axios
//       .get('http://localhost:3030/cardRoute')
//       .then((response) => {
//        // console.log(response.data);
//         setCards(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching cards:', error);
//       });
//   }, []);

//   return (
//     <section className="droomservices">
//     <div className="container">
//       {/* <img src="./assets/images/departmets-vector.svg" alt="Vector line art" /> */}
//       {/* <img src="https://res.cloudinary.com/dloaa5m7e/image/upload/v1695974956/noormahal/Banner1_voozpr.jpg"  className="vector-line" /> */}
//       <h2 className="h2 droomservices-title">We Have Most of Popular Departments</h2>

//       <ul className="droomservices-list">
//         {/* Repeat this structure for each department */}
//         <li>
//           <div className="droomservices-card">
//             <a href="#" className="card-banner">
//               <figure>
//                <img src="https://res.cloudinary.com/dloaa5m7e/image/upload/v1695974956/noormahal/Banner1_voozpr.jpg" />
//                </figure>
//             </a>
//             <h1>ewrtw werttw SUITES 650 SQ. FT.</h1>
//          <h2>Designed with a dash of majestic past!</h2>
//            <p>Khwabgah is a spacious royal chamber encompassing 2 bedrooms, a living room, a dining room, a separate bar, a private butler service and an office chamber with a private terrace. Arched stonework, rich...</p>
      
//            <a href="#" className="card-link">
//               <span>Learn More</span>
              
//             </a>
//           </div>
//         </li>
//         {/* Repeat for other droomservices */}
//       </ul>

//       <button className="btn btn-primary">View All Department</button>
//     </div>
//   </section>
//   );
// };

// export default RoomServices;
