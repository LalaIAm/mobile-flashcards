import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Title, Button, TextInput } from 'react-native-paper';
import { saveCard } from '../actions/decks';
import { connect } from 'react-redux';
import { gStyles } from '../config/theme';

const AddCardScreen = (props) => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const { deckId, saveCard, navigation } = props;

  const handleAddCard = () => {
    let card = {
      question: question,
      answer: answer,
    };

    saveCard(card, deckId);
    setQuestion('');
    setAnswer('');
  };

  const handleDonePress = () => {
    navigation.goBack();
  };

  return (
    <View style={gStyles.container}>
      <Card style={gStyles.surface}>
        <Title style={gStyles.title}>Add New Card</Title>
        <TextInput
          value={question}
          onChangeText={(text) => setQuestion(text)}
          label="Card Front"
          style={styles.inputQ}
          multiline
        />
        <TextInput
          value={answer}
          onChangeText={(text) => setAnswer(text)}
          label="Card Back"
          style={styles.inputB}
          multiline={true}
          numberOfLines={3}
      
        />
        <Button mode='contained' style={styles.save} onPress={handleAddCard}>Save Card</Button>
        <Button mode='contained' style={styles.done} onPress={handleDonePress}>Done</Button>
      </Card>
    </View>
  );
};

const mapStateToProps = ( state, { route }) => {
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

const styles = StyleSheet.create({
  inputQ: {
    backgroundColor: 'white',
    marginVertical: 15
  },
  inputB: {
    backgroundColor: 'white',
    marginVertical: 10
  },
  save: {
    backgroundColor: '#42b9d7',
    marginVertical: 10,
    padding: 5
  },
  done: {
    backgroundColor: '#e38271',
    padding: 5
  }
});
