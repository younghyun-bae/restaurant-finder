import React from 'react';
import styles from './filter-section.module.css';

const FilterSection = (props) => (
  <> 
    <label for="dietary-select">Choose a dietary restriction: </label>
    <select className={styles.select}>
        <option value="">🔍</option>
        <option value="Kosher">Kosher</option>
        <option value="Halal">Halal</option>
        <option value="Gluten Free">Gluten Free</option>
        <option value="Lactose Free">Lactose Free</option>
        <option value="Vegan">Vegan</option>
        <option value="Vegitarian">Vegitarian</option>
    </select>
  </>
  );

export default FilterSection;