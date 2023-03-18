import { actionTypes } from '../constants';

export const addToCart = (dispatch, payload) => {
  return new Promise((resolve, _reject) => {
    resolve(dispatch({ type: actionTypes.ADD_TO_CART, payload }));
  });
};

export const removeFromCart = (dispatch, payload) => {
  return new Promise((resolve, _reject) => {
    resolve(dispatch({ type: actionTypes.REMOVE_FROM_CART, payload }));
  });
};

export const increaseCart = (dispatch, payload) => {
  return new Promise((resolve, _reject) => {
    resolve(dispatch({ type: actionTypes.INCREASE_CART, payload }));
  });
};

export const decreaseCart = (dispatch, payload) => {
  return new Promise((resolve, _reject) => {
    resolve(dispatch({ type: actionTypes.DECREASE_CART, payload }));
  });
};

export const removeFromCartAndAddToFavorite = (dispatch, payload) => {
  return new Promise((resolve, _reject) => {
    resolve(dispatch({ type: actionTypes.REMOVE_FROM_CART_AND_ADD_TO_FAVORITE, payload }));
  });
};

export const setFavorite = (dispatch, payload) => {
  return new Promise((resolve, _reject) => {
    resolve(dispatch({ type: actionTypes.SET_FAVORITE, payload }));
  });
};

export const setProductLength = (dispatch, payload) => {
  return new Promise((resolve, _reject) => {
    resolve(dispatch({ type: actionTypes.PRODUCT_LENGTH, payload }));
  });
};
