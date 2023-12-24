import { request } from '../services/Request/Requets'
import { fetchFlags } from '../flags/fetchFlags'
import { useEffect, useState } from 'react'

export function useUniqCountry(path: string) {
	const [countries, setCounties] = useState([])

	useEffect(() => {
		request
			.sendRequest({
				url: `${path}/uniqCountry`
			})
			.then(res => setCounties(res.data))
			.catch(e => console.error(e))
	}, [])

	return countries
}
