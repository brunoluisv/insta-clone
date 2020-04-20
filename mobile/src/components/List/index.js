import React, { useState, useEffect } from 'react';

import { View, Text, FlatList, Image } from 'react-native';
import { SimpleLineIcons, EvilIcons, Feather } from '@expo/vector-icons';
import api from '../../services/api';
import styles from './styles';

const List = () => {
  const [posts, setPosts] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  async function loadPosts() {
    if(loading) {
      return;
    }

    if(total > 0 && posts.length === total) {
      return;
    }

    setLoading(true);

    const res = await api.get('posts');

    setPosts([...posts, ...res.data]);
    setTotal(res.headers['x-total-count']);
    setLoading(false);
  }

  useEffect(() => {
    loadPosts();
  }, []);

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
        data={posts}
        keyExtractor={post => String(post.id)}
        onEndReached={loadPosts}
        renderItem={renderPost}
      />
    </View>
  )
}

export default List;