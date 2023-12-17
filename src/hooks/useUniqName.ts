import { request } from '../services/Request/Requets'
import { fetchFlags } from '../flags/fetchFlags'
import { useEffect, useState } from 'react'

export function useUniqName() {
	const [names, setNames] = useState([])

	useEffect(() => {
		request
			.sendRequest({
				url: '/radio/uniqNames'
			})
			.then(res => setNames(res.data))
			.catch(e => console.log(e))
	}, [])

	return names
}
