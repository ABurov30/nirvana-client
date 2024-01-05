import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { Notification } from './types'

const initialState: Notification = {
	severity: '',
	message: '',
	isOpen: false
}

export const notificationSlice = createSlice({
	name: 'notification',
	initialState,
	reducers: {
		setNotification: (state, action: PayloadAction<Notification>) =>
			action.payload,
		clearNotification: state => ({
			message: '',
			severity: '',
			isOpen: false
		}),
		setIsOpen: (state, action: PayloadAction<boolean>) => {
			const newState = { ...state }
			newState.isOpen = action.payload
			return newState
		}
	}
})

export const { setNotification, clearNotification, setIsOpen } =
	notificationSlice.actions

export default notificationSlice.reducer
