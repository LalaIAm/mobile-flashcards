import React from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { gStyles } from '../config/theme';
import {
  Headline,
  Subheading,
  Surface,
  Button,
  FAB,
  ActivityIndicator,
  Colors,
} from 'react-native-paper';
import { deleteDeck, selectDeck, getDecks } from '../actions/decks';

const DeckDetailsScreen = (props) => {
  const { deck, deckId, navigation, deleteDeck, selectDeck, getDecks } = props;

  const getNumberOfCards = () => {
    const n = deck.questions.length;
    if (n === 1) {
      return '1 Card.';
    }
    return `${n} Cards.`;
  };

  const handleAddCardPress = () => {
    navigation.push('AddCard', { deckId: deckId });
  };

  const handleReviewPress = () => {
    navigation.push('Review', { deck: deck });
  };

  const handleGoToMain = () => {
    navigation.navigate('Home', { screen: 'DeckList'});
  };

  const handleDeleteDeck = () => {
    selectDeck(null);
    deleteDeck(deck.title);
    navigation.navigate('Home');
  };

  if (deck === null || deck === undefined) {
    return (
      <View style={gStyles.container}>
        <ActivityIndicator
          animating={true}
          color={Colors.blue300}
          size="large"
        />
      </View>
    );
  }

  return (
    <View style={gStyles.container}>
      <Surface style={gStyles.surface}>
        <Headline style={gStyles.headline}>{deckId}</Headline>
        <Subheading style={gStyles.subheading}>{getNumberOfCards()}</Subheading>
        <View style={styles.btnContainer}>
          <Button
            mode="contained"
            onPress={handleAddCardPress}
            style={styles.addBtn}
          >
            Add Card
          </Button>
          <Button
            mode="contained"
            onPress={handleReviewPress}
            style={styles.reviewBtn}
          >
            Start Review
          </Button>
        </View>
      </Surface>
      <View style={styles.fabContainer}>
        <FAB
          onPress={handleGoToMain}
          style={styles.fabDeck}
          icon="cards"
          label="Deck List"
        />
        <FAB
          onPress={handleDeleteDeck}
          style={styles.fab}
          icon="delete"
          label="Delete Deck"
        />
      </View>
    </View>
  );
};

const mapStateToProps = (state, { navigation, route }) => {
  const deckId = route.params.deckId;
  const deck = Object.values(state.decks).filter((deck) => {
    return deck.title === deckId;
  });

  const selectedDeck = state.selectedDeck
  return {
    deck: deck[0],
    deckId,
    selectedDeck
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteDeck: (deck) => dispatch(deleteDeck(deck)),
    selectDeck: () => dispatch(selectDeck(null)),
    getDecks: () => dispatch(getDecks())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeckDetailsScreen);

const styles = StyleSheet.create({
  btnContainer: {
    marginTop: 20,
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  fabContainer: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    paddingBottom: 10,
    justifyContent: 'space-evenly',
  },
});
