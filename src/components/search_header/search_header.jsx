// import styles from './search_header.module.css';
import styled from 'styled-components';
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
    <Search>
      <Input
        ref={inputRef}
        type="search"
        placeholder='Search...'
        onKeyPress={onKeyPress}
      />
      <Btn type="submit" onClick={onClick}>
      Go!
      </Btn>
    </Search>
  );
};

const Search = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1em;
`

const Input = styled.input`
  width: 20vh;
  border: none;

  outline: 0.1rem solid #caced1;
  padding: 0.2rem 0;
  box-sizing: border-box;
  &:focus {
    border: solid #555;
  }
`

const Btn = styled.button`
  background-color:#caced1;
  color: #fff;
  border: none;
  border-radius: 1rem;
  padding: 0.25rem;
  margin-left: 0.5rem;
  &:hover {
    cursor: pointer;
  }
`

export default SearchHeader;