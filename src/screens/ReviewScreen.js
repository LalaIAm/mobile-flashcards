import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import FlipCard from "../components/CardFlip";
import { connect } from "react-redux";
import { Surface, Title, Text, FAB, Button } from "react-native-paper";

const ReviewScreen = (props) => {
  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [cardSide, setCardSide] = useState("front");

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
    navigation.navigate("Home");
  };

  if (totalQuestions === index ) {
    return (
      <Surface>
        <Text>Great!. You got {correct} right!</Text>
        <Button onPress={endReview}>End Review</Button>
      </Surface>
    );
  }

  return (
    <View>
      <Surface>
        <Title>{deck.title}</Title>
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

const styles = StyleSheet.create({});
