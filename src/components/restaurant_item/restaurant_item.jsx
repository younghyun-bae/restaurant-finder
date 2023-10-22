import React from 'react';
// import { useNavigate } from 'react-router-dom';
import styles from './restaurant_item.module.css';


const RestaurantItem = ({ id, photos, name, cuisine, dietaryRestrictions, rating, user_ratings_total }) => (
    <li key={id} className={styles.container}>
      <div className={styles.restaurant}>
        <img 
          className={styles.thumbnail} src={photos[0].links[0]} alt="thumbnail" />
        <div className={styles.metadata}>
          <h3 className={styles.name}>{name}</h3>
          <h4 className={styles.cuisine}>{cuisine}</h4>
          <h4 className={styles.dietary}>{dietaryRestrictions}</h4>
          <p className={styles.rating}>★ {rating} ({user_ratings_total})</p>
        </div>
      </div>
    </li>
);

export default RestaurantItem;