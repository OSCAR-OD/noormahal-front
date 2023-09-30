"use client";
import './header.css';
import Image from "next/image";

import { useEffect, useRef } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {
//   solid,
//   regular,
//   brands,
//   icon
// } from '@fortawesome/fontawesome-svg-core/import.macro'
/////////////
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
//////////
//import { IonIcon } from 'ionicons/react';

import Link from "next/link"
//import './header.css';
import { useState } from "react";
//import MobileNav from "../MobileNav/MobileNav";
import { handleScroll } from "../JsContent/scrollHandler";

const Header = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const handleNavbarToggle = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const navbarRef = useRef(null);

   const handleOutsideClick = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setIsNavbarOpen(false);
    }
  };

  useEffect(() => {
     document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

    useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  return (
    // <header className="header" data-header>
    <header className={`header ${isNavbarOpen ? 'active' : ''}`} data-header>
    
    <div className="container">
      <h1>
        <a href="#" className="logo">
        <Image
             className="logo__main__img lazy loading"
             src="/pics/nmlogo.png"
             width={80}
             height={80}
             alt="Profile picture"
           /> 
           </a>
      </h1>
      <nav
      //  ref={navbarRef}
       className={`navbar ${isNavbarOpen ? 'active' : ''}`} data-navbar>
     
      {/* <nav className="navbar" data-navbar>
       */}
        <div className="navbar-top">
          <a href="#" className="logo">
          <Image
             className="logo__img lazy loading"
             src="/pics/nmlogo.png"
             width={80}
             height={80}
             alt="Profile picture"
           /> </a>
          <button className="nav-close-btn" aria-label="Close menu" data-nav-toggler>
          {/* <FontAwesomeIcon icon={brands('twitter')} />
          */}
          <FontAwesomeIcon icon={faXmark} />
            {/* <ion-icon name="close-outline"></ion-icon>
          */}
          </button>
        </div>
        <ul className="navbar-list">
        <li className="navbar-item">
            <a href="#OVERVIEW" className="navbar-link" data-nav-toggler>
            OVERVIEW</a>
          </li>
          <li className="navbar-item">
           <a href="#STAY" className="navbar-link" data-nav-toggler>
           STAY</a>
           </li>
             <li className="navbar-item">
            <a href="#DINING" className="navbar-link" data-nav-toggler>
            DINING</a>
            </li>
          <li className="navbar-item" >
            <a href="#WEDDINGS" className="navbar-link" data-nav-toggler>
            WEDDINGS & EVENTS</a>
          </li>
          <li className="navbar-item">
            <a href="#logo" className="navbar-link" data-nav-toggler>
            <Image
             className="logo__img lazy loading"
             src="/pics/nmlogo.png"
             width={80}
             height={80}
             alt="Profile picture"
           /> </a>
            </li>
            <li className="navbar-item">
            <a href="#MEETINGS" className="navbar-link" data-nav-toggler>
            MEETINGS & CONFERENCES</a>
            </li>
            <li className="navbar-item">
            <a href="#PROMOTIONS" className="navbar-link" data-nav-toggler>
            PROMOTIONS</a>
            </li>
            <li className="navbar-item">
            <a href="#EXPERIENCES" className="navbar-link" data-nav-toggler>
            EXPERIENCES</a>
            </li>
          <li className="navbar-item" >
          <a href="https://cityhub.onrender.com/" target="_blank" id="lgbtn" className="navbar-link lgbtn" data-nav-toggler>
          BOOK NOW
        </a>
          </li>
        </ul>
      </nav>
      <div className="header-actions">
        {/* <button className="header-action-btn" aria-label="Open search" data-search-toggler>
     
        </button> */}
        {/* <a href="#" className="header-action-btn login-btn">
          <span className="span">Login / Register</span>
        </a> */}
        {/* ////////////////// */}
        <a href="https://cityhub.onrender.com/" target="_blank" className={`header-action-btn login-btn ${isNavbarOpen ? 'show-mobile' : ''}`}>
        <span className="span">BOOK NOW</span>
        </a>

        {/* <button className="header-action-btn nav-open-btn" aria-label="Open menu" data-nav-toggler>
       <FontAwesomeIcon icon={faBars} />
        </button> */}
        <button
           ref={navbarRef}
          className="header-action-btn nav-open-btn"
          aria-label="Open menu"
          onClick={handleNavbarToggle}
          data-nav-toggler
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
      {/* <div className="overlay" data-nav-toggler data-overlay></div>
       */}
      <div
        className={`overlay ${isNavbarOpen ? 'active' : ''}`}
        data-nav-toggler
        data-overlay
      ></div>
    </div>
  </header>
    );
}

export default Header;