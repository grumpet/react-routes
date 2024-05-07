import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import SwipeCards from 'react-native-swipe-cards';
//need to change to swipeable card TinderCard unvalid
const TinderCard = (props) => {
  const cards = [
    { text: "Card 1", uri: require('../components/b.jpeg') },
    { text: "Card 2", uri: require('../components/b.jpeg') },
    { text: "Card 3", uri: require('../components/b.jpeg') },
  ];

  const renderCard = (card) => {
    return (
      <View style={styles.card}>
        <Image style={styles.image} source={card.uri} />
        <Text style={styles.text}>{card.text}</Text>
      </View>
    );
  };

  const handleYup = (card) => {
    console.log(`Yup for ${card.text}`);
  };

  const handleNope = (card) => {
    console.log(`Nope for ${card.text}`);
  };

  return (
    <View style={styles.container}>
      <SwipeCards
        cards={cards}
        renderCard={renderCard}
        handleYup={handleYup}
        handleNope={handleNope}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 500,
  },
  text: {
    fontSize: 20,
    paddingTop: 10,
  },
});

export default TinderCard;