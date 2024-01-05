import { setIsOpen, setNotification } from '../../entities/Notification/slice'
import { newPasswordThunk, signUpThunk } from '../../entities/User/thunk'
import { validatePassword } from './validatePassword'
import { validateEmail } from './validateEmail'
import { NavigateFunction } from 'react-router-dom'
import { ThunkDispatch, UnknownAction } from '@reduxjs/toolkit'
import { FormEvent } from 'react'

export async function onSubmitNewPassword(
	e: FormEvent<HTMLFormElement>,
	dispatch: ThunkDispatch<{}, undefined, UnknownAction>,
	userId: string,
	navigate?: NavigateFunction
) {
	e.preventDefault()
	const formData = Object.fromEntries(new FormData(e.target))
	formData.userId = userId
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
	const isChanged = await dispatch(newPasswordThunk(formData))
	if ((isChanged as unknown as boolean) && navigate) {
		navigate('/')
	}
}
