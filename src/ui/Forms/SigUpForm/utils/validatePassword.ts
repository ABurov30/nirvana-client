import { ThunkDispatch, UnknownAction } from '@reduxjs/toolkit'
import {
	setIsOpen,
	setNotification
} from '../../../../entities/Notification/slice'

export function validatePassword(
	password: string,
	repeatPassword: string,
	dispatch: ThunkDispatch<{}, undefined, UnknownAction>
): boolean {
	const regex =
		/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

	if (!regex.test(password)) {
		dispatch(
			setNotification({
				message:
					'Enter a password that is at least eight characters long and contains at least one uppercase letter, one lowercase letter, one number, and one special character:',
				severity: 'error'
			})
		)
		dispatch(setIsOpen(true))
		return false
	}
	if (password !== repeatPassword) {
		dispatch(
			setNotification({
				message: 'Passwords do not match, try again',
				severity: 'error'
			})
		)
		dispatch(setIsOpen(true))
		return false
	}
	return true
}
