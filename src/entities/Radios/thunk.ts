import { AppThunk, ThunkActionCreater } from '../../services/Redux/store'
import { request } from '../../services/Request/Requets'
import { setOneRadio, setRadio } from './slice'
import FormType from '../../ui/Form/type'

export const getAllRadiosThunk: ThunkActionCreater<number | undefined> =
	offset => async dispatch => {
		console.log(offset, 'offset in thunk')
		const res = await request.sendRequest({
			method: 'post',
			url: '/music',
			data: { offset: offset }
		})
		dispatch(setRadio(res?.data))
	}

export const getRadioById: ThunkActionCreater<number> =
	id => async dispatch => {
		const res = await request.sendRequest({
			url: `/music/${id}`
		})
		dispatch(setOneRadio(res?.data))
	}

export const searchRadioThunk: ThunkActionCreater<FormType> =
	formData => async dispatch => {
		const res = await request.sendRequest({
			method: 'post',
			url: '/music/search',
			data: formData
		})
		dispatch(setRadio(res?.data))
	}
