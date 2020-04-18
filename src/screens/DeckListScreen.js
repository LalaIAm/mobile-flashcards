import React, { Component } from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Surface, Title } from "react-native-paper";
import { connect } from "react-redux";

import { getDecks } from "../actions/decks";

import DeckCard from "../components/DeckCard";

class DeckListScreen extends Component {
  componentDidMount() {
    this.props.getDecks();
  }

  handleSelected = (event) => {
    this.props.chooseDeck(event.target.value);
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
                  onPress={(event) => this.handleSelected(event)}
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
    chooseDeck: (deck) => dispatch(chooseDeck(deck)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeckListScreen);

const styles = StyleSheet.create({});
