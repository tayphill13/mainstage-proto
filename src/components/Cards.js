import React from 'react';
import CardItem from './CardItem';
import './Cards.css';


function Cards() {
  return (
    <div className='cards'>
      <h1>Stay home and don't miss out!</h1> 
      <div className="cards__container">
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/new-artist.jpg'
              text='Explore some new music from home'
              label='NewArtists'
              path='/Artists' />
            <CardItem
              src='images/musicImg-2.jpg'
              text="What's the point of this here, MainStage?"
              label='About'
              path='/About' />
            <CardItem
              src='images/new-artist3.jpg'
              text="Have some fresh ideas about what you'd like this site to offer?"
              label='Contact Me'
              path='/Contact' />
          </ul>
        </div>
      </div>  
    </div>
  )
}

export default Cards;
