import { combineReducers, createStore } from 'redux';
import { productReducer, commonReducer } from './reducers';

const combine = combineReducers({ productReducer, commonReducer });

export const configureStore = () => {
  return createStore(combine);
};
