import { request } from '../Request/Requets'
import { useEffect, useState } from 'react'

export function useUniqStation() {
	const [station, setStations] = useState([])

	useEffect(() => {
		request
			.sendRequest({
				url: `/radio/uniqNames`
			})
			.then(res => setStations(res.data))
			.catch(e => console.error(e))
	}, [])

	return station
}
