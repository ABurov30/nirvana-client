import type { LoginForm, SignUpForm } from '../../../../types/formType'
import type { UserFromBackend } from '../../../../types/userType'
import { request } from '../../../services/Request/Requets'
import type { ThunkActionCreater } from '../../store'
import { logoutUser, setUser } from './userSlice'
import axios from 'axios'

export const signUpThunk: ThunkActionCreater<SignUpForm> =
	formData => async dispatch => {
		const res = await request.sendRequest({
			method: 'post',
			url: '/auth/signup',
			data: {
				nickname: formData.nickname,
				email: formData.email,
				password: formData.password
			}
		})

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

		dispatch(setUser({ ...res, status: 'logged' }))
		return true
	}

export const checkUserThunk: ThunkActionCreater = () => dispatch => {
	request
		.sendRequest({
			url: '/auth/check'
		})
		.then(( data ) => dispatch(setUser({ ...data, status: 'logged' })))
		.catch(err => {
			console.log(err)
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
