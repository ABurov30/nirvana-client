import { ThunkActionCreater } from '../../services/Redux/store'
import { request } from '../../services/Request/Requets'
import { setImages } from './slice'

const URL = '/images'

export const getTopImagesThunk: ThunkActionCreater =
	offset => async dispatch => {
		const res = await request.sendRequest({
			method: 'get',
			url: `${URL}`
		})
		dispatch(setImages(res?.data))
	}
