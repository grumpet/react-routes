import { View, Text ,Button,Image,StyleSheet} from 'react-native'
import React from 'react'
import { useNavigation,useRootNavigationState, Redirect, router } from 'expo-router';
import SwipeCards from '../components/SwipeCards'
import { getHeaderTitle,Header } from '@react-navigation/elements';
import Menu from '../components/Menu';

const Home = ({ navigation }) => {

  return (
    
    <View style={styles.container}>
    <Menu/>
      <SwipeCards/>
      <View style={styles.buttonContainer}>
        <Button
          title="About"
          onPress={() => {
            navigation.navigate('About', {
              itemId: 86,
              otherParam: 'anything you want here',
            });
          }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    position: 'flex',
    bottom: 0,
    width: '100%',
    padding: 0,
    
  },
});

export default Home;