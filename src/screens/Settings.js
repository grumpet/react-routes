import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const Settings = ({ navigation }) => {
  const settingsOptions = [
    {
      id: '1',
      title: 'Register',
      navigateTo: 'Register',
    },
    {
      id: '2',
      title: 'Login',
      navigateTo: 'Login',
    },
    // Add more options here
  ];

  const handlePress = (navigateTo) => {
    navigation.navigate(navigateTo);
  };

  const SeparatorComponent = () => {
    return <View style={styles.separator} />;
  };

  return (
    <View>
      <FlatList
        data={settingsOptions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handlePress(item.navigateTo)}>
            <Text style={styles.text}>{item.title}</Text>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={SeparatorComponent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: '#000',
  },
  text: {
    fontSize: 25,
  },
});

export default Settings;