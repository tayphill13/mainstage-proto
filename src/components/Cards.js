import React from 'react';
import CardItem from './CardItem';
import './Cards.css';


function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these new artists!</h1> 
      <div className="cards__container">
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/new-artist.jpg'
              text='Explore some new music from home'
              label='NewArtists'
              path='/Artists' />
            <CardItem
              src='images/new-artist2.jpg'
              text="What's the point of this?"
              label='About'
              path='/About' />
            <CardItem
              src='images/new-artist3.jpg'
              text='What are the artists up to?'
              label='Artists'
              path='/Artists' />
          </ul>
        </div>
      </div>  
    </div>
  )
}

export default Cards;
