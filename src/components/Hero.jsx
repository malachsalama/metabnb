import React from 'react';
import Top from '../images/Hero.svg';

const Hero = () => {
  return (
    <div>
        <div>
            <h1>Rent a Place away from Home in the Metaverse</h1>
            <p>We provide you access to luxury and affordable houses in the metaverse, get a chance to turm your imagination to reality at your comfort zone</p>
            <input type='text' />
        </div>
        <div>
            <img src={Top} alt='hero_image' />
        </div>
    </div>
  )
}

export default Hero