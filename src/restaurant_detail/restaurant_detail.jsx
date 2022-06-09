import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './restaurant_detail.module.css';


const RestaurantDetail = (props) => { 
  const navigate = useNavigate();

  return (
    <>
      <button className={styles.goback} onClick={()=>{navigate('/');}}>back to the list</button>
      <h1>show the details</h1>
    </>
  );
}
export default RestaurantDetail;