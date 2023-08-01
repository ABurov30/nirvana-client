import { request } from '../services/Request/Requets'
import { fetchFlags } from '../flags/fetchFlags'
import { useEffect, useState } from 'react'

export function useUniqGenre() {
	const [genres, setGenres] = useState([])

	if (fetchFlags.IS_UNIQ_GENRES_DOWLOADED) {
		let genres = sessionStorage.getItem('IS_UNIQ_NAMES_DOWLOADED')
		return JSON.parse(genres)
	}
	useEffect(() => {
		request
			.sendRequest({
				url: '/music/uniqGenre'
			})
			.then(res => setGenres(res))
			.catch(e => console.log(e))

		sessionStorage.setItem(
			'IS_UNIQ_GENRES_DOWLOADED',
			JSON.stringify(genres)
		)
	}, [])

	return genres
}
