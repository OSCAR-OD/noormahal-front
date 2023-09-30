
import { useEffect, useState } from 'react';
import axios from 'axios';
import './Services.css'; // You can remove the duplicate import
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPaintRoller,
  faBroom,
  faPeopleCarryBox,
  faHandsHoldingChild,
} from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

const InRoomServices = () => {

  return (
    <section id='inroomservices' className="roomservices">
      <div className="container">
        <div className="roomservices-top">
          <div className="roomservices-brand">
            <p className="roomservices-list-title">BED & BATH</p>
            <ul className="roomservices-list forbullet">
              <li>
                <p className="span">Posturepedic mattresses & Italian bed linen</p>
              </li>
              <li>
                <p className="span">Softer beds & hard boards on request</p>
              </li>
            </ul>
          </div>

          <div className="roomservices-brand">
            <p className="roomservices-list-title">BED & BATH</p>
            <ul className="roomservices-list forbullet">
              <li>
                <p className="span">Posturepedic mattresses & Italian bed linen</p>
              </li>
              <li>
                <p className="span">Softer beds & hard boards on request</p>
              </li>
            </ul>
          </div>

          <div className="roomservices-brand">
            <p className="roomservices-list-title">BED & BATH</p>
            <ul className="roomservices-list forbullet">
              <li>
                <p className="span">Posturepedic mattresses & Italian bed linen</p>
              </li>
              <li>
                <p className="span">Softer beds & hard boards on request</p>
              </li>
            </ul>
          </div>

          <div className="roomservices-brand">
            <p className="roomservices-list-title">BED & BATH</p>
            <ul className="roomservices-list forbullet">
              <li>
                <p className="span">Posturepedic mattresses & Italian bed linen</p>
              </li>
              <li>
                <p className="span">Softer beds & hard boards on request</p>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default InRoomServices;
// ///////////////////
// // import { useEffect, useState } from 'react';
// // import axios from 'axios';
// // import './Services.css';
// // import Link from "next/link"
// // import './Services.css';
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// // import { faPaintRoller, faBroom, faPeopleCarryBox, faHandsHoldingChild } from '@fortawesome/free-solid-svg-icons'

// // import Image from "next/image";

// // const InRoomServices = () => {

// //   const [cards, setCards] = useState([]);
 
// //   useEffect(() => {
// //     axios.get('http://localhost:3030/cardRoute')
// //       .then((response) => {
// //         console.log(response.data);
// //         setCards(response.data);
// //       })
// //       .catch((error) => {
// //         console.error('Error fetching cards:', error);
// //       });
// //   }, []);
  
// //   return (
    
      
// //     <roomservices className="roomservices" id= 'contact'>
// //     <div className="container">
// //       <div className="roomservices-top">
// //         <div className="roomservices-brand">
// //        <p className="roomservices-list-title">BED & BATH</p>
// //        <ul className="roomservices-list forbullet">
// //           <li>
// //           <p className="span">Posturepedic mattresses & Italian bed linen</p>
// //           </li>
// //           <li>
// //           <p className="span">Softer beds & hard boards on request</p>
// //           </li>
// //          </ul>
// //         </div>

// //         <div className="roomservices-brand">
// //        <p className="roomservices-list-title">BED & BATH</p>
// //        <ul className="roomservices-list forbullet">
// //           <li>
// //           <p className="span">Posturepedic mattresses & Italian bed linen</p>
// //           </li>
// //           <li>
// //           <p className="span">Softer beds & hard boards on request</p>
// //           </li>
// //          </ul>
// //         </div>

// //         <div className="roomservices-brand">
// //        <p className="roomservices-list-title">BED & BATH</p>
// //        <ul className="roomservices-list forbullet">
// //           <li>
// //           <p className="span">Posturepedic mattresses & Italian bed linen</p>
// //           </li>
// //           <li>
// //           <p className="span">Softer beds & hard boards on request</p>
// //           </li>
// //          </ul>
// //         </div>

// //         <div className="roomservices-brand">
// //        <p className="roomservices-list-title">BED & BATH</p>
// //        <ul className="roomservices-list forbullet">
// //           <li>
// //           <p className="span">Posturepedic mattresses & Italian bed linen</p>
// //           </li>
// //           <li>
// //           <p className="span">Softer beds & hard boards on request</p>
// //           </li>
// //          </ul>
// //         </div>

     
// // </div>

// // <div className="roomservices-bottom">
// //   <p className="copyright">
// //     Copyright 2023 CityHub. All Rights Reserved by <a href="https://oscardeb.vercel.app/" target="_blank" className="copyright-link">Oscar Deb</a>
// //   </p>
// // </div>

// // </div>
// // </roomservices>

// //    );
// // };

// // export default InRoomServices;