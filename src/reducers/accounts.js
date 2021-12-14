import {
  CREATE_ACCOUNT,
  RETRIEVE_ACCOUNT,
  UPDATE_ACCOUNT,
  DELETE_ACCOUNT
} from "../actions/types";

const initialState = [];

function accountsReducer(accounts = initialState, action) {
  const {
    type,
    payload
  } = action;

  switch (type) {
    case CREATE_ACCOUNT:
      return [...accounts, payload];

    case RETRIEVE_ACCOUNT:
      return payload;

    case UPDATE_ACCOUNT:
      return accounts.map((accounts) => {
        if (accounts.id === payload.id) {
          return {
            ...accounts,
            ...payload,
          };
        } else {
          return accounts;
        }
      });

    case DELETE_ACCOUNT:
      return accounts.filter(({
        id
      }) => id !== payload.id);

    default:
      return accounts;
  }
};

export default accountsReducer;