import { createSlice } from '@reduxjs/toolkit';

export const commonSlice = createSlice({
  name: 'common',
  initialState: {
    value: '',
    favoriteOpen: false,
    settingOpen: false,
  },
  reducers: {
    setSearchValue: (state, action) => {
      return {
        ...state,
        value: action.payload,
      };
    },
    setFavoriteMenu: (state, action) => {
      return {
        ...state,
        favoriteOpen: action.payload,
      };
    },
    setSettingMenu: (state, action) => {
      return {
        ...state,
        settingOpen: action.payload,
      };
    },
  },
});

export const { setSearchValue, setFavoriteMenu, setSettingMenu } = commonSlice.actions;
export default commonSlice.reducer;
