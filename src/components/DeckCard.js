import React from "react";
import { View, StyleSheet } from "react-native";
import { Card, Headline, Subheading } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const DeckCard = (props) => {
  const { deck } = props;
  const navigation = useNavigation();

  const getNumCards = () => {
    let n = deck.questions.length;
    if (n === 1) {
      return "1 Card.";
    }
    return `${n} Cards.`;
  };

  const selectDeck = () => {
    navigation.push("Deck", { deckId: deck.title });
  };
  return (
    <Card onPress={selectDeck}>
      <Headline>{deck.title}</Headline>
      <Subheading>{getNumCards()}</Subheading>
    </Card>
  );
};

export default DeckCard;

const styles = StyleSheet.create({});
