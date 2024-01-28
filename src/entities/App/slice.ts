import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { AppState, Theme } from './types';

const currentTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? Theme.dark : Theme.light;

const savedTheme = localStorage.getItem('theme') as Theme;

const initialState: AppState = {
	theme:  savedTheme || currentTheme ||Theme.light,
	isPlayMode: false
}

export const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		changeTheme: (state, action: PayloadAction<Theme>) => {
			state.theme = action.payload
		},
		setIsPlayMode: (
			state,
			action: PayloadAction<AppState['isPlayMode']>
		) => {
			state.isPlayMode = action.payload
		}
	}
})

export const { changeTheme, setIsPlayMode } = appSlice.actions

export default appSlice.reducer
