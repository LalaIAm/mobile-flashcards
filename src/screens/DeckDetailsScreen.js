import React from "react";
import { View, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { Headline, Subheading, Surface, Button, FAB } from "react-native-paper";


const DeckDetailsScreen = (props) => {
  const { deck, deckId, navigation } = props;

  const getNumberOfCards = () => {
    const n = deck.questions.length;
    if (n === 1) {
      return "1 Card.";
    }
    return `${n} Cards.`;
  };

  const handleAddCardPress = () => {
    navigation.push("AddCard", { deckId: deckId });
  };

  const handleReviewPress = () => {
    navigation.push("Review", { deck: deck });
  };

  return (
    <View style={styles.container}>
      <Surface>
        <Headline>{deck.title}</Headline>
        <Subheading>{getNumberOfCards()}</Subheading>
        <View>
          <Button onPress={handleAddCardPress}>Add Card</Button>
          <Button onPress={handleReviewPress}>Start Review</Button>
        </View>
      </Surface>
      <FAB style={styles.fab} icon='delete' label='Delete Deck' />
    </View>
  );
};

const mapStateToProps = (state, { navigation, route }) => {
  const deckId = route.params.deckId;
  const deck = Object.values(state.decks).filter((deck) => {
    return deck.title === deckId;
  });
  return {
    deck: deck[0],
    deckId,
  };
};

export default connect(mapStateToProps)(DeckDetailsScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
