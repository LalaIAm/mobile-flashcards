import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Title, Surface, TextInput, Button } from 'react-native-paper';
import { connect } from 'react-redux';
import { saveDeck, selectDeck } from '../actions/decks';
import { gStyles } from '../config/theme';

const AddDeckScreen = (props) => {
  const [title, setTitle] = useState('');

  const { saveDeck, navigation, selectDeck } = props;

  const handleSaveDeck = () => {
    saveDeck(title);
    selectDeck(title)
    navigation.push('Deck', { deckId: title });
  };

  return (
    <View style={gStyles.container}>
      <Surface style={gStyles.surface}>
        <Title style={gStyles.title}>Create A Deck</Title>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={(text) => setTitle(text)}
          label="Deck Title"
        />
        <Button style={styles.btn} mode="contained" onPress={handleSaveDeck}>
          Save
        </Button>
      </Surface>
    </View>
  );
};




const mapDispatchToProps = (dispatch) => {
  return {
    saveDeck: (title) => dispatch(saveDeck(title)),
    selectDeck: (deck) => dispatch(selectDeck(deck))
  };
};

export default connect(null, mapDispatchToProps)(AddDeckScreen);

const styles = StyleSheet.create({
  input: {
    marginTop: 20,
    backgroundColor: 'white'
  },
  btn: {
    padding: 5,
    marginTop: 15
  }
});
