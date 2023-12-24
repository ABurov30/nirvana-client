import { fetchFlags } from '../flags/fetchFlags'
import { request } from '../Request/Requets'
import { useEffect, useState } from 'react'

export function useUniqGenre(path: string) {
	const [genres, setGenres] = useState([])

	useEffect(() => {
		request
			.sendRequest({
				url: `${path}/uniqGenre`
			})
			.then(res => setGenres(res.data))
			.catch(e => console.error(e))
	}, [])

	return genres
}
