import { type ThunkDispatch, type UnknownAction } from '@reduxjs/toolkit'

import { setNotification } from 'entities/Notification/slice'
import { Severity } from 'entities/Notification/types'

import { type RootState } from 'shared/Redux/store'

export function shareHandler(
	dispatch: ThunkDispatch<RootState, undefined, UnknownAction>
) {
	const URL = `${window.location.protocol}//${window.location.host}${window.location.pathname}`
	const title = 'Check out best free music streaming app. Dive in Nirvana'
	navigator.clipboard.writeText(title + ' ' + URL)
	dispatch(
		setNotification({
			message: 'Link copied',
			severity: Severity.success
		})
	)
}
