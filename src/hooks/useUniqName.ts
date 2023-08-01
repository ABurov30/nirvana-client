import { request } from '../services/Request/Requets'
import { fetchFlags } from '../flags/fetchFlags'
import { useEffect, useState } from 'react'

export function useUniqName() {
	const [names, setNames] = useState([])

	if (fetchFlags.IS_UNIQ_NAMES_DOWLOADED) {
		let names = sessionStorage.getItem('IS_UNIQ_NAMES_DOWLOADED')
		return JSON.parse(names)
	}
	
	useEffect(() => {
		request
			.sendRequest({
				url: '/music/uniqNames'
			})
			.then(res => setNames(res))
			.catch(e => console.log(e))

		sessionStorage.setItem('IS_UNIQ_NAMES_DOWLOADED', JSON.stringify(names))
	}, [])

	return names
}
