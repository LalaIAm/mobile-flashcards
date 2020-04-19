import React, { Component } from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Surface, Title } from "react-native-paper";
import { connect } from "react-redux";

import { getDecks, selectDeck } from "../actions/decks";

import DeckCard from "../components/DeckCard";

class DeckListScreen extends Component {
  componentDidMount() {
    this.props.getDecks();
  }

  handleSelected = (deck) => {
    this.props.selectDeck(deck);
    this.props.navigation.navigate('Deck', {deckId: deck.title})
  };

  render() {
    const { decks } = this.props;
    return (
      <View style={styles.container}>
        <Surface style={styles.surface}>
          <Title style={styles.title}>My Decks</Title>
          <ScrollView>
            {decks &&
              decks.map((deck) => (
                <TouchableOpacity
                  key={deck.title}
                  value={deck}
                  onPress={(deck) => this.handleSelected(deck)}
                >
                  <DeckCard key={deck.title} deck={deck} />
                </TouchableOpacity>
              ))}
          </ScrollView>
        </Surface>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    decks: Object.values(state.decks),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getDecks: () => dispatch(getDecks()),
    selectDeck: (deck) => dispatch(selectDeck(deck))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeckListScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    paddingTop: 50,
    backgroundColor: '#98d0d7',
  },
  surface: {
    padding: 20,
    backgroundColor: "#faf9f7"
  },
  title: {
    textAlign: 'center',
    fontSize: 32,
    margin: 20
  }
  
});
