import { AnyAction, ThunkAction, configureStore } from '@reduxjs/toolkit'
import radiosReducer from '../entities/radiosSlice'
import userReducer from './slices/users/userSlice'

export const store = configureStore({
	reducer: {
		radio: radiosReducer,
		user: userReducer
	}
})

let a = 2

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	AnyAction
>

export type ThunkActionCreater<PayloadType = void, ReturnType = void> = (
	payload: PayloadType
) => AppThunk<ReturnType>
