import type { PayloadAction } from '@reduxjs/toolkit'
import { CurTracks, NotificationType } from './types'
import { createSlice } from '@reduxjs/toolkit'

const initialState: CurTracks = {
	curTracks: [],
	position: 0
}

export const curTracksSlice = createSlice({
	name: 'curTracks',
	initialState,
	reducers: {
		setCurTracks: (state, action) => {
			state.curTracks = action.payload
		},
		setPosition: (state, action) => {
			state.position = action.payload
		}
	}
})

export const { setCurTracks, setPosition } = curTracksSlice.actions

export default curTracksSlice.reducer
