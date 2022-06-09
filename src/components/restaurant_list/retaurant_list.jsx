import React from 'react';
import RestaurantItem from '../restaurant_item/restaurant_item';
import styles from './restaurant_list.module.css';

const RestaurantList = (props) => {


  return (
    <ul className={styles.restaurants}>
      {props.restaurants.map(restaurant => (
        <RestaurantItem key={restaurant.id} restaurant={restaurant} />
      ))}
    </ul>
  );
}

export default RestaurantList;