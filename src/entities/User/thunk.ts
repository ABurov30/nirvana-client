import type { LoginForm, SignUpForm } from '../../../../types/formType'
import type { ThunkActionCreater } from '../../services/Redux/store'
import { request } from '../../services/Request/Requets'
import { setNotification } from '../Notification/slice'
import { logoutUser, setUser } from './slice'

export const signUpThunk: ThunkActionCreater<SignUpForm> =
	formData => async dispatch => {
		const res = await request.sendRequest({
			method: 'post',
			url: '/auth/signup',
			data: {
				nickname: formData.name,
				email: formData.email,
				password: formData.password
			}
		})
		if (res.status !== 200) {
			dispatch(setUser({ ...res?.data, status: 'guest' }))
			return false
		} else {
			dispatch(setUser({ ...res?.data, status: 'logged' }))
			return true
		}
	}

export const loginUserThunk: ThunkActionCreater<LoginForm> =
	formData => async dispatch => {
		const res = await request.sendRequest({
			method: 'post',
			url: '/auth/login',
			data: formData
		})
		console.log(res)
		if (res?.status !== 200) {
			dispatch(setUser({ ...res?.data, status: 'guest' }))
			dispatch(
				setNotification({
					message: res?.data,
					severity: 'error'
				})
			)
			return false
		} else {
			dispatch(setUser({ ...res?.data, status: 'logged' }))
			return true
		}
	}

export const checkUserThunk: ThunkActionCreater = () => dispatch => {
	request
		.sendRequest({
			url: '/auth/check'
		})
		.then(res => {
			if (res?.status !== 200) {
				dispatch(setUser({ status: 'guest' }))
				dispatch(
					setNotification({
						message: res?.data,
						severity: 'info'
					})
				)
			} else {
				dispatch(setUser({ ...res?.data, status: 'logged' }))
			}
		})
		.catch(err => {
			console.error(err)
			dispatch(logoutUser())
		})
}

export const logoutThunk: ThunkActionCreater = () => dispatch => {
	request
		.sendRequest({
			url: '/auth/logout'
		})
		.then(() => dispatch(logoutUser()))
		.catch(e => console.error(e))
}
