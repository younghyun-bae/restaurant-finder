import styles from './app.module.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import RestaurantDetail from './restaurant_detail/restaurant_detail.jsx';
import Intro from './components/intro.jsx';
import RestaurantList from './components/restaurant_list/restaurant_list.jsx';

function App() {

  return (
  <div className={styles.app}>
    <main>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Intro />} />
          <Route path='/restaurantberlin' element={<RestaurantList />} />
          <Route path='/restaurant_detail' element={<RestaurantDetail />} />
        </Routes>
      </BrowserRouter>

    </main>
  </div>
  );
}

export default App;
