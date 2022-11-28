import {STORE_METEO} from '../actions/home';

const initialState = {
  value: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case STORE_METEO:
      return {
        ...state,
        value: action.payload,
      };
    default:
      return state;
  }
};
