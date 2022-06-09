import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import styles from './restaurant_detail.module.css';
import RestaurantList from '../components/restaurant_list/retaurant_list';

const RestaurantDetail = () => { 
  let { name } = useParams();
  const { data } = useContext(RestaurantList);
	const rest = data.filter((item) => item.name === name)[0];

	if (!rest) {
		return null;
	}

  return (
    <h1 className={styles.header1}>router test page</h1>      
  );
}
export default RestaurantDetail;