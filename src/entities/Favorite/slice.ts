import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Track } from 'entities/Track/types'

import { FavoriteState } from './types'

const initialState: FavoriteState = {
	favoriteTracks: [],
	favoriteRadios: []
}

export const favoriteSlice = createSlice({
	name: 'favorite',
	initialState,
	reducers: {
		setFavoriteTracks: (state, action) => {
			state.favoriteTracks = action.payload
		},
		setFavoriteRadios: (state, action) => {
			state.favoriteRadios = action.payload
		},
		removeFavoritesTrack: (state, action: PayloadAction<string>) => {
			state.favoriteTracks = state.favoriteTracks.filter(
				radio => radio.id !== action.payload
			)
		},
		removeFavoritesRadio: (state, action) => {
			state.favoriteRadios = state.favoriteRadios.filter(
				track => track.id !== action.payload
			)
		},
		addFavoritesTrack: (state, action: PayloadAction<Track>) => {
			const favorite = state.favoriteTracks.find(
				track => track.id === action.payload.id
			)
			if (favorite) {
				state.favoriteTracks = state.favoriteTracks
			} else {
				action.payload.isLiked = true
				state.favoriteTracks.push(action.payload)
			}
		},
		addFavoritesRadio: (state, action: PayloadAction<Track>) => {
			const favorite = state.favoriteRadios.find(
				radio => radio.id === action.payload.id
			)
			if (favorite) {
				state.favoriteRadios = state.favoriteRadios
			} else {
				action.payload.isLiked = true
				state.favoriteRadios.push(action.payload)
			}
		}
	}
})

export const {
	setFavoriteRadios,
	setFavoriteTracks,
	removeFavoritesTrack,
	removeFavoritesRadio,
	addFavoritesTrack,
	addFavoritesRadio
} = favoriteSlice.actions

export default favoriteSlice.reducer
