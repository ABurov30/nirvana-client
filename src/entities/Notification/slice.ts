import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { NotificationType } from './types'

const initialState: NotificationType = {
	severity: '',
	message: ''
}

export const notificationSlice = createSlice({
	name: 'notification',
	initialState,
	reducers: {
		setNotification: (state, action: PayloadAction<NotificationType>) =>
			action.payload,
		clearNotification: state => ({ message: '', severity: '' })
	}
})

export const { setNotification, clearNotification } = notificationSlice.actions

export default notificationSlice.reducer
