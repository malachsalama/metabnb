import React from 'react';
import Token from '../images/MBToken.svg';
import MetaMask from '../images/MetaMask.svg';
import OpenSea from '../images/OpenSea.svg';
import '../styles/companies.css';

const Companies = () => {
  return (
    <div className='brands'>
      <a href='/' >
        <img src={Token} alt='MBToken_Logo' />
      </a>
      <a href='/'>
        <img src={MetaMask} alt='MetaMask_Logo' />
      </a>
      <a href='/'>
        <img src={OpenSea} alt='OpenSea_Logo' />
      </a>
    </div>
  )
}

export default Companies