import styles from './search_header.module.css';
import React, { useRef } from 'react';

const SearchHeader = ({ onSearch }) => {
  const inputRef = useRef();
  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };
  const onClick = () => {
    handleSearch();
  };

  const onKeyPress = event => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };


  return (
    <header className={styles.header}>
      <input
        ref={inputRef}
        className={styles.input}
        type="search"
        placeholder='Search...'
        onKeyPress={onKeyPress}
      />
      <button className={styles.button}  type="submit" onClick={onClick}>
        <img
          className={styles.buttonImg}
          src=""
          alt="search"
        />
      </button>
    </header>
  );
};

export default SearchHeader;