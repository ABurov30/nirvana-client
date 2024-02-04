import { NavigateFunction } from 'react-router-dom'

import { ThunkDispatch, UnknownAction } from '@reduxjs/toolkit'

import { t } from 'i18next'

import { setIsOpen, setNotification } from 'entities/Notification/slice'
import { Severity } from 'entities/Notification/types'
import { sendCodeThunk } from 'entities/User/thunk'

import { RootState } from 'shared/Redux/store'

export async function onSubmit(
	confirmationCode: string,
	dispatch: ThunkDispatch<RootState, undefined, UnknownAction>,
	navigate: NavigateFunction
) {
	if (!confirmationCode || confirmationCode.length !== 6) {
		dispatch(
			setNotification({
				message: t('Alert.enterCode'),
				severity: Severity.info
			})
		)
		dispatch(setIsOpen(true))
		return
	}
	const userId = await dispatch(
		sendCodeThunk(confirmationCode) as unknown as UnknownAction
	)

	if (userId as unknown as boolean) {
		navigate(`/auth/resetPassword/${userId}`)
		dispatch(
			setNotification({
				message: t('Alert.enterNewPassword'),
				severity: Severity.info
			})
		)
	}
}
