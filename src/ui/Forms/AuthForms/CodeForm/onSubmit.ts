import {
	setIsOpen,
	setNotification
} from '../../../../entities/Notification/slice'
import {
	findEmailThunk,
	sendCodeThunk,
	signUpThunk
} from '../../../../entities/User/thunk'
import { validatePassword } from '../../../../shared/utils/validatePassword'
import { validateEmail } from '../../../../shared/utils/validateEmail'
import { NavigateFunction } from 'react-router-dom'
import { ThunkDispatch, UnknownAction } from '@reduxjs/toolkit'
import { FormEvent } from 'react'

export async function onSubmit(
	confirmationCode: string,
	dispatch: ThunkDispatch<{}, undefined, UnknownAction>,
	navigate: NavigateFunction
) {
	console.log(confirmationCode, 'submit')
	if (!confirmationCode) {
		dispatch(
			setNotification({
				message: 'Enter code',
				severity: 'info'
			})
		)
		dispatch(setIsOpen(true))
		return
	}
	const userId = await dispatch(sendCodeThunk(confirmationCode))
	console.log(userId, 'befor conditional')
	if (userId) {
		console.log(userId, 'after conditional')
		navigate(`/auth/resetPassword/${userId}`)
		dispatch(
			setNotification({
				message: 'Enter new password',
				severity: 'info'
			})
		)
	}
}
