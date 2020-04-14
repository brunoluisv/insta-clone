import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#070809',
    padding: 10
  },
  userInfo: {
    marginLeft: 20,
    width: 250
  },
  avatar: {
    height: 36,
    width: 36,
    borderRadius: 18
  },
  username: {
    fontSize: 16,
    color: '#F5F6F7',
    fontWeight: 'bold'
  },
  location: {
    fontSize: 14,
    color: '#F5F6F7'
  },
  options: {
    marginLeft: 65
  },
  picture: {
    width: '100%',
    height: 400
  }
});