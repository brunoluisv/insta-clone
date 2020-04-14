import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';
import Header from '../../components/Header';

const Search = () => {
  return (
    <>
      <Header />
      <View style={styles.container}>
        <Text>Search</Text>
      </View>
    </>
  );
}

export default Search;