import { createSlice } from '@reduxjs/toolkit';

export const languageSlice = createSlice({
  name: 'language',
  initialState: {
    value: 'ru',
  },
  reducers: {
    ru: (state) => {
      state.value = 'ru';
    },
    en: (state) => {
      state.value = 'en';
    },
  },
});

export const { ru, en } = languageSlice.actions;

export default languageSlice.reducer;
