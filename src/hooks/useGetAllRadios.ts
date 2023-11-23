import { getAllRadiosThunk } from '../entities/Radios/thunk'
import { useDispatch } from 'react-redux'
import { useLayoutEffect } from 'react'

export async function useGetAllRadios() {
	const dispatch = useDispatch()

	useLayoutEffect(() => {
		dispatch(getAllRadiosThunk(0))
	}, [])
}
