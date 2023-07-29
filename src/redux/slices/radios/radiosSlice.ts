import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RadioType } from '../../../types/radioTypes';

// Define a type for the slice state
interface PostsState {
  radios: RadioType[];
  radio: RadioType;
}

// Define the initial state using that type
const initialState: PostsState = {
  radios: [],
  radio: null,
};

export const radiosSlice = createSlice({
  name: 'radio',
  initialState,
  reducers: {
    setRadio: (state, action) => {
      state.radios = action.payload;
    },
    setOneRadio: (state, action) => {
      state.radio = action.payload;
    },
  },
});

export const { setRadio, setOneRadio } = radiosSlice.actions;

export default radiosSlice.reducer;
