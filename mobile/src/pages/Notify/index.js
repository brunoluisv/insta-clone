import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';
import Header from '../../components/Header';

const Notify = () => {
  return (
    <>
      <Header />
      <View style={styles.container}>
        <Text>Notify</Text>
      </View>
    </>
  );
}

export default Notify;