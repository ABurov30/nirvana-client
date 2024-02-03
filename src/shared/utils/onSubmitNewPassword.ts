import { type FormEvent } from 'react'
import { type NavigateFunction } from 'react-router-dom'

import { type ThunkDispatch, type UnknownAction } from '@reduxjs/toolkit'

import { validatePassword } from './validatePassword'

import { setIsOpen, setNotification } from 'entities/Notification/slice'
import { Severity } from 'entities/Notification/types'
import { newPasswordThunk } from 'entities/User/thunk'

import { type RootState } from 'shared/Redux/store'

interface onSubmitNewPasswordArgs {
	e: FormEvent<HTMLFormElement>
	dispatch: ThunkDispatch<RootState, undefined, UnknownAction>
	navigate?: NavigateFunction
	userId: string
}

export async function onSubmitNewPassword({
	e,
	dispatch,
	navigate,
	userId
}: onSubmitNewPasswordArgs) {
	e.preventDefault()

	const form = e.currentTarget
	const formData = {
		password: form.password.value as string,
		repeatPassword: form.repeatPassword.value as string,
		userId
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
