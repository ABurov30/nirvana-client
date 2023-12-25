import { fetchFlags } from '../flags/fetchFlags'
import { request } from '../Request/Requets'
import { useEffect, useState } from 'react'

export function useUniqCountry() {
	const [countries, setCounties] = useState([])

	useEffect(() => {
		request
			.sendRequest({
				url: `/radio/uniqCountry`
			})
			.then(res => setCounties(res.data))
			.catch(e => console.error(e))
	}, [])

	return countries
}
