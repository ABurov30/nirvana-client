import {
	setIsOpen,
	setNotification
} from '../../../../entities/Notification/slice'
import { findEmailThunk, signUpThunk } from '../../../../entities/User/thunk'
import { validatePassword } from '../../../../shared/utils/validatePassword'
import { validateEmail } from '../../../../shared/utils/validateEmail'
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
	const isSent = dispatch(findEmailThunk(formData))
	if (isSent as unknown as boolean) {
		navigate('/')
	}
}
