import React from 'react';
import Top from '../images/Hero.svg';
import '../styles/hero.css'

const Hero = () => {
  return (
    <div className='hero-section'>
        <div className='hero-section--texts'>
            <h1>Rent a <span>Place</span> away from <span>Home</span> in the <span>Metaverse</span></h1>
            <p>We provide you access to luxury and affordable houses in the metaverse, get a chance to turm your imagination to reality at your comfort zone</p>
            
            <div className="search-field">
                <input type="text" placeholder="Search for location" />
                <button>Search</button>
            </div>
        </div>
            <img src={Top} alt='hero_image' />
    </div>
  )
}

export default Hero