import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';
import Header from '../../components/Header';

const Post = () => {
  return (
    <>
      <Header />
      <View style={styles.container}>
        <Text>Post</Text>
      </View>
    </>
  );
}

export default Post;