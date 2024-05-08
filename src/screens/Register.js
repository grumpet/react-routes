import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Image, Alert } from 'react-native';
import ImagePicker from 'react-native-image-picker';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [city, setCity] = useState('');
  const [profilePic, setProfilePic] = useState(null);
  const [inventoryPic, setInventoryPic] = useState(null);
  const [inventoryDescription, setInventoryDescription] = useState('');

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

  return (
    <View style={styles.container}>
    <View style={styles.text_box}>
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
      </View>
      <View style={styles.profile_pic_box}>

      <Button title="Select Profile Picture" onPress={() => selectImage(setProfilePic)} />
      <Image source={profilePic} style={styles.image} />
    </View>
    <View style={styles.inventory_box}>
      <Button title="Select Inventory Picture" onPress={() => selectImage(setInventoryPic)} />
      <Image source={inventoryPic} style={styles.image} />
      <TextInput
        style={styles.input}
        onChangeText={setInventoryDescription}
        value={inventoryDescription}
        placeholder="Inventory Description"
      />
  </View>
  <Button style = {styles.Button} title="Register" onPress={handleRegister} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    flexDirection: 'column',
  },
  text_box:{
    flex: 2,
    borderWidth: 10,//remove in end
    justifyContent: 'center',
  },
  profile_pic_box:{
    flex: 3,
    borderWidth: 10,//remove in end
    justifyContent: 'center',

  },
  inventory_box:{
    flex: 3,
    borderWidth: 10,//remove in end
    justifyContent: 'center',

  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
    borderRadius: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 12,
  },
  Button: {
    backgroundColor: 'blue',
    color: 'white',
    padding: 10,
    borderRadius: 5,
    textAlign: 'center',
    marginTop: 10,
  },
});

export default Register;