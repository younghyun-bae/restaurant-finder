import React from 'react';
import styles from './header.module.css';

const Header = (props) => (
  <div className={styles.Container}>
    <h1 className={styles.title}>Restaurant Finder</h1>
    <h2 className={styles.location}>📍 Berlin, Germany</h2>
  </div>

  );

export default Header;