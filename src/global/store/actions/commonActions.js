import { actionTypes } from '../constants';

export const setSearchValue = (dispatch, payload) => {
  return new Promise((resolve, _reject) => {
    resolve(dispatch({ type: actionTypes.SET_SEARCH_VALUE, payload }));
  });
};

export const setFavoriteMenu = (dispatch, payload) => {
  return new Promise((resolve, _reject) => {
    resolve(dispatch({ type: actionTypes.SET_FAVORITE_MENU, payload }));
  });
};

export const setSettingMenu = (dispatch, payload) => {
  return new Promise((resolve, _reject) => {
    resolve(dispatch({ type: actionTypes.SET_SETTING_MENU, payload }));
  });
};
