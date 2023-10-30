import { getAllRadiosThunk } from '../entities/radiosThunk'
import { fetchFlags } from '../flags/fetchFlags'
import { RadioType } from '../types/radioTypes'
import { useAppSelector } from '../redux/hooks'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

export function useGetAllRadios(): RadioType[] {
	let { radios } = useAppSelector(state => state.radio)
	const dispatch = useDispatch()

	if (fetchFlags.IS_TOP_RADIOS_DOWLOADED) {
		let radios = sessionStorage.getItem('IS_TOP_RADIOS_DOWLOADED')
		return JSON.parse(radios)
	}

	useEffect(() => {
		dispatch(getAllRadiosThunk())
		sessionStorage.setItem(
			'IS_TOP_RADIOS_DOWLOADED',
			JSON.stringify(radios)
		)
	}, [])

	return radios
}
