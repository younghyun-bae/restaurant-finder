import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import styles from './restaurant_item.module.css';
import styled from 'styled-components';

const RestaurantItem = ({ id, photos, name, cuisine, dietaryRestrictions, rating, user_ratings_total }) => (
    <Container key={id}>
      <Restaurant>
        <ImgContainer>
          <Thumb 
            src={photos[0].links[0]} 
            alt="thumbnail" 
          />
        </ImgContainer>
        <Metadata>
          <Name>{name}</Name>
          {/* <div>
            {photos[0].html_attributions[0]}
          </div> */}
          <Details>{cuisine}</Details>
          <Details>{dietaryRestrictions}</Details>
          <Details>★ {rating} ({user_ratings_total})</Details>
        </Metadata>
      </Restaurant>
    </Container>
);

const Container = styled.li`
  list-style-type: none;
`

const Restaurant = styled.div`
  width: 400px;
  height: 100%;
  display: flex;
  align-items: center;
  border: 0.1rem solid lightgray;
  border-radius: 2rem;
  box-shadow: 3px 3px 5px 0px rgba(191, 191, 191, 0.53);
  cursor: pointer;
  transition: transform 250ms ease-in;
  margin: 1em 2rem 1rem 0;
  padding: 0.3em;
`

const ImgContainer = styled.div`
    margin: 1rem;
`

const Thumb = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 1rem;
`

const Metadata = styled.div`
  margin: 1em 0;
`

const Name = styled.h3`
  margin: 0.3em;
  font-size: 1rem;
`

const Details = styled.h4`
  margin: 0.3em;
  font-size: 0.8rem;
`

export default RestaurantItem;