import React from 'react';
import logo from '../logo.svg';


const Header = () => {
  return (
    <>
    <div>
        <img src={logo} alt='logo' />
    </div>
    <div>
        <ul>
            <li><a href='https://twiiter.com/malachsalama'>Home</a></li>
            <li><a href='https://twiiter.com/malachsalama'>Place to stay</a></li>
            <li><a href='https://twiiter.com/malachsalama'>NFTs</a></li>
            <li><a href='https://twiiter.com/malachsalama'>Community</a></li>
        </ul>
    </div>
    <div>
        <button>connect wallet</button>
    </div>
    </>
  )
}

export default Header