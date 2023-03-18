import { actionTypes } from '../constants';

const initialState = {
  productLength: 0,
  cart: [],
  favorites: [],
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return {
        ...state,
        cart: state.cart.find((item) => item.id === action.payload.id)
          ? state.cart.map((item) => (item.id === action.payload.id && item.count < 10 ? { ...item, count: item.count + 1 } : item))
          : [...state.cart, { ...action.payload, count: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return { ...state, cart: state.cart.filter((item) => item.id !== action.payload.id) };
    case actionTypes.INCREASE_CART:
      return { ...state, cart: state.cart.map((item) => (item.id === action.payload.id ? { ...item, count: item.count + 1 } : item)) };
    case actionTypes.DECREASE_CART:
      return { ...state, cart: state.cart.map((item) => (item.id === action.payload.id ? { ...item, count: item.count - 1 } : item)) };
    case actionTypes.SET_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.find((fav) => fav.id === action.payload.id)
          ? state.favorites.filter((fav) => fav.id !== action.payload.id)
          : [...state.favorites, { ...action.payload, fav: true }],
      };
    case actionTypes.REMOVE_FROM_CART_AND_ADD_TO_FAVORITE:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
        favorites: state.favorites.find((item) => item.id === action.payload.id)
          ? state.favorites.filter((item) => item)
          : [...state.favorites, { ...action.payload, fav: true }],
      };
    case actionTypes.PRODUCT_LENGTH:
      return { ...state, productLength: action.payload };
    default:
      return state;
  }
};
