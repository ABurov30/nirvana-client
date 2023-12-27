import {
	setIsOpen,
	setNotification
} from '../../../../entities/Notification/slice'
import { newPasswordThunk, signUpThunk } from '../../../../entities/User/thunk'
import { validatePassword } from '../../../../shared/utils/validatePassword'
import { validateEmail } from '../../../../shared/utils/validateEmail'
import { NavigateFunction } from 'react-router-dom'
import { ThunkDispatch, UnknownAction } from '@reduxjs/toolkit'
import { FormEvent } from 'react'

export async function onSubmit(
	e: FormEvent<HTMLFormElement>,
	dispatch: ThunkDispatch<{}, undefined, UnknownAction>,
	navigate: NavigateFunction,
	userId: string
) {
	e.preventDefault()
	const formData = Object.fromEntries(new FormData(e.target))
	formData.userId = userId
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
	const isChanged = await dispatch(newPasswordThunk(formData))
	if (isChanged as unknown as boolean) {
		navigate('/')
	}
}
