import type { ThunkActionCreater } from '../../shared/Redux/store'
import { setNotification } from '../Notification/slice'
import { request } from '../../shared/Request/Requets'
import { logoutUser, setUser } from './slice'
import { EmailForm } from '../../UI/Forms/AuthForms/EmailForm/types'
import { LoginForm } from '../../UI/Forms/AuthForms/LoginForm/types'
import { SignUpForm } from '../../UI/Forms/AuthForms/SigUpForm/types'
import { ResetPasswordForm } from '../../UI/Forms/AuthForms/ResetPasswordForm/types'
import { CodeForm } from '../../UI/Forms/AuthForms/CodeForm/types'
import { Severity } from '../Notification/types'
import { UserInfoForm } from '../../pages/SettingsPage/types'

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
			dispatch(
				setNotification({
					message: res.data,
					severity: Severity.error
				})
			)
			return false
		} else {
			dispatch(setUser({ status: 'non-active' }))
			dispatch(
				setNotification({
					message: res.data,
					severity: Severity.success
				})
			)
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
		if (res?.status !== 200) {
			dispatch(setUser({ ...res?.data, status: 'guest' }))
			dispatch(
				setNotification({
					message: res?.data,
					severity: Severity.error
				})
			)
			return false
		} else {
			dispatch(setUser({ ...res?.data, status: 'active' }))
			dispatch(
				setNotification({
					message: 'It` nice to e-meet u',
					severity: Severity.success
				})
			)
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
						severity: Severity.info
					})
				)
			} else {
				dispatch(setUser({ ...res?.data, status: 'active' }))
				dispatch(
					setNotification({
						message: 'Glad that u still here',
						severity: Severity.success
					})
				)
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
		.then(() => {
			dispatch(logoutUser())
			dispatch(
				setNotification({
					message: 'Let`hang out at next time',
					severity: Severity.success
				})
			)
		})
		.catch(e => {
			console.error(e)
			setNotification({ message: e.message, severity: Severity.error })
		})
}

export const deleteUserThunk: ThunkActionCreater = userId => dispatch => {
	request
		.sendRequest({
			url: '/auth',
			method: 'DELETE',
			data: { userId }
		})
		.then(() => {
			dispatch(logoutUser())
			dispatch(
				setNotification({
					message: 'I was nice time with u',
					severity: Severity.success
				})
			)
		})
		.catch(e => {
			console.error(e)
			setNotification({ message: e.message, severity: Severity.error })
		})
}

export const findEmailThunk: ThunkActionCreater<EmailForm> =
	formData => async dispatch => {
		request
			.sendRequest({
				method: 'post',
				url: '/auth/findEmail',
				data: formData
			})
			.then(res => {
				if (res?.status !== 200) {
					dispatch(
						setNotification({
							message: res.data,
							severity: Severity.error
						})
					)
					return false
				} else {
					dispatch(
						setNotification({
							message: res.data,
							severity: Severity.success
						})
					)
					return true
				}
			})
			.catch(e => {
				console.error(e)
				setNotification({
					message: e.message,
					severity: Severity.error
				})
			})
	}

export const newPasswordThunk: ThunkActionCreater<ResetPasswordForm> =
	formData => async dispatch => {
		const res = await request.sendRequest({
			method: 'post',
			url: '/auth/newPassword',
			data: formData
		})

		if (res?.status !== 200) {
			dispatch(setUser({ ...res?.data, status: 'guest' }))
			dispatch(
				setNotification({
					message: res?.data,
					severity: Severity.error
				})
			)
			return false
		} else {
			dispatch(setUser({ ...res?.data, status: 'active' }))
			dispatch(
				setNotification({
					message: 'Password changed successfully',
					severity: Severity.success
				})
			)
			return true
		}
	}

export const sendCodeThunk: ThunkActionCreater<CodeForm> =
	confirmationCode => async dispatch => {
		const res = await request.sendRequest({
			method: 'get',
			url: `/auth/reset/${confirmationCode}`
		})

		if (res?.status !== 200) {
			dispatch(
				setNotification({
					message: res.data,
					severity: Severity.error
				})
			)
			return false
		} else {
			return res.data.userId
		}
	}

export const changeUserInfoThunk: ThunkActionCreater<UserInfoForm> =
	formData => async dispatch => {
		const res = await request.sendRequest({
			method: 'put',
			url: `/auth/userInfo`,
			data: formData
		})

		if (res?.status !== 200) {
			dispatch(
				setNotification({
					message: res.data,
					severity: Severity.error
				})
			)
			return false
		} else {
			console.log(res.data)
			dispatch(setUser({ ...res?.data, status: 'active' }))
			return true
		}
	}
