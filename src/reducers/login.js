import {STORE_LOGIN} from '../actions/login';

const initialState = {
  value: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case STORE_LOGIN:
      return {
        ...state,
        value: action.payload,
      };
    default:
      return state;
  }
};
