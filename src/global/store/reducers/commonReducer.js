import { actionTypes } from '../constants';

const initialState = {
  value: '',
  favoriteOpen: false,
  settingOpen: false,
};

export const commonReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_SEARCH_VALUE:
      return {
        ...state,
        value: action.payload,
      };
    case actionTypes.SET_FAVORITE_MENU:
      return {
        ...state,
        favoriteOpen: action.payload,
      };
    case actionTypes.SET_SETTING_MENU:
      return {
        ...state,
        settingOpen: action.payload,
      };
    default:
      return state;
  }
};
