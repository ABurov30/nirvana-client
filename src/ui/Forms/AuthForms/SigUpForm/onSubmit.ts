import { FormEvent } from 'react'
import { NavigateFunction } from 'react-router-dom'

import { ThunkDispatch, UnknownAction } from '@reduxjs/toolkit'

import {
	setIsOpen,
	setNotification
} from '../../../../entities/Notification/slice'
import { Severity } from '../../../../entities/Notification/types'
import { signUpThunk } from '../../../../entities/User/thunk'

import { validateEmail } from '../../../../shared/utils/validateEmail'
import { validatePassword } from '../../../../shared/utils/validatePassword'

export async function onSubmit(
	e: FormEvent<HTMLFormElement>,
	dispatch: ThunkDispatch<{}, undefined, UnknownAction>,
	navigate: NavigateFunction
) {
	e.preventDefault()

	const form = e.currentTarget
	const formData = {
		email: form.email.value,
		name: form.nickname.value,
		password: form.password.value,
		repeatPassword: form.repeatPassword.value
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
	const isLogged = await dispatch(
		signUpThunk(formData) as unknown as UnknownAction
	)
	if (isLogged as unknown as boolean) {
		navigate('/')
	}
}
