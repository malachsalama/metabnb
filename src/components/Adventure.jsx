import React from 'react';
import '../App.css';
import NftCard from './NftCard';
import card1Img from '../images/Card1.svg';
import card2Img from '../images/Card2.svg';
import card3Img from '../images/Card3.svg';
import card4Img from '../images/Card4.svg';
import card5Img from '../images/Card5.svg';
import card6Img from '../images/Card6.svg';
import card7Img from '../images/Card7.svg';
import card8Img from '../images/Card8.svg';
import bnbRating from '../images/Rating.svg';


const cardData = [
  {
      id: 1,
      image: card1Img,
      title: "Desert king",
      price: "1MBT per night",
      distance: "2345km away",
      availability: "available for 2weeks stay",
      rating: bnbRating
  },

  {
      id: 2,
      image: card2Img,
      title: "Desert king",
      price: "1MBT per night",
      distance: "2345km away",
      availability: "available for 2weeks stay",
      rating: bnbRating
  },

  {
      id: 3,
      image: card3Img,
      title: "Desert king",
      price: "1MBT per night",
      distance: "2345km away",
      availability: "available for 2weeks stay",
      rating: bnbRating
  },

  {
      id: 4,
      image: card4Img,
      title: "Desert king",
      price: "1MBT per night",
      distance: "2345km away",
      availability: "available for 2weeks stay",
      rating: bnbRating
  },

  {
      id: 5,
      image: card5Img,
      title: "Desert king",
      price: "1MBT per night",
      distance: "2345km away",
      availability: "available for 2weeks stay",
      rating: bnbRating
  },

  {
      id: 6,
      image: card6Img,
      title: "Desert king",
      price: "1MBT per night",
      distance: "2345km away",
      availability: "available for 2weeks stay",
      rating: bnbRating
  },

  {
      id: 7,
      image: card7Img,
      title: "Desert king",
      price: "1MBT per night",
      distance: "2345km away",
      availability: "available for 2weeks stay",
      rating: bnbRating
  },

  {
      id: 8,
      image: card8Img,
      title: "Desert king",
      price: "1MBT per night",
      distance: "2345km away",
      availability: "available for 2weeks stay",
      rating: bnbRating
  }
]


const adventureCards = cardData.map(card => 

  <NftCard 
      key={card.id}
      image={card.image}
      title={card.title}
      price={card.price}
      distance={card.distance}
      availability={card.availability}
      rating={card.rating}
  />

)
const Adventure = () => {
  return (
    <section className='adventure'>
      <div className='adventure-title'>
        <h2>Inspiration for your next adventure</h2>
      </div>
        
      <div className='adventure-cards'>
        {adventureCards}
      </div>
    </section>
  )
}

export default Adventure