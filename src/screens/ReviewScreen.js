import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import FlipCard from '../components/CardFlip';
import { Surface, Title, Text, Button } from 'react-native-paper';
import { gStyles } from '../config/theme';
import { clearNotification } from '../utils/notifications';

const ReviewScreen = (props) => {
  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const deck = props.route.params.deck;
  const deckQuestions = deck.questions;
  const currentQuestion = deckQuestions[index];
  const totalQuestions = deckQuestions.length;

  const navigation = props.navigation;

  const nextQuestion = () => {
    setIndex(index + 1);
  };

  const correctAnswer = () => {
    setCorrect(correct + 1);
    nextQuestion();
  };

  const endReview = () => {
    setIndex(0);
    setCorrect( 0 );
    clearNotification()
    navigation.navigate('Home');
  };

  const getPercent = () => {
    return Math.round((correct / totalQuestions) * 100);
  };

  const restartQuiz = () => {
    setIndex(0);
    setCorrect(0);
  };

  if (totalQuestions === index) {
    return (
      <View style={gStyles.container}>
        <Surface style={gStyles.surface}>
          <Text style={styles.endReview}>Great!. You got {correct} right!</Text>
          <Text style={styles.percent}>That's {getPercent()}%!</Text>
          <Button
            mode="contained"
            style={styles.restartBtn}
            onPress={restartQuiz}
          >
            Restart Quiz
          </Button>
          <Button mode="contained" style={styles.endBtn} onPress={endReview}>
            End Review
          </Button>
        </Surface>
      </View>
    );
  }

  return (
    <View style={gStyles.container}>
      <Surface style={gStyles.surface}>
        <Title style={gStyles.title}>{deck.title}</Title>
        <FlipCard
          nextQuestion={nextQuestion}
          correct={correctAnswer}
          question={currentQuestion}
        />
      </Surface>
    </View>
  );
};

export default ReviewScreen;

const styles = StyleSheet.create({
  endReview: {
    textAlign: 'center',
    lineHeight: 50,
    fontSize: 22,
  },
  percent: {
    textAlign: 'center',
    fontSize: 30,
    color: '#e38271',
    marginBottom: 20,
  },
  endBtn: {
    padding: 5,
  },
});
