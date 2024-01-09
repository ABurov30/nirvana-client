import { ThunkActionCreater } from '../../shared/Redux/store'
import { request } from '../../shared/Request/Requets'
import { setNotification } from '../Notification/slice'
import { Severity } from '../Notification/types'
import { setTracks } from './slice'

const URL = '/track'

export const getTracksThunk: ThunkActionCreater<number, string> =
	(offset: number, userId: number) => async dispatch => {
		const res = await request.sendRequest({
			method: 'post',
			url: `${URL}`,
			data: { offset: offset, userId: userId }
		})
		dispatch(setTracks(res?.data))
	}

export const searchTracksThunk: ThunkActionCreater<FormType> =
	(formData: FormType, userId: string) => async dispatch => {
		const res = await request.sendRequest({
			method: 'post',
			url: `${URL}/search`,
			data: { ...formData, userId }
		})
		dispatch(setTracks(res?.data))
	}

export const uploadTrackThunk: ThunkActionCreater<FormType> =
	(formData: FormType) => async dispatch => {
		request
			.sendRequest({
				method: 'post',
				url: `${URL}/uploadTrack`,
				data: formData
			})
			.then(res => {
				if (res?.status !== 200) {
					dispatch(
						setNotification({
							severity: Severity.error,
							message: res?.data
						})
					)
					console.log(res, 'res')
				}
				dispatch(
					setNotification({
						severity: Severity.success,
						message: 'Track uploaded'
					})
				)
			})
			.catch(err => {
				dispatch(
					setNotification({
						severity: Severity.error,
						message: err.message
					})
				)
			})
	}
