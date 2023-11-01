import { request } from '../services/Request/Requets'
import { fetchFlags } from '../flags/fetchFlags'
import { useEffect, useState } from 'react'

export function useUniqGenre() {
	const [genres, setGenres] = useState([])

	useEffect(() => {
		request
			.sendRequest({
				url: '/music/uniqGenre'
			})
			.then(res => setGenres(res))
			.catch(e => console.error(e))

	}, [])

	return genres
}
