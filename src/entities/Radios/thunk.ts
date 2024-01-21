import { ThunkAction, UnknownAction } from '@reduxjs/toolkit'
import { RootState } from '../../shared/Redux/store'
import { request } from '../../shared/Request/Requets'
import { setRadio } from './slice'
import { SearchRadioForm } from './types'

const URL = '/radio'

export const getAllRadiosThunk =
	(
		offset: number,
		userId: string
	): ThunkAction<void, RootState, unknown, UnknownAction> =>
	async dispatch => {
		const res = await request.sendRequest({
			method: 'post',
			url: `${URL}`,
			data: { offset, userId }
		})
		dispatch(setRadio(res?.data))
	}

export const searchRadioThunk =
	(
		formData: SearchRadioForm,
		userId: string
	): ThunkAction<void, RootState, unknown, UnknownAction> =>
	async dispatch => {
		const res = await request.sendRequest({
			method: 'post',
			url: `${URL}/search`,
			data: { ...formData, userId }
		})
		dispatch(setRadio(res?.data))
	}
