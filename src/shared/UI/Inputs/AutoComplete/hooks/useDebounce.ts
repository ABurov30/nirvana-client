import { useLayoutEffect } from 'react'

import { ThunkDispatch, UnknownAction } from '@reduxjs/toolkit'

import { setNotification } from 'entities/Notification/slice'
import { Severity } from 'entities/Notification/types'

import { AutoCompleteProps } from '../types'

import { RootState } from 'shared/Redux/store'
import { request } from 'shared/Request/Requets'

export function useDebounce(
	field: AutoCompleteProps['field'],
	dispatch: ThunkDispatch<RootState, undefined, UnknownAction>
) {
	if (!field.value) return
	useLayoutEffect(() => {
		const timeoutId = setTimeout(() => {
			request
				.sendRequest({
					method: 'POST',
					url: field?.path,
					data: { [field?.name]: field?.value }
				})
				.then(res => {
					field?.setOptions(res.data)
				})
				.catch(e => {
					console.error(e)
					dispatch(
						setNotification({
							severity: Severity.error,
							message: e.message
						})
					)
				})
		}, 500)
		return () => {
			clearTimeout(timeoutId)
		}
	}, [field.value])
}
