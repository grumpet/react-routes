import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Image, Alert } from 'react-native';
import ImagePicker from 'react-native-image-picker';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [city, setCity] = useState('');
  const [profilePic, setProfilePic] = useState(null);
  const [inventoryPics, setInventoryPics] = useState([null, null, null]);

  const handleRegister = () => {
    // Perform registration operation
  }

  const selectImage = (setImage) => {
    ImagePicker.showImagePicker({}, (response) => {
      if (response.didCancel) {
        Alert.alert('You cancelled image picker');
      } else if (response.error) {
        Alert.alert('ImagePicker Error: ', response.error);
      } else {
        const source = { uri: response.uri };
        setImage(source);
      }
    });
  };

  const selectInventoryImage = (index) => {
    selectImage((source) => {
      setInventoryPics((prev) => {
        const copy = [...prev];
        copy[index] = source;
        return copy;
      });
    });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Email"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        onChangeText={setCity}
        value={city}
        placeholder="City"
      />
      <Button title="Select Profile Picture" onPress={() => selectImage(setProfilePic)} />
      <Image source={profilePic} style={styles.image} />
      <View style={styles.inventory}>
        {inventoryPics.map((pic, index) => (
          <View key={index}>
          
            <Button title={`Select Inventory Picture ${index + 1}`} onPress={() => selectInventoryImage(index)} />

            <Image source={pic} style={styles.image} />

          </View>
        ))}
      </View>
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 12,
  },
  inventory: {
    justifyContent: 'space-between',
    marginBottom: 0,
    marginTop: 0,

    
  },
  


});

export default Register;