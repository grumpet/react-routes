import { View, Text ,Button} from 'react-native'
import React from 'react'
import { useNavigation,useRootNavigationState, Redirect, router } from 'expo-router';

const Home = ({ navigation }) => {

  return (
    <View>
    <Button
        title="Go to Details"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('About', {
            itemId: 86,
            otherParam: 'anything you want here',
          });
        }}
      />
    </View>
  )
}

export default Home