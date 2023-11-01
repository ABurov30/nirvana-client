import { getAllRadiosThunk } from '../entities/Radios/thunk'
import { useAppSelector } from '../services/Redux/hooks'
import { RadioType } from '../entities/Radios/types'
import { setRadio } from '../entities/Radios/slice'
import { useEffect, useLayoutEffect } from 'react'
import { fetchFlags } from '../flags/fetchFlags'
import { useDispatch } from 'react-redux'

export function useGetAllRadios(): RadioType[] {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getAllRadiosThunk())
	}, [])
}
