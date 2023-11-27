import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Header from './header.jsx/header';

export default function Intro() {
  return (
    <div>
      <Header />
      <Link to='/restaurantberlin'>
        <Click>Let's Explore</Click>
      </Link>
    </div>
  );
}

const Click = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font: italic 1.5rem "arial", sans-serif;
`