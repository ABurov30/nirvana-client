import { ThunkAction, UnknownAction } from '@reduxjs/toolkit'

import { setPromo } from './slice'

import { RootState } from '../../shared/Redux/store'
import { request } from '../../shared/Request/Requets'

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
