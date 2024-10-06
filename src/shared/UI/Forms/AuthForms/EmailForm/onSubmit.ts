import { type FormEvent } from 'react'
import { type NavigateFunction } from 'react-router-dom'

import { type ThunkDispatch, type UnknownAction } from '@reduxjs/toolkit'

import { t } from 'i18next'

import { setIsOpen, setNotification } from 'entities/Notification/slice'
import { Severity } from 'entities/Notification/types'
import { findEmailThunk } from 'entities/User/thunk'

import { type RootState } from 'shared/Redux/store'
import { validateEmail } from 'shared/utils/validateEmail'

export async function onSubmit(
	e: FormEvent<HTMLFormElement>,
	dispatch: ThunkDispatch<RootState, undefined, UnknownAction>,
	navigate: NavigateFunction
) {
	e.preventDefault()

	const form = e.currentTarget
	const formData = { email: form.email.value as string }
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
	if (!validateEmail(formData.email, dispatch)) {
		return
	}
	const isSent = await dispatch(
		findEmailThunk(formData) as unknown as UnknownAction
	)

	if (isSent as unknown as boolean) {
		navigate('/auth/codePage')
	}
}
