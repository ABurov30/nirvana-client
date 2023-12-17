import { ThunkActionCreater } from "../../services/Redux/store"
import { request } from "../../services/Request/Requets"
import { setTracks } from "./slice"

const URL = '/track'

export const getTracksThunk: ThunkActionCreater<number> =
	offset => async dispatch => {
		const res = await request.sendRequest({
			method: 'post',
			url: `${URL}`,
			data: { offset: offset }
		})
		dispatch(setTracks(res?.data))
	}
