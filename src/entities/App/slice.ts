import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { AppState, Language, Theme } from './types'

const initialState: AppState = {
	theme: (localStorage.getItem('theme') as Theme) || Theme.light,
	isPlayMode: false
}

export const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		changeTheme: (state, action: PayloadAction<Theme>) => {
			state.theme = action.payload
		},
		setIsPlayMode: (state, action: PayloadAction<boolean>) => {
			state.isPlayMode = action.payload
		}
	}
})

export const { changeTheme, setIsPlayMode } = appSlice.actions

export default appSlice.reducer
