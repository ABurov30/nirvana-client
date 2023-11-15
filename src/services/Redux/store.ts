import { AnyAction, ThunkAction, configureStore } from '@reduxjs/toolkit'
import notificationSlice from '../../entities/Notification/slice'
import radiosReducer from '../../entities/Radios/slice'
import userReducer from '../../entities/User/slice'

export const store = configureStore({
	reducer: {
		radio: radiosReducer,
		user: userReducer,
		notification: notificationSlice
	}
})

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
