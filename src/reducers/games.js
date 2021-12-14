import {
  CREATE_GAME,
  RETRIEVE_GAMES,
  UPDATE_GAME,
  DELETE_GAME
} from "../actions/types";

const initialState = [];

function gamesReducer(games = initialState, action) {
  const {
    type,
    payload
  } = action;

  switch (type) {
    case CREATE_GAME:
      return [...games, payload];

    case RETRIEVE_GAMES:
      return payload;

    case UPDATE_GAME:
      return games.map((games) => {
        if (games.id === payload.id) {
          return {
            ...games,
            ...payload,
          };
        } else {
          return games;
        }
      });

    case DELETE_GAME:
      return games.filter(({
        id
      }) => id !== payload.id);

    default:
      return games;
  }
};

export default gamesReducer;