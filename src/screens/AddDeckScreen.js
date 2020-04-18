import React, { useState } from "react";
import { View, Text } from "react-native";
import { Title, Surface, TextInput, Button } from "react-native-paper";
import { connect } from "react-redux";
import { saveDeck } from "../actions/decks";

const AddDeckScreen = (props) => {
  const [title, setTitle] = useState("");

  const { saveDeck, navigation } = props;

  const handleSaveDeck = () => {
    saveDeck(title);
    navigation.push("Deck", { deckId: title });
  };

  return (
    <View>
      <Surface>
        <Title>Create A Deck</Title>
        <TextInput
          value={title}
          onChangeText={(text) => setTitle(text)}
          label='Deck Title'
        />
        <Button onPress={handleSaveDeck}>Save</Button>
      </Surface>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveDeck: (title) => dispatch(saveDeck(title)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddDeckScreen);
