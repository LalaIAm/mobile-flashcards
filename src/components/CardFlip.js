import React from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import CardFlip from 'react-native-card-flip';
import { Card, Button } from 'react-native-paper';

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
      <Card style={styles.cardOuterContainer}>
        <View style={styles.cardContainer}>
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
              <View>
                <Text style={styles.label}>{answer}</Text>
                <View style={styles.btnBox}>
                  <Button
                    mode="contained"
                    style={styles.btnCorrect}
                    onPress={this.handleCorrect}
                  >
                    Correct!
                  </Button>
                  <Button
                    mode="contained"
                    style={styles.btn}
                    onPress={this.handleNextQuestion}
                  >
                    Incorrect
                  </Button>
                </View>
              </View>
            </TouchableOpacity>
          </CardFlip>
        </View>
      </Card>
    );
  }
}

export default FlipCard;

const styles = StyleSheet.create({
  cardOuterContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  cardContainer: {
    width: 300,
    height: 450,
    backgroundColor: 'transparent',
    borderRadius: 5,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
  },
  card1: {
    backgroundColor: '#7AA6AC',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card2: {
    backgroundColor: '#DFDEE5',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    textAlign: 'center',
    fontSize: 24,
    backgroundColor: 'transparent',
  },
  btnBox: {
    marginTop: 40
  },
  btnCorrect: {
    padding: 5,
    marginVertical: 10
  },
  btn: {
    padding: 5,
    backgroundColor: '#CC7566'
  }
});
