import { ThunkActionCreater } from '../../shared/Redux/store'
import { request } from '../../shared/Request/Requets'
import { setFavoriteRadios, setFavoriteTracks } from './slice'

const URL = '/favorite'

export const getFavoriteTracksThunk: ThunkActionCreater<number, string> =
	(offset: number, userId: number) => async dispatch => {
		const res = await request.sendRequest({
			method: 'post',
			url: `${URL}/all`,
			data: { offset: offset, userId: userId, type: 'track' }
		})
		dispatch(setFavoriteTracks(res?.data))
	}

export const getFavoriteRadiosThunk: ThunkActionCreater<number, string> =
	(offset: number, userId: number) => async dispatch => {
		const res = await request.sendRequest({
			method: 'post',
			url: `${URL}/all`,
			data: { offset: offset, userId: userId, type: 'radio' }
		})
		dispatch(setFavoriteRadios(res?.data))
	}
