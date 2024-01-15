import type { PayloadAction } from '@reduxjs/toolkit'
import { CurTracks } from './types'
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
		},
		addLikeToCurTrack: (state, action) => {
			state.curTracks = state.curTracks.map(track => {
				if (action.payload === track.id) {
					track.isLiked = true
				}
				return track
			})
		},
		removeLikeFromCurTrack: (state, action) => {
			state.curTracks = state.curTracks.map(track => {
				if (action.payload === track.id) {
					track.isLiked = false
				}
				return track
			})
		}
	}
})

export const {
	setCurTracks,
	setPosition,
	removeLikeFromCurTrack,
	addLikeToCurTrack
} = curTracksSlice.actions

export default curTracksSlice.reducer
