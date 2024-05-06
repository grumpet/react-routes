import { View, Text } from 'react-native'
import React from 'react'

const About = ({ route, navigation }) => {
  const { itemId, otherParam } = route.params;


  return (
    <View>
     <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
    </View>
  )
}

export default About