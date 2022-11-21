import {STORE_METEO} from '../actions/home';

const initialState = {
  value: [],
  current: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case STORE_METEO:
      return {
        ...state,
        // value: [...state.value, action.payload], // pour les favoris
        current: action.payload,
      };
    default:
      return state;
  }
};
