/* eslint-disable */
import Link from "next/link"
import './Hero.css';
import Image from "next/image";

const Hero = () => {
    return (
      <section className="hero container">
      {/* <Image
      className="hero__img lazy loading"
      src="/ProfileImage.jpg"
      width={720}
      height={480}
      alt="Profile picture"
    /> */}
      {/* <img className="hero__img" 
      src="/hero.jpg" 
      alt="Profile picture" /> */}
      
      <h2 className="hero__subtitle">OUR<br />
LUXURIOUS STAY</h2>
      
      {/* <h1 className="hero__title">
      WEB DESIGNER <br />
        AND WEB APP DEVELOPER.
        
      </h1> */}
      <p className="hero__description">
      At Noormahal Palace, Karnal, we have an inventory of 125 elegant rooms and suites, furnished with premium furniture and upholstery. Despite being styled after traditional Indian architecture, no modern comforts have been compromised with. Immerse yourself in the splendour of the Indian Royalty at Noormahal Palace, ‘The Jewel of Karnal’.
        </p>
        <div className="shape2">
        <Image
      className="shape__img"
      src="/pics/exp.png"
      // width={720}
      width= {260}
       height={20}
      alt="shape"
    />  
    </div>
     {/* <a
        className="hero__btn btn"
        href="https://www.linkedin.com/in/oscar-deb-2b028b21b/"
        target="_blank"
        >React Out</a> */}
    </section>
    );
}

export default Hero;