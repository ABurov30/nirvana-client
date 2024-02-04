import { FormEvent } from 'react'

import { ThunkDispatch, UnknownAction } from '@reduxjs/toolkit'

import { t } from 'i18next'

import { setIsOpen, setNotification } from 'entities/Notification/slice'
import { Severity } from 'entities/Notification/types'
import { changeUserInfoThunk } from 'entities/User/thunk'
import { ActiveType } from 'entities/User/types'

import { RootState } from 'shared/Redux/store'
import { validateEmail } from 'shared/utils/validateEmail'

export async function onSubmit(
	e: FormEvent<HTMLFormElement>,
	dispatch: ThunkDispatch<RootState, undefined, UnknownAction>,
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
				message: t('Alert.enterEmail'),
				severity: Severity.info
			})
		)
		dispatch(setIsOpen(true))
		return
	}
	if (!formData.nickname) {
		dispatch(
			setNotification({
				message: t('Alert.enterNickname'),
				severity: Severity.info
			})
		)
		dispatch(setIsOpen(true))
		return
	}

	if (formData.nickname === user.nickname && formData.email === user.email) {
		dispatch(
			setNotification({
				message: t('Alert.enterNewNicknameOrEmail'),
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
	await dispatch(changeUserInfoThunk(formData) as unknown as UnknownAction)
}
