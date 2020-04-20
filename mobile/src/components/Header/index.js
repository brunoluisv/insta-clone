import React from 'react';
import { Feather, Entypo, FontAwesome } from '@expo/vector-icons';
import { View, Image } from 'react-native';

import styles from './styles';

import logoTitle from '../../assets/font.png';

const Header = () => {
  return (
    <View style={styles.container}>
      <Feather name="camera" size={28} color="#FFF" style={{ paddingRight: 70 }}/>
      <Image style={{width: 110, height: 40, marginTop: 8, resizeMode: 'contain'}} source={logoTitle}/>
      <Feather name="send" size={28} color="#FFF" style={{ paddingLeft: 70 }}/>
    </View>
  );
}

export default Header;
