import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './restaurant_item.module.css';


const RestaurantItem = ({restaurant}) => {
  const navigate = useNavigate();

  return (
    <li className={styles.container}>
      <div className={styles.restaurant} onClick={()=>{navigate('/restaurant_detail');}}>
        <img 
          className={styles.thumbnail} src={restaurant.photos[0].links[0]} alt="thumbnail" />
        <div className={styles.metadata}>
          <h3 className={styles.name}>{restaurant.name}</h3>
          <h4 className={styles.cuisine}>{restaurant.cuisine}</h4>
          <h4 className={styles.dietary}>{restaurant.dietaryRestrictions}</h4>
          <p className={styles.rating}>★ {restaurant.rating} ({restaurant.user_ratings_total})</p>
        </div>
      </div>
    </li>
  );
}

export default RestaurantItem;