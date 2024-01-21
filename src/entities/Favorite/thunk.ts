import { ThunkAction, UnknownAction } from '@reduxjs/toolkit'
import { request } from '../../shared/Request/Requets'
import { setFavoriteRadios, setFavoriteTracks } from './slice'
import { RootState } from '../../shared/Redux/store'

const URL = '/favorite'

export const getFavoriteTracksThunk =
	(
		offset: number,
		userId: string
	): ThunkAction<void, RootState, unknown, UnknownAction> =>
	async dispatch => {
		const res = await request.sendRequest({
			method: 'post',
			url: `${URL}/all`,
			data: { offset: offset, userId: userId, type: 'track' }
		})
		dispatch(setFavoriteTracks(res?.data))
	}

export const getFavoriteRadiosThunk =
	(
		offset: number,
		userId: string
	): ThunkAction<void, RootState, unknown, UnknownAction> =>
	async dispatch => {
		const res = await request.sendRequest({
			method: 'post',
			url: `${URL}/all`,
			data: { offset: offset, userId: userId, type: 'radio' }
		})
		dispatch(setFavoriteRadios(res?.data))
	}
