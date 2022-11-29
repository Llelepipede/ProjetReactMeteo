import { STORE_LOCATION } from '../actions/location';

const initialState = {
  value: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case STORE_LOCATION:
      return {
        ...state,
        value: action.payload,
      };
    default:
      return state;
  }
};
