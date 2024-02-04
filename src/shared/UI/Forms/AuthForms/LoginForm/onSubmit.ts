import { FormEvent } from 'react'
import { NavigateFunction } from 'react-router-dom'

import { ThunkDispatch, UnknownAction } from '@reduxjs/toolkit'

import { t } from 'i18next'

import { setIsOpen, setNotification } from 'entities/Notification/slice'
import { Severity } from 'entities/Notification/types'
import { loginUserThunk } from 'entities/User/thunk'

import { RootState } from 'shared/Redux/store'

export async function onSubmit(
	e: FormEvent<HTMLFormElement>,
	dispatch: ThunkDispatch<RootState, undefined, UnknownAction>,
	navigate: NavigateFunction
) {
	e.preventDefault()

	const form = e.currentTarget
	const formData = {
		email: form.email.value,
		password: form.password.value
	}
	if (!formData.email) {
		dispatch(
			setNotification({
				message: t('Alert.enterEmail'),
				severity: Severity.info
			})
		)
		dispatch(setIsOpen(true))
		return
	}
	if (!formData.password) {
		dispatch(
			setNotification({
				message: t('Alert.enterPassword'),
				severity: Severity.info
			})
		)
		dispatch(setIsOpen(true))
		return
	}
	const isLogged = await dispatch(
		loginUserThunk(formData) as unknown as UnknownAction
	)
	if (isLogged as unknown as boolean) {
		navigate('/')
	}
}
