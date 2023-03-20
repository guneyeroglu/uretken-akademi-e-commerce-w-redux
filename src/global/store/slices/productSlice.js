import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    productLength: 0,
    cart: [],
    favorites: [],
  },
  reducers: {
    addToCart: (state, action) => {
      return {
        ...state,
        cart: state.cart.find((item) => item.id === action.payload.id)
          ? state.cart.map((item) => (item.id === action.payload.id && item.count < 10 ? { ...item, count: item.count + 1 } : item))
          : [...state.cart, { ...action.payload, count: 1 }],
      };
    },
    removeFromCart: (state, action) => {
      return { ...state, cart: state.cart.filter((item) => item.id !== action.payload.id) };
    },
    increaseCart: (state, action) => {
      return { ...state, cart: state.cart.map((item) => (item.id === action.payload.id ? { ...item, count: item.count + 1 } : item)) };
    },
    decreaseCart: (state, action) => {
      return { ...state, cart: state.cart.map((item) => (item.id === action.payload.id ? { ...item, count: item.count - 1 } : item)) };
    },
    setFavorite: (state, action) => {
      return {
        ...state,
        favorites: state.favorites.find((fav) => fav.id === action.payload.id)
          ? state.favorites.filter((fav) => fav.id !== action.payload.id)
          : [...state.favorites, { ...action.payload, fav: true }],
      };
    },
    removeFromCartAndAddToFavorite: (state, action) => {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
        favorites: state.favorites.find((item) => item.id === action.payload.id)
          ? state.favorites.filter((item) => item)
          : [...state.favorites, { ...action.payload, fav: true }],
      };
    },
    setProductLength: (state, action) => {
      return { ...state, productLength: action.payload };
    },
  },
});

export const { addToCart, removeFromCart, increaseCart, decreaseCart, setFavorite, removeFromCartAndAddToFavorite, setProductLength } = productSlice.actions;
export default productSlice.reducer;
