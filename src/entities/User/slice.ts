import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { UserType } from '../../../../types/userType';

// Define the initial state using that type
const initialState: UserType = {
  status: 'fetching',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserType>) =>action.payload,
    logoutUser: (state) => ({ status: 'guest', id: null, score: null }),
  },
});

export const { setUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
