
import { useEffect, useState } from 'react';
import styles from './app.module.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import RestaurantList from './components/restaurant_list/retaurant_list';
import RestaurantDetail from './restaurant_detail/restaurant_detail';
import SearchHeader from './components/search_header/search_header';

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

  return (
  <div className={styles.app}>
    <SearchHeader />
    <main>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<RestaurantList restaurants={restaurants} />} />
          <Route path='/restaurant_list' element={<RestaurantList restaurants={restaurants} />} />
          <Route path='/restaurant_detail' element={<RestaurantDetail />} />
        </Routes>
      </BrowserRouter>

    </main>
  </div>
  );
}

export default App;
