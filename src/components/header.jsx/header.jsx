import React from 'react';
// import styles from './header.module.css';
import styled from 'styled-components';

const Header = (props) => (
  <HeaderContainer>
    <Title>Restaurant Finder</Title>
    <Location>📍 Berlin, Germany</Location>
  </HeaderContainer>
);

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
`

const Title = styled.h1`
  font: bold 2rem "Eliza-Regular", sans-serif;
  margin: 0;
`

const Location = styled.h2`
  margin: 0 0 0 7rem;
  font-size: 1rem;
`

export default Header;