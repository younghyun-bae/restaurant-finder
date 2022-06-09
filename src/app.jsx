
import { useEffect, useState } from 'react';
import styles from './app.module.css';
import { Route, Routes } from 'react-router-dom'; 
import RestaurantList from './components/restaurant_list/retaurant_list';
import SearchHeader from './components/search_header/search_header';
import RestaurantDetail from './restaurant_detail/restaurant_detail';

function App() {
  const [restaurants, setRestaurants] = useState([]); 
  const search = query => {

  }

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

  return (
  <div className={styles.app}>
    <SearchHeader onSearch={search} />
    <main>
      <Routes>
        <Route path='/restaurants'>
          <RestaurantDetail />
        </Route>
        <Route path='/'>
          <RestaurantList restaurants={restaurants} />;
        </Route>
      </Routes>
    </main>

  </div>
  );
}

export default App;
