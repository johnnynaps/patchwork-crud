import {
  CREATE_ACCOUNT,
  RETRIEVE_ACCOUNT,
  UPDATE_ACCOUNT,
  DELETE_ACCOUNT
} from "./types";

import AccountsDataService from "../services/accounts.service";

export const createAccount = (username) => async (dispatch) => {
  try {
    const res = await AccountsDataService.create({
      username
    });

    dispatch({
      type: CREATE_ACCOUNT,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const retrieveAccounts = () => async (dispatch) => {
  try {
    const res = await RETRIEVE_ACCOUNT.getAll();

    dispatch({
      type: RETRIEVE_ACCOUNT,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateAccounts = (id, data) => async (dispatch) => {
  try {
    const res = await AccountsDataService.update(id, data);

    dispatch({
      type: UPDATE_ACCOUNT,
      payload: data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const deleteAccounts = (id) => async (dispatch) => {
  try {
    await AccountsDataService.delete(id);

    dispatch({
      type: DELETE_ACCOUNT,
      payload: {
        id
      },
    });
  } catch (err) {
    console.log(err);
  }
};

export const findAccountsByusername = (username) => async (dispatch) => {
  try {
    const res = await AccountsDataService.findByusername(username);

    dispatch({
      type: RETRIEVE_ACCOUNT,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};