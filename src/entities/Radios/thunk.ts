import { ThunkActionCreater } from '../../shared/Redux/store'
import { FormType } from '../../UI/Forms/SearchForm/type'
import { request } from '../../shared/Request/Requets'
import { setRadio } from './slice'

const URL = '/radio'

export const getAllRadiosThunk: ThunkActionCreater<number> =
	(offset: number, userId: string) => async dispatch => {
		const res = await request.sendRequest({
			method: 'post',
			url: `${URL}`,
			data: { offset, userId }
		})
		dispatch(setRadio(res?.data))
	}

export const searchRadioThunk: ThunkActionCreater<FormType> =
	(formData: FormType, userId: string) => async dispatch => {
		const res = await request.sendRequest({
			method: 'post',
			url: `${URL}/search`,
			data: { ...formData, userId }
		})
		dispatch(setRadio(res?.data))
	}
