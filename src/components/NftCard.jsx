import React from 'react';
import '.././styles/adventure.css';

const NftCard = ({image,title,price,distance,availability,rating}) => {
  return (
    <div className='nft-card'>
            <div className='nft-card-image'>
                <img src={image} alt='nft card'/>
            </div>
            <div className='nft-card-title'>
                <span>{title}</span>
                <span style={{fontWeight: 700}}>{price}</span>
            </div>
            <div className='nft-card-desc'>
                <span>{distance}</span>
                <span>{availability}</span>
            </div>
            <div className='nft-card-rating'>
                <img src={rating} alt='rating'/>
            </div>
        </div>
  )
}

export default NftCard