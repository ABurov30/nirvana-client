import { ThunkAction, UnknownAction } from '@reduxjs/toolkit'

import { setTracks } from './slice'

import { Severity } from '../Notification/types'
import { SearchTrackForm, UploadTrackFrom } from './types'

import { RootState } from '../../shared/Redux/store'
import { request } from '../../shared/Request/Requets'

import { setNotification } from '../Notification/slice'

const URL = '/track'

export const getTracksThunk =
	(
		offset: number,
		userId: string
	): ThunkAction<void, RootState, unknown, UnknownAction> =>
	async dispatch => {
		const res = await request.sendRequest({
			method: 'post',
			url: `${URL}`,
			data: { offset: offset, userId: userId }
		})
		dispatch(setTracks(res?.data))
	}

export const searchTracksThunk =
	(
		formData: SearchTrackForm,
		userId: string
	): ThunkAction<void, RootState, unknown, UnknownAction> =>
	async dispatch => {
		const res = await request.sendRequest({
			method: 'post',
			url: `${URL}/search`,
			data: { ...formData, userId }
		})
		dispatch(setTracks(res?.data))
	}

export const uploadTrackThunk =
	(
		formData: UploadTrackFrom
	): ThunkAction<void, RootState, unknown, UnknownAction> =>
	async dispatch => {
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
