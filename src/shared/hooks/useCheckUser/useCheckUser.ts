import { useLayoutEffect } from 'react'

import { checkUserThunk } from '../../../entities/User/thunk'

import { useAppDispatch, useAppSelector } from '../../Redux/hooks'

export function useCheckUser() {
	const dispatch = useAppDispatch()
	useLayoutEffect(() => {
		dispatch(checkUserThunk())
	}, [])

	const user = useAppSelector(state => state.user)
	return user
}
