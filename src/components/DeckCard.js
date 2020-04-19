import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Headline, Subheading } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { selectDeck } from '../actions/decks';
import { gStyles } from '../config/theme';
import {connect} from 'react-redux';

const DeckCard = (props) => {
  const { deck, selectDeck } = props;
  const navigation = useNavigation();

  const getNumCards = () => {
    let n = deck.questions.length;
    if (n === 1) {
      return '1 Card.';
    }
    return `${n} Cards.`;
  };

  const chooseDeck = () => {
    selectDeck(deck)
    navigation.push('Deck', { deckId: deck.title });
  };
  return (
    <Card onPress={chooseDeck} style={styles.card}>
      <Headline style={gStyles.headline}>{deck.title}</Headline>
      <Subheading style={gStyles.subheading}>{getNumCards()}</Subheading>
    </Card>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    selectDeck: (deck) => dispatch(selectDeck(deck))
  }
}

export default connect(null, mapDispatchToProps)(DeckCard);

const styles = StyleSheet.create({
  card: {
    padding: 15,
    marginTop: 20,
    backgroundColor: 'white'
  }
});
