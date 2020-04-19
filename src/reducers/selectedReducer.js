import { SELECT_DECK } from '../actions/decks';

export default function selected(state = {}, action) {
  switch (action.type) {
    case SELECT_DECK:
      const deck = action.deck;
      return {
        ...state,
        deck,
      };
    default:
      return state;
  }
}
