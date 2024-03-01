import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store/store';

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
export const selectLanguage = (state: RootState) => state.language.value;

export default languageSlice.reducer;
