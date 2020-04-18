import React from "react";
import { TouchableOpacity, StyleSheet, View, Text } from "react-native";
import CardFlip from "react-native-card-flip";
import { Card, Button } from "react-native-paper";

class FlipCard extends React.Component {
  handleCorrect = () => {
    this.props.correct();
    this.card.flip();
  };

  handleNextQuestion = () => {
    this.props.nextQuestion();
    this.card.flip();
  };
  render() {
    const question = this.props.question.question;
    const answer = this.props.question.answer;

    return (
      <Card>
        <View style={styles.container}>
          <CardFlip
            style={styles.cardContainer}
            ref={(card) => (this.card = card)}
          >
            <TouchableOpacity
              activeOpacity={1}
              style={[styles.card, styles.card1]}
              onPress={() => this.card.flip()}
            >
              <Text style={styles.label}>{question}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={1}
              style={[styles.card, styles.card2]}
            >
              <Text style={styles.label}>{answer}</Text>
            </TouchableOpacity>
          </CardFlip>
        </View>
        <View>
          <Button onPress={this.handleCorrect}>Correct</Button>
          <Button onPress={this.handleNextQuestion}>Incorrect</Button>
        </View>
      </Card>
    );
  }
}

export default FlipCard;

const styles = StyleSheet.create({
  cardContainer: {
    width: 300,
    height: 400,
    backgroundColor: "#fe474c",
    borderRadius: 5,
    shadowColor: "rgba(0,0,0,0.5)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
  },
  card1: {
    backgroundColor: "#fe474c",
  },
  card2: {
    backgroundColor: "#feb12c",
  },
  label: {
    lineHeight: 470,
    textAlign: "center",
    fontSize: 55,
    backgroundColor: "transparent",
  },
});
