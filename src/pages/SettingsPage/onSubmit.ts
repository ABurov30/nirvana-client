import { FormEvent } from 'react'
import { ThunkDispatch, UnknownAction } from '@reduxjs/toolkit'
import { ActiveType } from '../../entities/User/types'
import { validateEmail } from '../../shared/utils/validateEmail'
import { changeUserInfoThunk } from '../../entities/User/thunk'
import { setIsOpen, setNotification } from '../../entities/Notification/slice'
import { Severity } from '../../entities/Notification/types'

export async function onSubmit(
	e: FormEvent<HTMLFormElement>,
	dispatch: ThunkDispatch<{}, undefined, UnknownAction>,
	user: ActiveType
) {
	e.preventDefault()

	const formData = Object.fromEntries(new FormData(e.target))
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
	const isChanged = await dispatch(changeUserInfoThunk(formData))
	if (isChanged) {
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
