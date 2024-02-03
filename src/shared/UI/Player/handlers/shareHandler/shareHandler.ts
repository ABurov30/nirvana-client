import { UnknownAction } from 'redux'
import { ThunkDispatch } from 'redux-thunk'

import { setNotification } from 'entities/Notification/slice'
import { Severity } from 'entities/Notification/types'

import { RootState } from 'shared/Redux/store'

export function shareHandler(
	dispatch: ThunkDispatch<RootState, undefined, UnknownAction>,
	title: string
) {
	navigator.clipboard.writeText(title + ' ' + URL)
	dispatch(
		setNotification({
			message: 'Link copied',
			severity: Severity.success
		})
	)
}
