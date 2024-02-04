import { UnknownAction } from 'redux'
import { ThunkDispatch } from 'redux-thunk'

import { t } from 'i18next'

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
			message: t('Alert.linkCopied'),
			severity: Severity.success
		})
	)
}
