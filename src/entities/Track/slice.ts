import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { TracksState } from './types'

const initialState: TracksState = {
	tracks: []
}

export const tracksSlice = createSlice({
	name: 'track',
	initialState,
	reducers: {
		setTracks: (state, action) => {
			state.tracks = action.payload
		}
	}
})

export const { setTracks } = tracksSlice.actions

export default tracksSlice.reducer
