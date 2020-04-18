import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Card, Title, Button, TextInput, FAB } from "react-native-paper";
import { saveCard } from "../actions/decks";
import { connect } from "react-redux";

const AddCardScreen = (props) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const { deckId, saveCard, navigation } = props;

  const handleAddCard = () => {
    let card = {
      question: question,
      answer: answer,
    };

    saveCard(card, deckId);
    setQuestion("");
    setAnswer("");
  };

  const handleDonePress = () => {
    navigation.goBack();
  };

  return (
    <View>
      <Card>
        <Title>Add New Card</Title>
        <TextInput
          value={question}
          onChangeText={(text) => setQuestion(text)}
          label='Card Front'
        />
        <TextInput
          value={answer}
          onChangeText={(text) => setAnswer(text)}
          label='Card Back'
        />
        <Button onPress={handleAddCard}>Save Card</Button>
        <Button onPress={handleDonePress}>Done</Button>
      </Card>
    </View>
  );
};

const mapStateToProps = (state, { route }) => {
  const deckId = route.params.deckId;
  return {
    deckId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveCard: (card, deckId) => dispatch(saveCard(card, deckId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCardScreen);

const styles = StyleSheet.create({});
