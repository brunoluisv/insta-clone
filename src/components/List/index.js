import React from 'react';

import { View, Text, FlatList, Image } from 'react-native';
import styles from './styles';

const List = () => {
  const data = [
    {
      id: '1',
      username: 'brunoluisv',
      location: 'Praia da Saudade - Prainha',
      avatar: '',
      legend: '',
      picture: 'https://instagram.fjoi1-2.fna.fbcdn.net/v/t51.2885-15/e35/79122250_160675198550036_450444834141508974_n.jpg?_nc_ht=instagram.fjoi1-2.fna.fbcdn.net&_nc_cat=108&_nc_ohc=BbNokF_s4CUAX9HbyDH&oh=97e43fba364a062c72a36a1cbd967e24&oe=5EBDE7CA'
    },
    {
      id: '2',
      username: 'peedrodarosa',
      location: 'Da Praia Grande',
      avatar: '',
      legend: '',
      picture: 'https://instagram.fjoi1-2.fna.fbcdn.net/v/t51.2885-15/e35/89013255_158736788448793_8123337910552012899_n.jpg?_nc_ht=instagram.fjoi1-2.fna.fbcdn.net&_nc_cat=101&_nc_ohc=7f7Z235vgXwAX9v0_Q6&oh=d513c3afc8457d3860dd0ed83a497e21&oe=5EC053D9'
    },    
    {
      id: '3',
      username: 'wagnerf',
      location: 'Enseada - São Chico',
      avatar: '',
      legend: '',
      picture: 'https://instagram.fjoi1-2.fna.fbcdn.net/v/t51.2885-15/e35/88127840_189004329019573_7934508075349378133_n.jpg?_nc_ht=instagram.fjoi1-2.fna.fbcdn.net&_nc_cat=101&_nc_ohc=iAQPCfbq3JMAX8vOWn8&oh=3c1db9de7633f4243881787a1e041147&oe=5EC08188'
    }
  ]

  const renderPost = ({ item }) => {
    return (
      <View style={styles.post}>
        <View style={styles.header}>
          <View style={styles.userInfo}>
            <Text style={styles.username}>{item.username}</Text>
            <Text style={styles.location}>{item.location}</Text>
          </View>
          
          <View style={styles.options}>

          </View>
         
        </View>      
        
        <View>
          <Image 
            style={styles.picture}
            source={{ uri: item.picture }}
          />
        </View>
      </View>
    );
  }

  return (
    <View>
      <FlatList 
        data={data}
        keyExtractor={(item) => {item.id}}
        renderItem={renderPost}
      />
    </View>
  )
}

export default List;