import { ThunkActionCreater } from '../../shared/Redux/store'
import { request } from '../../shared/Request/Requets'
import { setPromo } from './slice'

const URL = '/promo'

export const getPromoThunk: ThunkActionCreater = offset => async dispatch => {
	const res = await request.sendRequest({
		method: 'get',
		url: `${URL}`
	})
	dispatch(setPromo(res?.data))
}
