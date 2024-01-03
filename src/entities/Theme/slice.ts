import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { Theme } from './types'

const initialState: Theme = {
	theme: localStorage.getItem('theme') as Theme['theme'] || 'light'
}

export const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		changeTheme: (state, action: PayloadAction<Theme['theme']>) => {
			state.theme = action.payload
		}
	}
})

export const { changeTheme } = themeSlice.actions

export default themeSlice.reducer
