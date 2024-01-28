import { FormEvent } from 'react'
import { NavigateFunction } from 'react-router-dom'

import { ThunkDispatch, UnknownAction } from '@reduxjs/toolkit'

import { setIsOpen, setNotification } from 'entities/Notification/slice'
import { Severity } from 'entities/Notification/types'
import { findEmailThunk } from 'entities/User/thunk'

import { RootState } from 'shared/Redux/store'
import { validateEmail } from 'shared/utils/validateEmail'

export async function onSubmit(
	e: FormEvent<HTMLFormElement>,
	dispatch: ThunkDispatch<RootState, undefined, UnknownAction>,
	navigate: NavigateFunction
) {
	e.preventDefault()

	const form = e.currentTarget
	const formData = { email: form.email.value }
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
	const isSent = dispatch(
		findEmailThunk(formData) as unknown as UnknownAction
	)
	if (isSent as unknown as boolean) {
		navigate('/auth/codePage')
	}
}