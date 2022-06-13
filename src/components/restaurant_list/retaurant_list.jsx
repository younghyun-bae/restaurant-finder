import { useState } from 'react';
import FilterSection from '../filter-section/filter-section';
import Header from '../header.jsx/header';
import RestaurantItem from '../restaurant_item/restaurant_item';
import SearchHeader from '../search_header/search_header';
import styles from './restaurant_list.module.css';

const RestaurantList = (props) => {
  const [ selectBy, setSelectBy ] = useState();

  const selectedList = props.restaurants.filter((restaurant)=>{
      return restaurant.dietaryRestrictions === selectBy;
    });

  const findKosher = props.restaurants.filter((restaurant)=>{
    return restaurant.dietaryRestrictions === 'Kosher';
  });


  console.log(selectedList);
  console.log(findKosher);
  
  return (
    <>
      <Header />
      <SearchHeader />
      <FilterSection />
      <ul className={styles.restaurants}>
        {props.restaurants.map(restaurant => (
          <RestaurantItem key={restaurant.id} restaurant={restaurant} />
        ))}
      </ul>
    </>

  );
}

export default RestaurantList;