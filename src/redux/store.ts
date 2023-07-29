import { AnyAction, ThunkAction, configureStore } from '@reduxjs/toolkit';
import radiosReducer from './slices/radios/radiosSlice';
import userReducer from './slices/users/userSlice';

export const store = configureStore({
  reducer: {
    radio: radiosReducer,
    user: userReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AnyAction>;

export type ThunkActionCreater<PayloadType = void, ReturnType = void> = (
  payload: PayloadType,
) => AppThunk<ReturnType>;
