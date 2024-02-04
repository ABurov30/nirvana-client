import { ThunkDispatch, UnknownAction } from '@reduxjs/toolkit'

import { t } from 'i18next'

import { setIsOpen, setNotification } from 'entities/Notification/slice'
import { Severity } from 'entities/Notification/types'

import { RootState } from 'shared/Redux/store'

export function validatePassword(
	password: string,
	repeatPassword: string,
	dispatch: ThunkDispatch<RootState, undefined, UnknownAction>
): boolean {
	const regex =
		/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

	if (!regex.test(password)) {
		dispatch(
			setNotification({
				message: t('Alert.passwordValidationError'),
				severity: Severity.error
			})
		)
		dispatch(setIsOpen(true))
		return false
	}
	if (password !== repeatPassword) {
		dispatch(
			setNotification({
				message: t('Alert.passwordMatchError'),
				severity: Severity.error
			})
		)
		dispatch(setIsOpen(true))
		return false
	}
	return true
}
