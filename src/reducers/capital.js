import { STORE_CAPITAL } from '../actions/capital';

const initialState = {
  value: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case STORE_CAPITAL:
      return {
        ...state,
        value: action.payload,
      };
    default:
      return state;
  }
};
