import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';
import Header from '../../components/Header';

const Profile = () => {
  return (
    <>
      <Header />
      <View style={styles.container}>
        <Text>Profile</Text>
      </View>
    </>
  );
}

export default Profile;