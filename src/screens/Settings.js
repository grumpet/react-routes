import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import Menu from '../components/Menu';

const Settings = ({ navigation }) => {
  const settingsOptions = [
    {
      id: '1',
      title: 'Register',
      navigateTo: 'Register',
    },
    // Add more options here
  ];

  const handlePress = (navigateTo) => {
    navigation.navigate(navigateTo);
  };

  return (
    <View>
      <Menu />
      <FlatList
        data={settingsOptions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handlePress(item.navigateTo)}>
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Settings;