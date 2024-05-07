import { View, Text ,Button,Image,StyleSheet} from 'react-native'
import React from 'react'
import { useNavigation,useRootNavigationState, Redirect, router } from 'expo-router';
import SwipeCards from '../components/SwipeCards'

const Home = ({ navigation }) => {



  return (
    <View style={styles.container}>

      <SwipeCards/>
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
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Home