import {
	setIsOpen,
	setNotification
} from '../../../../entities/Notification/slice'
import { signUpThunk } from '../../../../entities/User/thunk'
import { validatePassword } from './validatePassword'
import { validateEmail } from './validateEmail'
import { NavigateFunction } from 'react-router-dom'
import { ThunkDispatch, UnknownAction } from '@reduxjs/toolkit'
import { FormEvent } from 'react'

export async function onSubmit(
	e: FormEvent<HTMLFormElement>,
	dispatch: ThunkDispatch<{}, undefined, UnknownAction>,
	navigate: NavigateFunction
) {
	e.preventDefault()
	const formData = Object.fromEntries(new FormData(e.target))
	if (!formData.name) {
		dispatch(
			setNotification({
				message: 'Enter your name',
				severity: 'info'
			})
		)
		dispatch(setIsOpen(true))
		return
	}
	if (!formData.email) {
		dispatch(
			setNotification({
				message: 'Enter your email',
				severity: 'info'
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
				severity: 'info'
			})
		)
		dispatch(setIsOpen(true))
		return
	}
	if (!formData.repeatPassword) {
		dispatch(
			setNotification({
				message: 'Repeat password',
				severity: 'info'
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
	const isLogged = await dispatch(signUpThunk(formData))
	if (isLogged as unknown as boolean) {
		navigate('/')
	}
}