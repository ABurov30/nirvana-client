import { FormEvent } from 'react'
import { NavigateFunction } from 'react-router-dom'

import { ThunkDispatch, UnknownAction } from '@reduxjs/toolkit'

import { validatePassword } from './validatePassword'

import { setIsOpen, setNotification } from '../../entities/Notification/slice'
import { Severity } from '../../entities/Notification/types'
import { newPasswordThunk } from '../../entities/User/thunk'

export async function onSubmitNewPassword(
	e: FormEvent<HTMLFormElement>,
	dispatch: ThunkDispatch<{}, undefined, UnknownAction>,
	userId: string,
	navigate?: NavigateFunction
) {
	e.preventDefault()

	const form = e.currentTarget
	const formData = {
		password: form.password.value,
		repeatPassword: form.repeatPassword.value
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
	const isChanged = await dispatch(
		newPasswordThunk(formData) as unknown as UnknownAction
	)
	if ((isChanged as unknown as boolean) && navigate) {
		navigate('/')
	}
}
