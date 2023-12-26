import { useEffect } from 'react'
import { useAppDispatch } from '../../../../shared/Redux/hooks'
import { request } from '../../../../shared/Request/Requets'
import { setNotification } from '../../../../entities/Notification/slice'
import { AutoCompleteProps } from '../types'
import { ThunkDispatch, UnknownAction } from '@reduxjs/toolkit'

export function useDebounce(
	field: AutoCompleteProps['field'],
	dispatch: ThunkDispatch<{}, undefined, UnknownAction>
) {
	if (!field.value) return
	useEffect(() => {
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
							severity: 'error',
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
