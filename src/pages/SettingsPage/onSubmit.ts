import { FormEvent } from 'react'

import { ThunkDispatch, UnknownAction } from '@reduxjs/toolkit'

import { setIsOpen, setNotification } from '../../entities/Notification/slice'
import { Severity } from '../../entities/Notification/types'
import { changeUserInfoThunk } from '../../entities/User/thunk'
import { ActiveType } from '../../entities/User/types'

import { validateEmail } from '../../shared/utils/validateEmail'

export async function onSubmit(
	e: FormEvent<HTMLFormElement>,
	dispatch: ThunkDispatch<{}, undefined, UnknownAction>,
	user: ActiveType
) {
	e.preventDefault()

	const form = e.currentTarget
	const formData = {
		email: form.email.value,
		nickname: form.nickname.value,
		userId: ''
	}

	if (!formData.email) {
		dispatch(
			setNotification({
				message: 'Enter new email',
				severity: Severity.info
			})
		)
		dispatch(setIsOpen(true))
		return
	}
	if (!formData.nickname) {
		dispatch(
			setNotification({
				message: 'Enter new nickname',
				severity: Severity.info
			})
		)
		dispatch(setIsOpen(true))
		return
	}

	if (formData.nickname === user.nickname && formData.email === user.email) {
		dispatch(
			setNotification({
				message: 'New values and old same',
				severity: Severity.error
			})
		)
		dispatch(setIsOpen(true))
		return
	}
	if (!validateEmail(formData.email, dispatch)) {
		return
	}
	formData.userId = user.id
	const isChanged = await dispatch(
		changeUserInfoThunk(formData) as unknown as UnknownAction
	)
	if (isChanged as unknown as boolean) {
		dispatch(
			setNotification({
				message: 'Successfully changed',
				severity: Severity.success
			})
		)
		dispatch(setIsOpen(true))
		return
	}
}
