import FilterSection from '../filter-section/filter-section';
import Header from '../header.jsx/header';
import styles from './restaurant_list.module.css';

const RestaurantList = () => {
  
  return (
    <>
      <Header classname={styles.header} />
      <FilterSection classname={styles.filterSectionContainer} />
    </>

  );
}

export default RestaurantList;