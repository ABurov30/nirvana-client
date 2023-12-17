import { AnyAction, ThunkAction, configureStore } from '@reduxjs/toolkit'
import notificationReducer from '../../entities/Notification/slice'
import isPlayModeReducer from '../../entities/IsPlayMode/slice'
import curTracksReducer from '../../entities/CurTracks/slice'
import radiosReducer from '../../entities/Radios/slice'
import promoReducer from '../../entities/Promo/slice'
import userReducer from '../../entities/User/slice'

export const store = configureStore({
	reducer: {
		radio: radiosReducer,
		promo: promoReducer,
		user: userReducer,
		notification: notificationReducer,
		curTracks: curTracksReducer,
		isPlayMode: isPlayModeReducer
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
