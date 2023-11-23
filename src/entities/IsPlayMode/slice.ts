import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { isPlayMode } from './types'

const initialState: isPlayMode = {
	isPlayMode: false
}

export const isPlayModeSlice = createSlice({
	name: 'isPlayMode',
	initialState,
	reducers: {
		setIsPlayMode: (state, action: PayloadAction<boolean>) => {
			state.isPlayMode = action.payload
		}
	}
})

export const { setIsPlayMode } = isPlayModeSlice.actions

export default isPlayModeSlice.reducer
