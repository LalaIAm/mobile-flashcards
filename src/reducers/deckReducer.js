import {
  SAVE_CARD,
  SAVE_DECK,
  GET_DECKS,
  DELETE_DECK,
  CLEAR_DECKS,
} from '../actions/decks';

import { initialDecks } from '../utils/mockData';
const initialState = initialDecks;

const decks = (state = initialState, action) => {
  switch (action.type) {
    case GET_DECKS:
      return {
        ...state,
        ...action.decks,
      };
    case SAVE_DECK:
      const { deck } = action;
      return {
        ...state,
        [deck.title]: deck,
      };
    case SAVE_CARD:
      const updatedDeck = action.deck;
      return {
        ...state,
        [updatedDeck.title]: updatedDeck,
      };
    case DELETE_DECK:
      return Object.keys(state).reduce((newState, key) => {
        if (key !== action.title) {
          return {
            ...newState,
            [key]: state[key],
          };
        }
        return newState;
      }, {});
    case CLEAR_DECKS:
      return {};
    default:
      return state;
  }
};

export default decks;
