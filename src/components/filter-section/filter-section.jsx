import React, { useState, useEffect, useMemo } from 'react';
// import styles from './filter-section.module.css';
import styled from 'styled-components';
import RestaurantItem from '../restaurant_item/restaurant_item';
import SearchHeader from '../search_header/search_header';

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
      <Container>
        <SearchHeader/>
        <Filter> 
          <label for="dietary-select"></label>
          <Select
            name='category-list'
            id='category-list'
            onChange={handleCategoryChange}
          >
              <option value="">Dietary Restriction   🔍</option>
              <option value="Kosher">Kosher</option>
              <option value="Halal">Halal</option>
              <option value="Gluten Free">Gluten Free</option>
              <option value="Lactose Free">Lactose Free</option>
              <option value="Vegan">Vegan</option>
              <option value="Vegitarian">Vegitarian</option>
          </Select>
        </Filter>
      </Container>
      <RestaurantList>
        {filteredList.map((element, id) => (
          <RestaurantItem {...element} key={id} />
        ))}
      </RestaurantList>
    </div>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
`

const Filter = styled.section`
  margin: 0;
`

const Select = styled.select`
  font-size: 1rem;
  padding: 0.5rem;
  border: 1px solid #caced1;
  border-radius: 1rem;
  color: #000;
  cursor: pointer;
`

const RestaurantList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`