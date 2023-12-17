import { ThunkActionCreater } from '../../services/Redux/store'
import { request } from '../../services/Request/Requets'
import { setPromo } from './slice'

const URL = '/promo'

export const getPromoThunk: ThunkActionCreater = offset => async dispatch => {
	const res = await request.sendRequest({
		method: 'get',
		url: `${URL}`
	})
	dispatch(setPromo(res?.data))
}
