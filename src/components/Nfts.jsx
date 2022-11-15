import React from 'react';
import nftImg from '../images/NftImg.svg';
import '../styles/nfts.css';

const Nfts = () => {
  return (
    <section className='nfts'>
        <div className='nft-text'>
            <h3>Metabnb NFTs</h3>
            <p>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which
                are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.
            </p>
            <a href='/'>Learn more</a>
        </div>
        <div className='nft-image'>
            <img src={nftImg} alt='nft'/>
        </div>
    </section>
  )
}

export default Nfts