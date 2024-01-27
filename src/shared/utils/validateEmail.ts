import { ThunkDispatch, UnknownAction } from '@reduxjs/toolkit'

import { setIsOpen, setNotification } from 'entities/Notification/slice'
import { Severity } from 'entities/Notification/types'

export function validateEmail(
	email: string,
	dispatch: ThunkDispatch<{}, undefined, UnknownAction>
): boolean {
	const regex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/

	if (!regex.test(email)) {
		dispatch(
			setNotification({
				message: 'It`s not a valid email address',
				severity: Severity.error
			})
		)
		dispatch(setIsOpen(true))
		return false
	}

	return true
}
