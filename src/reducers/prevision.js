import {STORE_PREVISION} from '../actions/prevision';

const initialState = {
  value: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case STORE_PREVISION:
      return {
        ...state,
        value: action.payload,
      };
    default:
      return state;
  }
};
