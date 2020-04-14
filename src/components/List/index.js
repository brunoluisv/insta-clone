import React from 'react';

import { View, Text, FlatList, Image } from 'react-native';
import { SimpleLineIcons, EvilIcons, Feather } from '@expo/vector-icons';
import styles from './styles';

const List = () => {
  const data = [
    {
      id: '1',
      username: 'brunoluisv',
      location: 'Praia da Saudade - Prainha',
      avatar: 'https://instagram.fjoi1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/20901907_469813850051776_3651079761922359296_a.jpg?_nc_ht=instagram.fjoi1-1.fna.fbcdn.net&_nc_ohc=l1XojtxnqF4AX_qxOmI&oh=dc9387c3ae5916df05d7d202591581fe&oe=5EC065DD',
      legend: '',
      picture: 'https://instagram.fjoi1-2.fna.fbcdn.net/v/t51.2885-15/e35/79122250_160675198550036_450444834141508974_n.jpg?_nc_ht=instagram.fjoi1-2.fna.fbcdn.net&_nc_cat=108&_nc_ohc=BbNokF_s4CUAX9HbyDH&oh=97e43fba364a062c72a36a1cbd967e24&oe=5EBDE7CA'
    },
    {
      id: '2',
      username: 'pedrodarosa',
      location: 'Da Praia Grande',
      avatar: 'https://instagram.fjoi1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/87826882_216747316187479_8204661676063064064_n.jpg?_nc_ht=instagram.fjoi1-1.fna.fbcdn.net&_nc_ohc=2Alo1S9dhU4AX-LNZSk&oh=21435286eb3d9e6ccea62948ad314356&oe=5EBF4321',
      legend: '',
      picture: 'https://instagram.fjoi1-2.fna.fbcdn.net/v/t51.2885-15/e35/89013255_158736788448793_8123337910552012899_n.jpg?_nc_ht=instagram.fjoi1-2.fna.fbcdn.net&_nc_cat=101&_nc_ohc=7f7Z235vgXwAX9v0_Q6&oh=d513c3afc8457d3860dd0ed83a497e21&oe=5EC053D9'
    },    
    {
      id: '3',
      username: 'wagnerf',
      location: 'Enseada - São Chico',
      avatar: 'https://instagram.fjoi1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/69769743_420620521892339_9194533225542713344_n.jpg?_nc_ht=instagram.fjoi1-1.fna.fbcdn.net&_nc_ohc=kl0BmZE4ctQAX_e7YPY&oh=5124cc6ae95d71572a2cf272e5b58621&oe=5EBE105E',
      legend: '',
      picture: 'https://instagram.fjoi1-2.fna.fbcdn.net/v/t51.2885-15/e35/88127840_189004329019573_7934508075349378133_n.jpg?_nc_ht=instagram.fjoi1-2.fna.fbcdn.net&_nc_cat=101&_nc_ohc=iAQPCfbq3JMAX8vOWn8&oh=3c1db9de7633f4243881787a1e041147&oe=5EC08188'
    }
  ]

  const renderPost = ({ item }) => {
    return (
      <View style={styles.post}>
        <View style={styles.header}>
          <Image 
            style={styles.avatar}
            source={{ uri: item.avatar }}
          />
          <View style={styles.userInfo}>
            <Text style={styles.username}>{item.username}</Text>
            <Text style={styles.location}>{item.location}</Text>
          </View>

          <View style={styles.options}>
            <SimpleLineIcons name="options-vertical" size={20} color="#FFF"/>
          </View>
        </View>  
        
        <View>
          <Image 
            style={styles.picture}
            source={{ uri: item.picture }}
          />
        </View>

        <View style={styles.footer}>
          <EvilIcons name="heart" size={46} color="#FFF" />
          <EvilIcons name="comment" size={46} color="#FFF" />
          <Feather name="send" size={32} color="#FFF" style={{marginLeft: 8, marginTop: 8}} />
        
          <Feather name="bookmark" size={36} color="#FFF" style={{marginLeft: 230, marginTop: 8}} />
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