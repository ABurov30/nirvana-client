import { useAppDispatch, useAppSelector } from '../services/Redux/hooks'
import { checkUserThunk } from '../entities/User/thunk'
import { useLayoutEffect } from 'react'

export function useCheckUser() {
	const dispatch = useAppDispatch()
	useLayoutEffect(() => {
		dispatch(checkUserThunk())
	}, [])

	const user = useAppSelector(state => state.user)
	return user
}
