import { AsyncStorage } from "react-native";
import { initialDecks } from "./mockData";

export const DECK_KEY = "@Flasher_Deck";

const formatDeck = (title) => {
  return {
    title: title,
    questions: [],
  };
};

export const getDecks = async () => {
  try {
    let data = await AsyncStorage.getItem(DECK_KEY);
    let storedDecks = JSON.parse(data);
    if (!storedDecks) {
      storedDecks = initialDecks;
      await AsyncStorage.setItem(DECK_KEY, JSON.stringify(storedDecks));
      return storedDecks;
    } else {
      return storedDecks;
    }
  } catch (e) {
    console.log("Storage Read Error: ", e);
  }
};

export const saveDeck = async (title) => {
  try {
    let savedDecks = await AsyncStorage.getItem(DECK_KEY);
    savedDecks = JSON.parse(savedDecks);
    let formattedDeck = formatDeck(title);
    const updatedDecks = {
      ...savedDecks,
      [formattedDeck.title]: formattedDeck,
    };
    await AsyncStorage.setItem(DECK_KEY, JSON.stringify(updatedDecks));
    return formattedDeck;
  } catch (e) {
    console.log("Save Error: ", e);
  }
};

export const deleteDeck = async (title) => {
  try {
    const data = await AsyncStorage.getItem(DECK_KEY)
    const savedDecks = JSON.parse(data);
    const updatedDecks = Object.keys(savedDecks).reduceRight((newObj, key) => {
      if (key !== title){
        newObj[key] = data[key];
      }
      return newObj;
    }, {});
    await AsyncStorage.setItem(DECK_KEY, JSON.stringify(updatedDecks))
  } catch (e) {
    console.log(e);
  }
};

export const saveCard = async (card, deckTitle) => {
  try {
    let data = await AsyncStorage.getItem(DECK_KEY);
    const decks = JSON.parse(data);
    const updatedDeck = {
      ...decks[deckTitle],
      questions: [...decks[deckTitle].questions, card],
    };
    const updatedData = {
      ...decks,
      [deckTitle]: updatedDeck,
    };
    await AsyncStorage.setItem(DECK_KEY, JSON.stringify(updatedData));
    return updatedDeck;
  } catch (e) {
    console.log(e);
  }
};

export const resetDecks = async () => {
  try {
    await AsyncStorage.removeItem(DECK_KEY);
  } catch (e) {
    console.log(e);
  }
};
