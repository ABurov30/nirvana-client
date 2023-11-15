import { getAllRadiosThunk } from '../entities/Radios/thunk'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

export function useGetAllRadios() {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getAllRadiosThunk())
	}, [])
}
