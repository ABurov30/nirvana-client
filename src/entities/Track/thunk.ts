import { ThunkActionCreater } from '../../shared/Redux/store'
import { request } from '../../shared/Request/Requets'
import { setTracks } from './slice'

const URL = '/track'

export const getTracksThunk: ThunkActionCreater<number> =
	(offset: number, userId: number) => async dispatch => {
		const res = await request.sendRequest({
			method: 'post',
			url: `${URL}`,
			data: { offset: offset, userId: userId }
		})
		dispatch(setTracks(res?.data))
	}
