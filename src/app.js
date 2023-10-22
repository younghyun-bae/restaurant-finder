import styles from './app.module.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import RestaurantList from './components/restaurant_list/retaurant_list.jsx';
import RestaurantDetail from './restaurant_detail/restaurant_detail.jsx';
function App() {

  return (
  <div className={styles.app}>
    <main>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<RestaurantList />} />
          <Route path='/restaurant_detail' element={<RestaurantDetail />} />
        </Routes>
      </BrowserRouter>

    </main>
  </div>
  );
}

export default App;
