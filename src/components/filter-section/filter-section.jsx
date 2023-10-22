import React, { useState, useEffect, useMemo } from 'react';
import styles from './filter-section.module.css';
import RestaurantItem from '../restaurant_item/restaurant_item';

export default function FilterSection() {

  const [ dataRestaurant, setDataRestaurant ]= useState([]);

  const getData = () => {
    fetch('data.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setDataRestaurant(myJson.results)
      });
  }
  useEffect(()=>{
    getData()
  }, [])

  const [selectedCategory, setSelectedCategory] = useState();

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const getFilteredList = () => {
    if (!selectedCategory) {
      return dataRestaurant;
    }
    return dataRestaurant.filter((item) => item.dietaryRestrictions === selectedCategory);
  }

  const filteredList = useMemo(getFilteredList, [selectedCategory, dataRestaurant]);


  return (
    <div>
      <section className={styles.filter}> 
        <label for="dietary-select">Choose a dietary restriction: </label>
        <select
          className={styles.select}
          name='category-list'
          id='category-list'
          onChange={handleCategoryChange}
        >
            <option value="">🔍</option>
            <option value="Kosher">Kosher</option>
            <option value="Halal">Halal</option>
            <option value="Gluten Free">Gluten Free</option>
            <option value="Lactose Free">Lactose Free</option>
            <option value="Vegan">Vegan</option>
            <option value="Vegitarian">Vegitarian</option>
        </select>
      </section>
      <ul className={styles.restaurants}>
        {filteredList.map((element, id) => (
          <RestaurantItem {...element} key={id} />
        ))}
      </ul>
    </div>
  );
}