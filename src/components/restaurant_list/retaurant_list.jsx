import FilterSection from '../filter-section/filter-section';
import Header from '../header.jsx/header';
import SearchHeader from '../search_header/search_header';
import styles from './restaurant_list.module.css';

const RestaurantList = () => {
  
  return (
    <>
      <Header classname={styles.header} />
      <SearchHeader />
      <FilterSection classname={styles.filterSectionContainer} />
    </>

  );
}

export default RestaurantList;