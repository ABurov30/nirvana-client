import type { LoginForm, SignUpForm } from '../../../../types/formType'
import type { ThunkActionCreater } from '../../services/Redux/store'
import type { UserFromBackend } from '../../../../types/userType'
import { request } from '../../services/Request/Requets'
import { logoutUser, setUser } from './slice'
import axios from 'axios'

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
			dispatch(setUser({ ...res, status: 'guest' }))
		}

		dispatch(setUser({ ...res, status: 'logged' }))
		return true
	}

export const loginUserThunk: ThunkActionCreater<LoginForm> =
	formData => async dispatch => {
		const res = await request.sendRequest({
			method: 'post',
			url: '/auth/login',
			data: formData
		})
		if (res.status !== 200) {
			dispatch(setUser({ ...res, status: 'guest' }))
		}

		dispatch(setUser({ ...res, status: 'logged' }))
		return true
	}

export const checkUserThunk: ThunkActionCreater = () => dispatch => {
	request
		.sendRequest({
			url: '/auth/check'
		})
		.then(data => {
			console.log(data)
			if (data.status !== 200) {
				dispatch(setUser({ status: 'quest' }))
			}
			dispatch(setUser({ ...data, status: 'logged' }))
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
		.catch(console.log)
}
