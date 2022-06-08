import React from 'react';
import RestaurantItem from '../restaurant_item/restuarant_item';

const RestaurantList = (props) => (
  <ul>
    {props.restaurants.map(restaurant => (
      <RestaurantItem key={restaurant.id} restaurant={restaurant} />
    ))}
  </ul>
);

export default RestaurantList;