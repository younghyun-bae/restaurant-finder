
import { useEffect, useState } from 'react';
import './app.css';
import RestaurantList from './components/restaurant_list/retaurant_list';

function App() {
  const [restaurants, setRestaurants] = useState([]); 

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://redi-final-restaurants.herokuapp.com/restaurants", requestOptions)
      .then(response => response.json())
      .then(result => setRestaurants(result.results))
      .catch(error => console.log('error', error));
  }, []);
  return <RestaurantList restaurants={restaurants} />;
}

export default App;
