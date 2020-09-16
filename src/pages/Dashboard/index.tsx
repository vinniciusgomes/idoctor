import React from 'react';
import Navbar from '../../components/Navbar';

import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Navbar pageSelected="dashboard">
      <Container>
        <h1>Dashboard</h1>
      </Container>
    </Navbar>
  );
};

export default Home;
