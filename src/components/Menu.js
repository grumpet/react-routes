import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import { View, Text ,Button,Image,StyleSheet} from 'react-native'
import { useNavigation } from '@react-navigation/native';


const Menu = ({}) => {
  const navigation = useNavigation();

  return (
    <View>
    <Header
      leftComponent={
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Icon name='user' type='font-awesome' color='#fff' />
        </TouchableOpacity>
      }
      centerComponent={
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={{ color: '#fff' }}>Swappers</Text>
        </TouchableOpacity>
      }
      rightComponent={
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <Icon name='cog' type='font-awesome' color='#fff' />
        </TouchableOpacity>

      }
    />
            </View>

  );
};

export default Menu;