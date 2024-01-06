import { ThunkActionCreater } from '../../shared/Redux/store'
import { setNotification } from '../Notification/slice'
import { request } from '../../shared/Request/Requets'
import { Severity } from '../Notification/types'

const URL = '/favorite'

export const removeLikeThunk: ThunkActionCreater<any> =
	(trackId: string, userId: string, type: string) => async dispatch => {
		const res = await request.sendRequest({
			method: 'delete',
			url: `${URL}`,
			data: { id: trackId, userId, type }
		})
		if (res !== 200) {
			dispatch(
				setNotification({
					message: res?.data,
					severity: Severity.error
				})
			)
		} else {
			dispatch(
				setNotification({
					message: 'Like removed',
					severity: Severity.success
				})
			)
		}
	}

export const addLikeThunk: ThunkActionCreater<any> =
	(trackId: string, userId: string, type: string) => async dispatch => {
		const res = await request.sendRequest({
			method: 'post',
			url: `${URL}`,
			data: { id: trackId, userId, type }
		})
		if (res !== 200) {
			dispatch(
				setNotification({
					message: res?.data,
					severity: Severity.error
				})
			)
		} else {
			dispatch(
				setNotification({
					message: 'Liked',
					severity: Severity.success
				})
			)
		}
	}
