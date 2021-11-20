import React from 'react';
import './Cards.css';
import CardItem from './Carditem';
import styled from 'styled-components';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out how to pass Ubteb Examinations and get Ubteb text books and past papers for free</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/slide3.jpg'
              text='Get New Ubteb books and past papers for all courses offered in Uganda.'
              label='Journey to success'
              path='/news'
            />
            <CardItem
              src='images/slide6.jpg'
              text='Skills and techniques to use in order to pass Ubteb Examinations'
              label='Pass Ubteb'
              path='/services'
            />
          </ul>
          <div>
            <h1>Latest News</h1>
          </div>
            <News>
          <ul className='cards__items'>
            <CardItem
              src='images/slide18.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/slide11.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
              />
              <CardItem
              src='images/slide11.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
              />
              <CardItem
              src='images/slide11.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
          </News>
          <Tag>
            <a href="/news">Read all </a>
          </Tag>

            <h1>Trending News</h1>
            <News>

          <ul className='cards__items'>
            <CardItem
              src='images/slide13.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/slide16.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
              />
             <CardItem
              src='images/slide16.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
              />
             <CardItem
              src='images/slide16.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />     
            </ul>
          </News>
          <Tag>
            <a href="/results">Read more </a>
          </Tag>

        </div>
      </div>
    </div>
  );
}

export default Cards;

const News = styled.ul`
display: flex;
`;

const Tag = styled.a`
margin-left: 1090px;
a {
  text-decoration: none;
  color: #000;
}

&:hover {
  a {
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    color: green;
  }

}
`;