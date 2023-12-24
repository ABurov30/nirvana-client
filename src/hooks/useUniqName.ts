import { request } from '../services/Request/Requets'
import { fetchFlags } from '../flags/fetchFlags'
import { useEffect, useState } from 'react'

export function useUniqName(path: string) {
	const [names, setNames] = useState([])

	useEffect(() => {
		request
			.sendRequest({
				url: `${path}/uniqNames`
			})
			.then(res => setNames(res.data))
			.catch(e => console.log(e))
	}, [])

	return names
}
