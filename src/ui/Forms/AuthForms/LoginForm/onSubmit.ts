import { NavigateFunction } from 'react-router-dom'
import {
	setIsOpen,
	setNotification
} from '../../../../entities/Notification/slice'
import { loginUserThunk } from '../../../../entities/User/thunk'
import { FormEvent } from 'react'
import { ThunkDispatch, UnknownAction } from '@reduxjs/toolkit'
import { Severity } from '../../../../entities/Notification/types'

export async function onSubmit(
	e: FormEvent<HTMLFormElement>,
	dispatch: ThunkDispatch<{}, undefined, UnknownAction>,
	navigate: NavigateFunction
) {
	e.preventDefault()

	const form = e.currentTarget
	const formData = {
		email: form.email.value,
		password: form.password.value
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
	const isLogged = await dispatch(loginUserThunk(formData))
	if (isLogged as unknown as boolean) {
		navigate('/')
	}
}
