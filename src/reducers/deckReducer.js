import {
  SAVE_CARD,
  SAVE_DECK,
  GET_DECKS,
  DELETE_DECK,
  CLEAR_DECKS,
} from "../actions/decks";

const initialState = {};

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
      return {
        ...state,
        ...action.decks,
      };
    case CLEAR_DECKS:
      return {
        initalState,
      };
    default:
      return state;
  }
};

export default decks;
