import { combineReducers } from "redux";
import decks from "./deckReducer";
import selected from './selectedReducer';

export default combineReducers({
  decks: decks,
  selectedDeck: selected
});
