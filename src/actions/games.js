import {
  CREATE_GAME,
  RETRIEVE_GAMES,
  UPDATE_GAME,
  DELETE_GAME
} from "./types";

import GamesDataService from "../services/games.service";

export const createGame = (title, urlHome, urlSupport, urlNews, urlServer, urlTwitter, serverStatus, developer, currentPatch) => async (dispatch) => {
  try {
    const res = await GamesDataService.create({
      title,
      urlHome,
      urlSupport,
      urlNews,
      urlServer,
      urlTwitter,
      serverStatus,
      developer,
      currentPatch
    });

    dispatch({
      type: CREATE_GAME,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const retrieveGames = () => async (dispatch) => {
  try {
    const res = await GamesDataService.getAll();
    dispatch({
      type: RETRIEVE_GAMES,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateGame = (id, data) => async (dispatch) => {
  try {
    const res = await GamesDataService.update(id, data);

    dispatch({
      type: UPDATE_GAME,
      payload: data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const deleteGame = (id) => async (dispatch) => {
  try {
    await GamesDataService.delete(id);

    dispatch({
      type: DELETE_GAME,
      payload: {
        id
      },
    });
  } catch (err) {
    console.log(err);
  }
};

export const findGamesByTitle = (title) => async (dispatch) => {
  try {
    const res = await GamesDataService.findByTitle(title);

    dispatch({
      type: RETRIEVE_GAMES,
      payload: res.data,
    });

  } catch (err) {
    console.log(err);
  }
};