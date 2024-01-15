import {
	setIsOpen,
	setNotification
} from '../../../../entities/Notification/slice'
import { sendCodeThunk } from '../../../../entities/User/thunk'
import { NavigateFunction } from 'react-router-dom'
import { ThunkDispatch, UnknownAction } from '@reduxjs/toolkit'
import { Severity } from '../../../../entities/Notification/types'

export async function onSubmit(
	confirmationCode: string,
	dispatch: ThunkDispatch<{}, undefined, UnknownAction>,
	navigate: NavigateFunction
) {
	if (!confirmationCode || confirmationCode.length !== 6) {
		dispatch(
			setNotification({
				message: 'Enter code',
				severity: Severity.info
			})
		)
		dispatch(setIsOpen(true))
		return
	}
	const userId = await dispatch(sendCodeThunk(confirmationCode))

	if (userId as unknown as boolean) {
		navigate(`/auth/resetPassword/${userId}`)
		dispatch(
			setNotification({
				message: 'Enter new password',
				severity: Severity.info
			})
		)
	}
}
