import React from 'react';
import './home.css';
import { NavLink } from 'react-router-dom';


function Home() {
  return (
    <>
      <div className='intro'>
        <p>NjutaAvLivet: Hemtjänst som <br/> Förvandlar Vardagen i Stockholm</p>
      </div>

      <div className="image-container">
        <img className='Elderly1' src='Elderly.png' alt="Elderly 1" />
        <img className='Elderly2' src='Elderly1.png' alt="Elderly 2" />
      </div>

      <div className='intro2'> 
        <h3>Backgrunden till Njuta av livet</h3>
        <p> Företaget grundades efter karl den VI återvände från kalla kriget. Den 11 september 1932 bestämde sig <br />
        Karl att begära pension från myndigheterna och under ansökans gång dök en riktig bra idé till karl, <br /> 
        ja ett firma där folk som han kan ta sig och luta tillbaka, Njuta av livet </p>
      </div>

      <div className='info'>
        <h3>Låt oss jobba tillsammans</h3>
        <p>Vi är engagerad att hjälpa andra och hoppas verkligen att du kontaktar oss och <br />
        bli en del av vår härliga familj här på Njuta av livet</p>
        <NavLink
            to="/kontakt" target=""> 
          <button className='btn1'>Kontakta Oss</button>
        </NavLink>
       
      </div>
    </>
  );
}

export default Home;
