import * as API from "../utils/api";

export const GET_DECKS = "GET_DECKS";
export const SAVE_DECK = "SAVE_DECK";
export const DELETE_DECK = "DELETE_DECK";
export const SAVE_CARD = "SAVE_CARD";
export const CLEAR_DECKS = "CLEAR_DECKS";

const getDecksSuccess = (decks) => {
  return {
    type: GET_DECKS,
    decks,
  };
};

export const getDecks = () => {
  return (dispatch) => {
    return API.getDecks().then((decks) => {
      dispatch(getDecksSuccess(decks));
    });
  };
};

const saveDeckSuccess = (deck) => {
  return {
    type: SAVE_DECK,
    deck,
  };
};

export const saveDeck = (title) => {
  return (dispatch) => {
    return API.saveDeck(title).then((deck) => {
      dispatch(saveDeckSuccess(deck));
    });
  };
};

const deleteDeckSuccess = (decks) => {
  return {
    type: DELETE_DECK,
    decks,
  };
};

export const deleteDeck = (title) => {
  return (dispatch) => {
    return API.deleteDeck(title).then((decks) =>
      dispatch(deleteDeckSuccess(decks))
    );
  };
};

const saveCardSuccess = (deck) => {
  return {
    type: SAVE_CARD,
    deck,
  };
};

export const saveCard = (card, title) => {
  return (dispatch) => {
    return API.saveCard(card, title).then((deck) => {
      dispatch(saveCardSuccess(deck));
    });
  };
};

const resetDecksSuccess = () => {
  return {
    type: CLEAR_DECKS,
  };
};

export const resetDecks = () => {
  return (dispatch) => {
    return API.resetDecks().then(() => dispatch(resetDecksSuccess()));
  };
};
