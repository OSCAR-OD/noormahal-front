import Link from "next/link"
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  //faFacebook,
  //facebook,
  faEnvelope,
  faSquareFacebook,
  faBars,
  faFacebookF,
} from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
      
        <footer className="footer" id= 'contact'>
          <div className="container">
            <div className="footer-top">
              <div className="footer-brand">
                <a href="#" className="logo">
                 CityHub
                </a>
                <p className="section-text">
                  It was established at 1999 to meet the necessities of every demand in bangladesh.
                </p>
                <ul className="social-list">
                  <li>
                    <a href="#" className="social-link">
                    {/* <FontAwesomeIcon icon={faBars} />
                    */}
                    {/* <FontAwesomeIcon icon={faFacebookF} />
                    */}
                    {/* <FontAwesomeIcon icon={faSquareFacebook} />
                 */}
                    {/* <FontAwesomeIcon icon={facebook} /> */}
                    {/* <FontAwesomeIcon icon={faFacebook} /> */}

                      {/* <ion-icon name="logo-facebook"></ion-icon>
                     */}
                    </a>
                  </li>
                  {/* <li>
                    <a href="#" className="social-link">
                      <ion-icon name="logo-twitter"></ion-icon>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="social-link">
                      <ion-icon name="logo-linkedin"></ion-icon>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="social-link">
                      <ion-icon name="logo-pinterest"></ion-icon>
                    </a>
                  </li> */}
                </ul>
              </div>
              <ul className="footer-list">
                <li>
                  <p className="footer-list-title">Explore</p>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    {/* <ion-icon name="chevron-forward" aria-hidden="true"></ion-icon> */}
                    <span className="span">About Us</span>
                  </a>
                </li>
                <li>
                  <a href="#home" className="footer-link">
                    {/* <ion-icon name="chevron-forward" aria-hidden="true"></ion-icon> */}
                    <span className="span">Workers Profile</span>
                  </a>
                </li>
               {/* <li>
                  <a href="#" className="footer-link">
                    <ion-icon name="chevron-forward" aria-hidden="true"></ion-icon>
                    <span className="span">Blog & News</span>
                  </a>
                </li> */}
               <li>
                  <a href="#" className="footer-link">
                    {/* <ion-icon name="chevron-forward" aria-hidden="true"></ion-icon> */}
                    <span className="span">Privacy Policy</span>
                  </a>
                </li>
              </ul>
              <ul className="footer-list">
                <li>
                  <p className="footer-list-title">Useful Links</p>
                </li>
                <li>
                  <a href="#contact" className="footer-link">
                    {/* <ion-icon name="chevron-forward" aria-hidden="true"></ion-icon> */}
                    <span className="span">Contact Us</span>
                  </a>
                </li>
                {/* <li>
                  <a href="#about" className="footer-link">
                    <ion-icon name="chevron-forward" aria-hidden="true"></ion-icon>
                    <span className="span">Pricing Plan</span>
                  </a>
                </li> */}
               <li>
                  <a href="#about" className="footer-link">
                    {/* <ion-icon name="chevron-forward" aria-hidden="true"></ion-icon> */}
                    <span className="span">FAQ</span>
                  </a>
                </li>
                <li>
                  <a href="#about" className="footer-link">
                    {/* <ion-icon name="chevron-forward" aria-hidden="true"></ion-icon> */}
                    <span className="span">Terms & Conditions</span>
                  </a>
                </li>
              </ul>
              <ul className="footer-list">
                <li>
                  <p className="footer-list-title">Contact Info</p>
                </li>
                <li className="footer-item">
                  {/* <ion-icon name="location-outline" aria-hidden="true"></ion-icon> */}
                  <address className="footer-link">131 HK Dash Road, Dhaka-1100 </address>
                </li>
                <li className="footer-item">
                  {/* <ion-icon name="call" aria-hidden="true"></ion-icon> */}
                  <a href="tel:+880-1760044342" className="footer-link">
                  +880-1760044342</a>
          </li>

          <li className="footer-item">
           <a href="oscardeb2000@gmail.com" target="_blank" className="footer-link">oscardeb2000@gmail.com</a>
          </li>

        </ul>

      </div>

    </div>
  </footer>
    );
};

export default Footer;