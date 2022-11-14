import React from 'react';
import Token from '../MBToken.svg';
import MetaMask from '../MetaMask.svg';
import OpenSea from '../OpenSea.svg';

const Companies = () => {
  return (
    <div>
        <img src={Token} alt='MBToken_Logo' />
        <img src={MetaMask} alt='MetaMask_Logo' />
        <img src={OpenSea} alt='OpenSea_Logo' />
    </div>
  )
}

export default Companies