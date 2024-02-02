import { type ThunkAction, type UnknownAction } from '@reduxjs/toolkit'

import { logoutUser, setUser } from './slice'

import { type UserInfoForm } from 'pages/SettingsPage/types'

import { setNotification } from 'entities/Notification/slice'
import { Severity } from 'entities/Notification/types'

import { UserStatus } from './types'
import { type CodeForm } from 'shared/UI/Forms/AuthForms/CodeForm/types'
import { type EmailForm } from 'shared/UI/Forms/AuthForms/EmailForm/types'
import { type LoginForm } from 'shared/UI/Forms/AuthForms/LoginForm/types'
import { type ResetPasswordForm } from 'shared/UI/Forms/AuthForms/ResetPasswordForm/types'
import { type SignUpForm } from 'shared/UI/Forms/AuthForms/SigUpForm/types'

import { type RootState } from 'shared/Redux/store'
import { request } from 'shared/Request/Requets'

export const signUpThunk =
	(
		formData: SignUpForm
	): ThunkAction<void, RootState, unknown, UnknownAction> =>
	async dispatch => {
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
			dispatch(setUser({ ...res?.data, status: UserStatus.guest }))
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
					message: 'Email sent successfully',
					severity: Severity.success
				})
			)
			return true
		}
	}

export const loginUserThunk =
	(
		formData: LoginForm
	): ThunkAction<void, RootState, unknown, UnknownAction> =>
	async dispatch => {
		const res = await request.sendRequest({
			method: 'post',
			url: '/auth/login',
			data: formData
		})
		if (res?.status !== 200) {
			dispatch(setUser({ ...res?.data, status: UserStatus.guest }))
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

export const checkUserThunk =
	(): ThunkAction<void, RootState, unknown, UnknownAction> => dispatch => {
		request
			.sendRequest({
				url: '/auth/check'
			})
			.then(res => {
				if (res?.status !== 200) {
					dispatch(setUser({ status: UserStatus.guest }))
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
				dispatch(logoutUser({}))
			})
	}

export const logoutThunk =
	(): ThunkAction<void, RootState, unknown, UnknownAction> => dispatch => {
		request
			.sendRequest({
				url: '/auth/logout'
			})
			.then(() => {
				dispatch(logoutUser({}))
				dispatch(
					setNotification({
						message: 'Let`hang out at next time',
						severity: Severity.success
					})
				)
			})
			.catch(e => {
				console.error(e)
				setNotification({
					message: e.message,
					severity: Severity.error
				})
			})
	}

export const deleteUserThunk =
	(userId: string): ThunkAction<void, RootState, unknown, UnknownAction> =>
	dispatch => {
		request
			.sendRequest({
				url: '/auth',
				method: 'DELETE',
				data: { userId }
			})
			.then(() => {
				dispatch(logoutUser({}))
				dispatch(
					setNotification({
						message: 'I was nice time with u',
						severity: Severity.success
					})
				)
			})
			.catch(e => {
				console.error(e)
				setNotification({
					message: e.message,
					severity: Severity.error
				})
			})
	}

export const findEmailThunk =
	(
		formData: EmailForm
	): ThunkAction<void, RootState, unknown, UnknownAction> =>
	async dispatch => {
		const res = await request.sendRequest({
			method: 'post',
			url: '/auth/findEmail',
			data: formData
		})

		if (res?.status !== 200) {
			console.log(res.data)
			dispatch(logoutUser({}))
			dispatch(
				setNotification({
					message: res.data.message,
					severity: Severity.error
				})
			)
			return false
		} else {
			dispatch(
				setNotification({
					message:
						'E-mail sent successfully. Check it to reset password',
					severity: Severity.success
				})
			)
			return true
		}
	}

export const newPasswordThunk =
	(
		formData: ResetPasswordForm
	): ThunkAction<void, RootState, unknown, UnknownAction> =>
	async dispatch => {
		const res = await request.sendRequest({
			method: 'post',
			url: '/auth/newPassword',
			data: formData
		})

		if (res?.status !== 200) {
			console.log(res.data)
			dispatch(setUser({ ...res?.data, status: UserStatus.guest }))
			dispatch(
				setNotification({
					message: res?.data.message,
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

export const sendCodeThunk =
	(
		confirmationCode: CodeForm['confirmationCode']
	): ThunkAction<void, RootState, unknown, UnknownAction> =>
	async dispatch => {
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

export const changeUserInfoThunk =
	(
		formData: UserInfoForm
	): ThunkAction<void, RootState, unknown, UnknownAction> =>
	async dispatch => {
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
			dispatch(setUser({ ...res?.data, status: 'active' }))
			return true
		}
	}
