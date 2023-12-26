import { fetchFlags } from '../flags/fetchFlags'
import { request } from '../Request/Requets'
import { useEffect, useState } from 'react'

export function useAutocomplete(path:string) {
	const [values, setValues] = useState([])

	useEffect(() => {
		request
			.sendRequest({
				url: path
			})
			.then(res => setValues(res.data))
			.catch(e => console.error(e))
	}, [])

	return values
}
