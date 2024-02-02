import { type FormEvent } from 'react'
import { type NavigateFunction } from 'react-router-dom'

import { type ThunkDispatch, type UnknownAction } from '@reduxjs/toolkit'

import {
	setIsOpen,
	setNotification
} from '../../../../../entities/Notification/slice'
import { Severity } from '../../../../../entities/Notification/types'
import { signUpThunk } from '../../../../../entities/User/thunk'

import { type RootState } from 'shared/Redux/store'

import { validateEmail } from '../../../../utils/validateEmail'
import { validatePassword } from '../../../../utils/validatePassword'

export async function onSubmit(
	e: FormEvent<HTMLFormElement>,
	dispatch: ThunkDispatch<RootState, undefined, UnknownAction>,
	navigate: NavigateFunction
) {
	e.preventDefault()

	const form = e.currentTarget
	const formData = {
		email: form.email.value as string,
		name: form.nickname.value as string,
		password: form.password.value as string,
		repeatPassword: form.repeatPassword.value as string
	}
	if (!formData.name) {
		dispatch(
			setNotification({
				message: 'Enter your name',
				severity: Severity.info
			})
		)
		dispatch(setIsOpen(true))
		return
	}
	if (!formData.email) {
		dispatch(
			setNotification({
				message: 'Enter your email',
				severity: Severity.info
			})
		)
		dispatch(setIsOpen(true))
		return
	}
	if (!validateEmail(formData.email, dispatch)) {
		return
	}
	if (!formData.password) {
		dispatch(
			setNotification({
				message: 'Enter password',
				severity: Severity.info
			})
		)
		dispatch(setIsOpen(true))
		return
	}
	if (!formData.repeatPassword) {
		dispatch(
			setNotification({
				message: 'Repeat password',
				severity: Severity.info
			})
		)
		dispatch(setIsOpen(true))
		return
	}
	if (
		!validatePassword(formData.password, formData.repeatPassword, dispatch)
	) {
		return
	}
	const isSent = await dispatch(
		signUpThunk(formData) as unknown as UnknownAction
	)
	if (isSent as unknown as boolean) {
		navigate('/')
	}
}
