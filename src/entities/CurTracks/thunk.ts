import { ThunkActionCreater } from '../../shared/Redux/store'
import { setNotification } from '../Notification/slice'
import { request } from '../../shared/Request/Requets'

const URL = '/favorite'

export const removeLikeThunk: ThunkActionCreater<any> =
	(trackId: string, userId: string, type: string) => async dispatch => {
		const res = await request.sendRequest({
			method: 'post',
			url: `${URL}/remove`,
			data: { id: trackId, userId, type }
		})
		if (res !== 200)
			dispatch(
				setNotification({
					message: res?.data,
					severity: 'error'
				})
			)
	}

export const addLikeThunk: ThunkActionCreater<any> =
	(trackId: string, userId: string, type: string) => async dispatch => {
		const res = await request.sendRequest({
			method: 'post',
			url: `${URL}/add`,
			data: { id: trackId, userId, type }
		})
        if (res !== 200)
			dispatch(
				setNotification({
					message: res?.data,
					severity: 'error'
				})
			)
	}
