import { request } from '../services/Request/Requets'
import { fetchFlags } from '../flags/fetchFlags'
import { useEffect, useState } from 'react'

export function useUniqName() {
	const [names, setNames] = useState([])

	useEffect(() => {
		request
			.sendRequest({
				url: '/music/uniqNames'
			})
			.then(res => setNames(res))
			.catch(e => console.log(e))
	}, [])

	return names
}
