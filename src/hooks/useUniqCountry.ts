import { request } from '../services/Request/Requets'
import { fetchFlags } from '../flags/fetchFlags'
import { useEffect, useState } from 'react'

export function useUniqCountry() {
	const [countries, setCounties] = useState([])

	useEffect(() => {
		request
			.sendRequest({
				url: '/music/uniqCountry'
			})
			.then(res => setCounties(res))
			.catch(e => console.error(e))
	}, [])

	return countries
}
