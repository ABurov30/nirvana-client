import { request } from '../services/Request/Requets'
import { fetchFlags } from '../flags/fetchFlags'
import { useEffect, useState } from 'react'

export function useUniqCountry() {
	const [countries, setCounties] = useState([])

	if (fetchFlags.IS_UNIQ_COUNRIES_DOWLOADED) {
		let countries = sessionStorage.getItem('IS_UNIQ_COUNRIES_DOWLOADED')
		return JSON.parse(countries)
	}

	useEffect(() => {
		request
			.sendRequest({
				url: '/music/uniqCountry'
			})
			.then(res => setCounties(res))
			.catch(e => console.log(e))

		sessionStorage.setItem(
			'IS_UNIQ_COUNRIES_DOWLOADED',
			JSON.stringify(countries)
		)
	}, [])

	return countries
}
