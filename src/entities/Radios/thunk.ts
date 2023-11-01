import { AppThunk, ThunkActionCreater } from '../../services/Redux/store'
import { request } from '../../services/Request/Requets'
import { setOneRadio, setRadio } from './slice'
import FormType from '../../ui/Form/type'

export const getAllRadiosThunk: ThunkActionCreater = () => async dispatch => {
	const res = await request.sendRequest({ url: '/music' })
	dispatch(setRadio(res))
}

export const getRadioById: ThunkActionCreater<number> =
	id => async dispatch => {
		const res = await request.sendRequest({
			url: `/music/${id}`
		})
		dispatch(setOneRadio(res))
	}

export const searchRadioThunk: ThunkActionCreater<FormType> =
	formData => async dispatch => {
		const res = await request.sendRequest({
			method: 'post',
			url: '/music/search',
			data: formData
		})
		dispatch(setRadio(res))
	}
