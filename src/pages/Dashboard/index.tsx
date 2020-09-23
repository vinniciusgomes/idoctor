import React from 'react';

import Navbar from '../../components/layout/Navbar';

import { Container } from './styles';

const Home: React.FC = () => (
  <Navbar pageSelected="dashboard">
    <Container>
      <h1>Dashboard</h1>
    </Container>
  </Navbar>
);

export default Home;
