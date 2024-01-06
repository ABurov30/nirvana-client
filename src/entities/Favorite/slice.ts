import { createSlice, PayloadAction } from '@reduxjs/toolkit'
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
		}
	}
})

export const { setFavoriteRadios, setFavoriteTracks } = favoriteSlice.actions

export default favoriteSlice.reducer
