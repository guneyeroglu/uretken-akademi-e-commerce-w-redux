import { configureStore } from '@reduxjs/toolkit';

import productReducer from './slices/productSlice';
import commonReducer from './slices/commonSlice';

export default configureStore({
  reducer: {
    productReducer,
    commonReducer,
  },
});
