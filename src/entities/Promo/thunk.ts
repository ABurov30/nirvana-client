import { ThunkAction, UnknownAction } from '@reduxjs/toolkit'
import { request } from '../../shared/Request/Requets'
import { setPromo } from './slice'
import { RootState } from '../../shared/Redux/store'

const URL = '/promo'

export const getPromoThunk =
	(): ThunkAction<void, RootState, unknown, UnknownAction> =>
	async dispatch => {
		const res = await request.sendRequest({
			method: 'get',
			url: `${URL}`
		})
		dispatch(setPromo(res?.data))
	}
