import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';
import Header from '../../components/Header';
import List from '../../components/List';

const Home = () => {
  return (
    <>
      <Header />
      <List />
    </>

  );
}

export default Home;